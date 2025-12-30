import { Phone } from "lucide-react";

const MobileCallButton = () => {
  return (
    <div className="fixed bottom-4 left-4 right-4 z-50 md:hidden">
      <a
        href="tel:08847829160"
        className="flex items-center justify-center gap-2 w-full py-4 px-6 bg-primary text-primary-foreground font-semibold rounded-full shadow-lg hover:shadow-xl transition-all active:scale-95"
      >
        <Phone className="w-5 h-5" />
        Call & Book a Table
      </a>
    </div>
  );
};

export default MobileCallButton;
