import React, { useState, useRef } from 'react';
import { FaMicrophone } from 'react-icons/fa';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';


import { Mic, MicOff } from "lucide-react";
import { useVoiceToText } from "react-speakup";

interface AudioRecorderProps {
    onRecordingComplete: (audioBlob: Blob, transcript: string) => void;
}

const AudioRecorder: React.FC<AudioRecorderProps> = ({ onRecordingComplete }) => {
    const [isRecording, setIsRecording] = useState(false);
    const [audioUrl, setAudioUrl] = useState<string | null>(null);
    const [recordingError, setRecordingError] = useState<string | null>(null);
    const mediaRecorderRef = useRef<MediaRecorder | null>(null);
    const audioChunksRef = useRef<Blob[]>([]);

    const { transcript, resetTranscript } = useSpeechRecognition();

    if (!SpeechRecognition.browserSupportsSpeechRecognition()) {
        return <p>Your browser does not support speech recognition.</p>;
    }

    const toggleRecording = async () => {
        if (isRecording) {
            if (mediaRecorderRef.current) {
                mediaRecorderRef.current.stop();
            }
            SpeechRecognition.stopListening();
            setIsRecording(false);
        } else {
            try {
                const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
                mediaRecorderRef.current = new MediaRecorder(stream);
                audioChunksRef.current = [];

                mediaRecorderRef.current.ondataavailable = event => {
                    audioChunksRef.current.push(event.data);
                };

                mediaRecorderRef.current.onstop = () => {
                    const audioBlob = new Blob(audioChunksRef.current, { type: 'audio/wav' });
                    const audioUrl = URL.createObjectURL(audioBlob);
                    setAudioUrl(audioUrl);
                    onRecordingComplete(audioBlob, transcript);
                };

                mediaRecorderRef.current.start();
                SpeechRecognition.startListening({ continuous: true });
                resetTranscript();
                setIsRecording(true);
                setRecordingError(null);
            } catch (err) {
                console.error('Error accessing microphone:', err);
                setRecordingError('Failed to access microphone. Please grant permission.');
            }
        }
    };

    return (
        <div className="flex flex-col items-center">
            <div
                className={`p-4 rounded-full cursor-pointer transition-all duration-200 ease-in-out ${isRecording ? 'bg-red-500' : 'bg-white border-2 border-gray-500'}`}
                onClick={toggleRecording}
            >
                <FaMicrophone className={`text-gray-500 ${isRecording ? 'text-white' : 'text-gray-500'}`} />
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

            {transcript && (
                <div className="mt-4 p-2 border border-gray-400 rounded">
                    <p className="font-bold">Transcribed Text:</p>
                    <p className="text-gray-700">{transcript}</p>
                </div>
            )}
        </div>
    );
};

// export default AudioRecorder;




const Dictaphone = () => {
  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition
  } = useSpeechRecognition();

  if (!browserSupportsSpeechRecognition) {
    return <span>Browser doesn't support speech recognition.</span>;
  }

  return (
    <div>
      <p>Microphone: {listening ? 'on' : 'off'}</p>
      <button onClick={() => SpeechRecognition.startListening()}>Start</button>
      <button onClick={SpeechRecognition.stopListening}>Stop</button>
      <button onClick={resetTranscript}>Reset</button>
      <p>{transcript}</p>
    </div>
  );
};
// export default Dictaphone;


const VoiceToText = () => {
  const { startListening, stopListening, transcript } = useVoiceToText({
    continuous: true,
    lang: "en-US",
    
    
  });

  return (
    <div className="flex flex-col gap-6">
      {" "}
      <div className="flex gap-6">
        <Mic onClick={startListening} role="button" />
        <MicOff onClick={stopListening} role="button" />
      </div>
      <h2>{transcript}</h2>
    </div>
  );
};

export default VoiceToText;