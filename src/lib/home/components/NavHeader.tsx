import { Bell, User } from "lucide-react";
import Logo from "@/assets/logo.png";
import ProfileImage from "@/assets/pl-image.png";
import { Button } from "@/components/ui/button";

export default function NavHeader() {
    return (
        <nav className="w-full fixed top-0 left-0 flex h-18 justify-between items-center p-4 bg-white z-50">
            {/* Logo */}
            <img src={Logo} alt="Logo" className="h-10 rounded-full" />

            {/* Icons */}
            <div className="flex items-center gap-4">
                <Button style={{ backgroundColor: "transparent" }}
                    className="p-2 rounded-full hover:bg-gray-200">

                    <Bell className="w-6 h-6 text-gray-600" />
                </Button>
                <button 
                style={{ backgroundColor: "transparent" }}
                className="p-2 rounded-full hover:bg-gray-200">
                    <img
                        src={ProfileImage}
                        alt="Profile"
                        className="w-10 h-10 rounded-full object-cover"
                    />
                </button>
            </div>
        </nav>
    );
}