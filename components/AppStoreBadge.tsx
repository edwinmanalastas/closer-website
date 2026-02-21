interface AppStoreBadgeProps {
  className?: string;
}

export default function AppStoreBadge({ className = "" }: AppStoreBadgeProps) {
  return (
    <div className={`relative inline-block group ${className}`}>
      <div className="relative bg-black border border-black/20 rounded-xl px-4 py-2.5 sm:px-6 sm:py-3 flex items-center gap-2 sm:gap-3 hover:border-black/40 transition-colors cursor-default">
        {/* Apple logo */}
        <svg
          width="24"
          height="28"
          viewBox="0 0 24 28"
          fill="white"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M19.92 14.64c-.04-3.56 2.92-5.28 3.04-5.36-1.64-2.4-4.2-2.72-5.12-2.76-2.16-.24-4.24 1.28-5.36 1.28-1.12 0-2.84-1.24-4.68-1.2-2.4.04-4.64 1.4-5.88 3.56-2.52 4.36-.64 10.84 1.8 14.4 1.2 1.72 2.64 3.68 4.52 3.6 1.8-.08 2.48-1.16 4.68-1.16 2.16 0 2.84 1.16 4.76 1.12 1.96-.04 3.2-1.76 4.4-3.48 1.4-2 1.96-3.96 2-4.04-.04-.04-3.84-1.48-3.88-5.84l-.28-.12zM16.32 4.44c1-1.2 1.64-2.88 1.48-4.56-1.44.08-3.16.96-4.2 2.16-.92 1.08-1.72 2.8-1.52 4.44 1.6.12 3.24-.8 4.24-2.04z" />
        </svg>
        <div className="flex flex-col">
          <span className="text-white/80 text-[10px] leading-tight">
            Coming Soon on the
          </span>
          <span className="text-white text-base sm:text-lg font-semibold leading-tight">
            App Store
          </span>
        </div>
      </div>
    </div>
  );
}
