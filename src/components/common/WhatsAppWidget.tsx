"use client";

import React, { useState } from 'react';
import { trackEvent } from '../../utils/analytics';

interface WhatsAppWidgetProps {
  phoneNumber: string;
  message?: string;
  className?: string;
}

const WhatsAppWidget: React.FC<WhatsAppWidgetProps> = ({ phoneNumber, message = 'Hello!', className = '' }) => {
  const [isLoading, setIsLoading] = useState(false);

  const handleClick = () => {
    trackEvent('WhatsApp Chat Initiated', { message });
    setIsLoading(true);
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, '_blank');
    setTimeout(() => setIsLoading(false), 1000);
  };

  return (
    <button
      onClick={handleClick}
      disabled={isLoading}
      className={`fixed bottom-4 right-4 z-50 bg-[#25D366] text-white rounded-full p-3 shadow-lg hover:bg-[#128C7E] transition duration-300 flex items-center ${className} ${isLoading ? 'opacity-50 cursor-not-allowed' : ''}`}
      aria-label="Chat on WhatsApp"
    >
      {isLoading ? (
        <span className="animate-spin">⌛</span>
      ) : (
        <>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 175.216 175.552"
            width="24"
            height="24"
            fill="currentColor"
          >
            <path d="M 87.4 0 C 39.195 0 0.181 39.014 0.181 87.219 c 0 16.748 4.721 32.394 12.899 45.693 l -13.08 39.082 l 40.709 -12.814 c 12.741 7.069 27.451 11.093 43.117 11.093 c 48.205 0 87.219 -39.014 87.219 -87.219 C 171.045 39.014 132.031 0 87.4 0 z M 87.4 159.882 c -14.504 0 -28.117 -3.964 -39.709 -10.859 l -27.846 8.76 l 9.072 -26.93 c -7.741 -12.15 -12.198 -26.453 -12.198 -41.634 c 0 -42.321 34.267 -76.588 76.588 -76.588 c 42.321 0 76.588 34.267 76.588 76.588 c 0 42.321 -34.267 76.663 -76.588 76.663 z m 45.295 -57.644 c -2.304 -1.152 -13.615 -6.723 -15.744 -7.499 c -2.129 -0.776 -3.673 -1.152 -5.217 0.776 c -1.544 1.928 -5.991 7.499 -7.347 9.043 c -1.356 1.544 -2.712 1.731 -5.016 0.579 c -2.304 -1.152 -9.744 -3.593 -18.556 -11.459 c -6.861 -6.111 -11.496 -13.674 -12.852 -15.978 c -1.356 -2.304 -0.144 -3.555 1.018 -4.707 c 1.044 -1.044 2.304 -2.712 3.456 -4.068 c 1.152 -1.356 1.544 -2.304 2.32 -3.848 c 0.776 -1.544 0.388 -2.9 -0.194 -4.068 c -0.582 -1.168 -5.217 -12.581 -7.155 -17.221 c -1.938 -4.64 -3.877 -3.877 -5.233 -3.877 c -1.356 0 -2.9 -0.194 -4.444 -0.194 c -1.544 0 -4.068 0.582 -6.197 2.886 c -2.129 2.304 -8.12 7.935 -8.12 19.349 c 0 11.414 8.314 22.441 9.466 23.985 c 1.152 1.544 15.978 25.529 39.577 34.755 c 23.599 9.226 23.599 6.147 27.846 5.759 c 4.247 -0.388 13.615 -5.571 15.55 -10.987 c 1.935 -5.416 1.935 -10.081 1.353 -11.045 c -0.582 -0.964 -2.126 -1.546 -4.43 -2.698 z" />
          </svg>
          <span className="ml-2 hidden md:inline">Chat with us</span>
        </>
      )}
    </button>
  );
};

export default WhatsAppWidget;