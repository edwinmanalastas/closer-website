interface GooglePlayBadgeProps {
  className?: string;
}

export default function GooglePlayBadge({ className = "" }: GooglePlayBadgeProps) {
  return (
    <div
      className={`inline-flex items-center gap-2.5 bg-black border border-white/25 rounded-[10px] px-4 h-[50px] opacity-70 ${className}`}
    >
      {/* Google Play icon */}
      <svg width="20" height="22" viewBox="0 0 24 26" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M1.22 0.27C0.95 0.56 0.8 1.01 0.8 1.6V24.4C0.8 24.99 0.95 25.44 1.22 25.73L1.3 25.8L14.1 13.04V12.96L1.3 0.2L1.22 0.27Z" fill="#4285F4"/>
        <path d="M18.37 17.31L14.1 13.04V12.96L18.37 8.69L18.47 8.75L23.41 11.54C24.82 12.33 24.82 13.67 23.41 14.46L18.47 17.25L18.37 17.31Z" fill="#FBBC04"/>
        <path d="M18.47 17.25L14.1 12.88L1.22 25.73C1.67 26.2 2.4 26.26 3.22 25.8L18.47 17.25Z" fill="#EA4335"/>
        <path d="M18.47 8.75L3.22 0.2C2.4-0.26 1.67-0.2 1.22 0.27L14.1 13.12L18.47 8.75Z" fill="#34A853"/>
      </svg>
      <div className="flex flex-col">
        <span className="text-white/80 text-[9px] leading-tight">
          Coming Soon on
        </span>
        <span className="text-white text-[16px] font-medium leading-tight">
          Google Play
        </span>
      </div>
    </div>
  );
}
