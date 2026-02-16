interface PhoneMockupProps {
  children?: React.ReactNode;
  className?: string;
}

export default function PhoneMockup({ children, className = "" }: PhoneMockupProps) {
  return (
    <div className={`relative mx-auto ${className}`} style={{ width: 280, height: 560 }}>
      {/* Phone frame */}
      <div className="absolute inset-0 rounded-[3rem] border-2 border-black/10 bg-[#111116] overflow-hidden shadow-[0_0_60px_rgba(123,91,253,0.10)]">
        {/* Notch */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-28 h-7 bg-black rounded-b-2xl z-10" />

        {/* Screen content */}
        <div className="absolute inset-3 top-8 rounded-[2.2rem] overflow-hidden">
          {children || (
            <div className="w-full h-full bg-gradient-to-br from-primary/30 via-primary/10 to-transparent" />
          )}
        </div>
      </div>
    </div>
  );
}
