import React, { useState, useRef } from "react";
import { FaMicrophone } from "react-icons/fa";

interface AudioRecorderProps {
    onRecordingComplete: (audioBlob: Blob, transcript: string) => void;
    onTranscriptUpdate: (transcript: string) => void; // New callback for live transcript updates
}

const AudioRecorder: React.FC<AudioRecorderProps> = ({ onRecordingComplete , onTranscriptUpdate }) => {
    const [isRecording, setIsRecording] = useState(false);
    const [audioUrl, setAudioUrl] = useState<string | null>(null);
    const [recordingError, setRecordingError] = useState<string | null>(null);
    const [transcript, setTranscript] = useState("");
    const mediaRecorderRef = useRef<MediaRecorder | null>(null);
    const audioChunksRef = useRef<Blob[]>([]);
    const recognitionRef = useRef<SpeechRecognition | null>(null);

    const toggleRecording = async () => {
        if (isRecording) {
            // Stop recording and speech recognition
            if (mediaRecorderRef.current) mediaRecorderRef.current.stop();
            if (recognitionRef.current) recognitionRef.current.stop();
            setIsRecording(false);
        } else {
            try {
                // Initialize Speech Recognition
                const recognition = new (window as any).webkitSpeechRecognition();
                recognition.continuous = true;
                recognition.interimResults = true;
                recognition.lang = "en-US";

                recognition.onresult = (event: SpeechRecognitionEvent) => {
                    let finalTranscript = "";
                    for (let i = 0; i < event.results.length; i++) {
                        if (event.results[i].isFinal) {
                            finalTranscript += event.results[i][0].transcript + " ";
                        }
                    }
                    setTranscript(finalTranscript);
                    onTranscriptUpdate(finalTranscript);
                };

                recognitionRef.current = recognition;
                recognition.start();

                // Initialize Media Recorder
                const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
                mediaRecorderRef.current = new MediaRecorder(stream);
                audioChunksRef.current = [];

                mediaRecorderRef.current.ondataavailable = (event) => {
                    audioChunksRef.current.push(event.data);
                };

                mediaRecorderRef.current.onstop = () => {
                    const audioBlob = new Blob(audioChunksRef.current, { type: "audio/wav" });
                    const audioUrl = URL.createObjectURL(audioBlob);
                    setAudioUrl(audioUrl);
                    onRecordingComplete(audioBlob, transcript);
                };

                mediaRecorderRef.current.start();
                setIsRecording(true);
                setRecordingError(null);
            } catch (err) {
                console.error("Error accessing microphone:", err);
                setRecordingError("Failed to access microphone. Please grant permission.");
            }
        }
    };

    return (
        <div className="flex flex-col items-center">
            <div
                className={`p-4 rounded-full cursor-pointer transition-all duration-200 ease-in-out ${
                    isRecording ? "bg-red-500" : "bg-white border-2 border-gray-500"
                }`}
                onClick={toggleRecording}
            >
                <FaMicrophone className={`text-gray-800 ${isRecording ? "text-white" : "text-gray-500"}`} />
            </div>

            {recordingError && <p className="text-red-500">{recordingError}</p>}

            {audioUrl && !isRecording && (
                <div className="mt-4">
                    <p>Audio recorded:</p>
                    <audio controls>
                        <source src={audioUrl} type="audio/wav" />
                        Your browser does not support the audio element.
                    </audio>
                    <div className="mt-2">
                        <a href={audioUrl} download="recorded-audio.wav" className="text-blue-500 hover:underline">
                            Download Audio
                        </a>
                    </div>
                </div>
            )}

           
        </div>
    );
};

export default AudioRecorder;

