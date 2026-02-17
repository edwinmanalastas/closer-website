import Image from "next/image";

interface PhoneMockupProps {
  children?: React.ReactNode;
  className?: string;
}

export default function PhoneMockup({ children, className = "" }: PhoneMockupProps) {
  return (
    <div className={`relative mx-auto ${className}`} style={{ width: 280, height: 570 }}>
      {/* Content behind the frame */}
      <div className="absolute inset-[4.3%] top-[2.3%] bottom-[2.3%] rounded-[1.8rem] overflow-hidden">
        {children || (
          <div className="w-full h-full bg-gray-100" />
        )}
      </div>
      {/* iPhone frame overlay */}
      <Image
        src="/images/iphone-frame.png"
        alt=""
        fill
        className="object-contain pointer-events-none z-10"
      />
    </div>
  );
}
