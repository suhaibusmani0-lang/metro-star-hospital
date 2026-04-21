import { WhatsAppIcon } from "@/components/SocialIcons";

export function WhatsAppFloat() {
  return (
    <a
      href="https://wa.me/919990098258?text=Hi%20Dr.%20Bushra%2C%20I%20would%20like%20to%20book%20an%20appointment."
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-xl hover:shadow-2xl hover:scale-110 transition-all duration-300 animate-pulse-gentle"
      aria-label="Chat on WhatsApp"
    >
      <WhatsAppIcon className="h-7 w-7" />
    </a>
  );
}
