import { X } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

interface AlertBarProps {
    message: string;
    linkText: string;
    linkTo: string;
    onClose?: () => void;
}

const AlertBar = ({ message, linkText, linkTo }: AlertBarProps) => {
    const [isVisible, setIsVisible] = useState(true);

    if (!isVisible) return null;

    return (
        <div className="bg-red-600 text-white px-4 py-3 relative z-50">
            <div className="container mx-auto flex items-center justify-between gap-4">
                <div className="flex-1 flex flex-wrap items-center gap-2 text-sm md:text-base font-medium">
                    <span className="bg-white text-red-600 text-xs font-bold px-2 py-0.5 rounded uppercase">Urgent</span>
                    <span>{message}</span>
                    <Link to={linkTo} className="underline hover:text-red-100 font-bold whitespace-nowrap">
                        {linkText}
                    </Link>
                </div>
                <button
                    onClick={() => setIsVisible(false)}
                    className="p-1 hover:bg-red-700 rounded-full transition-colors"
                    aria-label="Close alert"
                >
                    <X className="w-5 h-5" />
                </button>
            </div>
        </div>
    );
};

export default AlertBar;
