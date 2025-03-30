import { useState } from "react";
import ChatHeader from "./components/ChatHeader";
import FilePreview from "./components/FilePreview";
import MessageInput from "./components/MessageInput";
import ChatFooter from "./components/ChatFooter";
import NavHeader from "./components/NavHeader";
import AppointmentSection from "./appointments_section/appointment_section_main";
import Suggesstions from "./components/suggesstions";
import Suggestions from "./components/suggesstions";


const ChatInterface: React.FC = () => {
  const [file, setFile] = useState<File | null>(null);
  const [message, setMessage] = useState("");

  const handleSendMessage = (msg: string, selectedFile: File | null) => {
    console.log("Sending message:", { msg, selectedFile });
    setMessage("");
    setFile(null);
  };



  return (
    <div className="">
      <NavHeader />
      <div className="pt-16 px-4 ">
        <ChatHeader />
        {file && <FilePreview file={file} onRemove={() => setFile(null)} />}
        <div className="flex-grow">
          <MessageInput onSend={handleSendMessage} />
        </div>
       
        <AppointmentSection />
        <ChatFooter />
      </div>
    </div>
  );
};


export default ChatInterface;
