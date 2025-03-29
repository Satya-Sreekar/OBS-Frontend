import { useState } from "react";
import { FaPaperclip, FaMicrophone, FaPaperPlane } from "react-icons/fa";
import { Button } from "../../../components/ui/button";
import { Input } from "../../../components/ui/input";
import AudioRecorder from "./AudioRecorder";
import Dictaphone from "./AudioRecorder";
import VoiceToText from "./AudioRecorder";

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
  const handleAudioRecordingComplete = (blob: Blob) => {
    const audioFile = new File([blob], "audio.wav", { type: "audio/wav" });
    setFile(audioFile); // Set the audio file as the file to send
  };

  // Toggle recording state
  const toggleRecording = () => {
    setIsRecording(!isRecording);
  };

  return (
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
          className="w-full p-6 pr-16 pl-8 border rounded-full" // Adjusted padding-right for the icon space
        />
        <Button
          variant="link"
          style={{ backgroundColor: "transparent", border: "none" }}
          onClick={handleSendMessage}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-blue-500 text-white p-2 rounded-full"
        >
          <FaPaperPlane className="text-black" />
        </Button>
      </div>

      {/* Audio Recorder Component */}
      <div className="flex items-center space-x-2">
        {/* <AudioRecorder onRecordingComplete={handleAudioRecordingComplete} /> */}
        {/* <Dictaphone/> */}
        <VoiceToText/>
        {isRecording && <p className="text-gray-500">Recording...</p>}
      </div>
    </div>
  );
};

export default MessageInput;
