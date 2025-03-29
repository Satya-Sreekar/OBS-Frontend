import { Button } from "@/components/ui/button";
import React from "react";

const tasks = [
    "Review Overdue progress note",
    "Create a treatment compliance report",
    "List of appointments",
    "Identify high-risk patients",
    "Create new patient record",
];

const Suggesstions: React.FC = () => {
    return (
        <div className="flex flex-wrap gap-4 p-8 w-220 justify-center">
            {tasks.map((task, index) => (
                <button
                    style={{ backgroundColor: "transparent", borderRadius: "16px", }}
                    key={index}
                    className="flex items-center justify-center  h-8 text-gray-800 bg-white border border-gray-300 rounded-xl shadow-sm hover:bg-gray-100"
                >
                    {task}
                </button>
            ))}
        </div>

    );
};

export default Suggesstions;