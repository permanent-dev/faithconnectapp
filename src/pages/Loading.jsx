import { useEffect } from 'react';
import '../Loading.css';

const Loading = () => {
    useEffect(() => {
        // Optional: Add any initialization logic here
    }, []);

    return (
        <div className="loading-container">
            <div className="logo-container">
                {/* Replace with your actual logo */}
                <img src="/ChatGPT_Image_Jun_3__2025__04_38_53_PM-removebg-preview 1.png" alt="FaithConnect Logo" className="app-logo" />
            </div>
            <div className="loading-spinner"></div>
        </div>
    );
};

export default Loading;