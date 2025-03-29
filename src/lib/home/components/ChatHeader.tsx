import Logo from "@/assets/LogoSmall.png";

const ChatHeader: React.FC = () => {
  return (
    <div className="text-center p-4">
      <div className="mb-4 flex items-center justify-center">
        <div className="bg-transparent p-3 rounded-full">
          <img src={Logo} alt="React Logo" className="w-20 h-20" />
        </div>
      </div>
      <div className="mb-2 p-6">
      <h2 className="text-4xl font-bold">Hi Daniel,</h2> {/* Increased font size */}
      <p className="text-3xl font-semibold text-gray-600">Can I help you with anything?</p> {/* Increased font size and made it bold */}
      </div>
      <p className="text-sm text-gray-500">
        Ready to assist you with anything from answering questions to providing recommendations 😊
      </p>

    </div>
  );
};

export default ChatHeader;
