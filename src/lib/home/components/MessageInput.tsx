import { useState } from "react";
import { FaPaperclip, FaMicrophone, FaPaperPlane } from "react-icons/fa";
import { Button } from "../../../components/ui/button";
import { Input } from "../../../components/ui/input";
import AudioRecorder from "./AudioRecorder";
import Dictaphone from "./AudioRecorder";
import VoiceToText from "./AudioRecorder";
import Suggestions from "./suggesstions";

interface MessageInputProps {
  onSend: (message: string, file: File | null) => void;
}

const MessageInput: React.FC<MessageInputProps> = ({ onSend }) => {
  const [file, setFile] = useState<File | null>(null);
  const [message, setMessage] = useState("");
  const [isRecording, setIsRecording] = useState(false);

  // Handle file selection
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files?.[0] || null;
    setFile(selectedFile);
  };

  // Handle message sending
  const handleSendMessage = () => {
    if (message.trim() || file) {
      onSend(message, file);
      setMessage("");
      setFile(null);
    }
  };

  // Handle audio recording completion
  const handleAudioRecordingComplete = (blob: Blob, transcript: string) => {
    const audioFile = new File([blob], "audio.wav", { type: "audio/wav" });
    setFile(audioFile);
    setMessage(transcript); // Update text input with the transcribed text
  };

  // Update transcript in real time
  const handleTranscriptUpdate = (transcript: string) => {
    setMessage(transcript); // Update input field as speech is transcribed
  };


  // Toggle recording state
  const toggleRecording = () => {
    setIsRecording(!isRecording);
  };
  const handleSuggestionClick = (task: string) => {
    console.log("Suggestion clicked:", task);
    setMessage(task);
  };

  return (
    <div>
      <div className="w-220 flex items-center space-x-2 px-0 py-8">
        <div className="relative flex-1">
          <label
            htmlFor="file-upload"
            className="cursor-pointer text-gray-500 absolute left-2 top-1/2 transform -translate-y-1/2"
          >
            <FaPaperclip />
            <input
              id="file-upload"
              type="file"
              className="hidden"
              onChange={handleFileChange}
            />
          </label>
          <Input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Hey, please take a look at the PDF and create a new patient record"
            // style={{ paddingRight: "40px",borderColor: "grey" }} // Adjusted padding-right for the icon space

            className="w-full p-6 pr-16 pl-8 border rounded-full border-2 border-gray-500" // Adjusted padding-right for the icon space
          />
          <Button
            variant="link"
            style={{ backgroundColor: "transparent", border: "none" }}
            onClick={handleSendMessage}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-blue-500 text-white p-2 rounded-full border-2 border-gray-500"
          >
            <FaPaperPlane className="text-black" />
          </Button>
        </div>

        {/* Audio Recorder Component */}
        <div className="flex items-center space-x-2">
          <AudioRecorder
            onRecordingComplete={handleAudioRecordingComplete}
            onTranscriptUpdate={handleTranscriptUpdate} // Live transcript updates
          />
          {/* <Dictaphone/> */}
          {/* <VoiceToText/> */}
          {isRecording && <p className="text-gray-500">Recording...</p>}
        </div>

      </div>
      <Suggestions onSuggestionClick={handleSuggestionClick} />
    </div>
  );
};

export default MessageInput;
