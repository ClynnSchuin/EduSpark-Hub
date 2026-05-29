import { useState, useEffect } from 'react';
import { Mail, MessageCircle, X, Sparkles } from 'lucide-react';
import { BUSINESS_INFO } from '../data';

export default function FloatingContactButtons() {
  const [isVisible, setIsVisible] = useState(false);
  const [showNotification, setShowNotification] = useState(false);

  useEffect(() => {
    // Elegant staggered entrance on page load
    const visibilityTimer = setTimeout(() => {
      setIsVisible(true);
    }, 1000);

    const notificationTimer = setTimeout(() => {
      setShowNotification(true);
    }, 4000);

    return () => {
      clearTimeout(visibilityTimer);
      clearTimeout(notificationTimer);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3.5 select-none font-sans">
      {/* Slide-in Prompt notification badge */}
      {showNotification && (
        <div className="relative bg-black border border-[#FFD700] rounded-sm p-4 shadow-[0_4px_20px_rgba(255,215,0,0.25)] max-w-[270px] animate-in slide-in-from-bottom duration-500 ease-out flex gap-3">
          <button
            onClick={() => setShowNotification(false)}
            className="absolute top-2 right-2 text-gray-500 hover:text-[#FFD700] transition-colors focus:outline-none cursor-pointer"
            id="close-floating-notify"
          >
            <X className="w-3.5 h-3.5" />
          </button>
          <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#FFD700]/10 border border-[#FFD700]/40 flex items-center justify-center text-[#FFD700]">
            <Sparkles className="w-4 h-4" />
          </div>
          <div>
            <span className="block font-sans font-bold text-xs text-white">Need support right now?</span>
            <p className="text-[11px] text-gray-400 mt-1 font-light">
              Ask about projects or orals on WhatsApp for instant assistance!
            </p>
          </div>
        </div>
      )}

      {/* Contact widgets list */}
      <div className="flex flex-col gap-3">
        {/* WhatsApp Floating button */}
        <a
          href={`https://wa.me/${BUSINESS_INFO.whatsappRaw}?text=Hi%20EduSpark%20Hub,%20I%27d%20like%20to%20inquire%20about%20help%20with%20a%20school%20task!`}
          target="_blank"
          rel="noopener noreferrer"
          className="group relative flex items-center justify-center w-14 h-14 rounded-full bg-black border border-emerald-500 hover:border-emerald-400 text-emerald-400 hover:text-emerald-300 shadow-[0_0_15px_rgba(16,185,129,0.25)] hover:shadow-[0_0_25px_rgba(16,185,129,0.45)] transition-all duration-300"
          id="floating-whatsapp-btn"
          title="Chat with us on WhatsApp"
        >
          {/* Outer glowing pulsing circle */}
          <span className="absolute inset-x-0 inset-y-0 rounded-full border border-emerald-500/30 animate-ping opacity-75"></span>
          <MessageCircle className="w-7 h-7 fill-emerald-500/10" />

          {/* Slide-out badge on hover */}
          <span className="absolute right-16 px-3 py-1.5 rounded-sm bg-black border border-emerald-500 text-emerald-400 text-xs font-semibold tracking-wide whitespace-nowrap opacity-0 scale-90 group-hover:opacity-100 group-hover:scale-100 origin-right transition-all duration-300 pointer-events-none">
            Chat on WhatsApp
          </span>
        </a>

        {/* Email Floating button */}
        <a
          href={`mailto:${BUSINESS_INFO.email}?subject=EduSpark%20Hub%20Inquiry`}
          className="group relative flex items-center justify-center w-14 h-14 rounded-full bg-black border border-[#FFD700] hover:border-[#ffe240] text-[#FFD700] hover:text-[#ffe240] shadow-[0_0_15px_rgba(255,215,0,0.15)] hover:shadow-[0_0_25px_rgba(255,215,0,0.35)] transition-all duration-300"
          id="floating-email-btn"
          title="Send us an Email"
        >
          <Mail className="w-6 h-6" />

          {/* Slide-out badge on hover */}
          <span className="absolute right-16 px-3 py-1.5 rounded-sm bg-black border border-[#FFD700] text-[#FFD700] text-xs font-semibold tracking-wide whitespace-nowrap opacity-0 scale-90 group-hover:opacity-100 group-hover:scale-100 origin-right transition-all duration-300 pointer-events-none">
            Email Support
          </span>
        </a>
      </div>
    </div>
  );
}
