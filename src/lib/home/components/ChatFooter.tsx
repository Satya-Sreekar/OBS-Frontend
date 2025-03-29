import { Button } from "@/components/ui/button";

const ChatFooter: React.FC = () => {
    return (
      <div className="mt-4 text-center text-sm text-gray-500 border-t pt-4 w-full max-w-2xl">
        <p>Footer</p>
        <Button variant="destructive">Ghost</Button>
      </div>
    );
  };
  
  export default ChatFooter;
  