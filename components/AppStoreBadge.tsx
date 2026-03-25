import Image from "next/image";

interface AppStoreBadgeProps {
  className?: string;
}

export default function AppStoreBadge({ className = "" }: AppStoreBadgeProps) {
  return (
    <a
      href="https://apps.apple.com/ca/app/closer-friends-in-real-time/id6759689844"
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-block ${className}`}
    >
      <Image
        src="/images/app-store-badge.svg"
        alt="Download on the App Store"
        width={160}
        height={50}
        className="h-[50px] w-auto"
      />
    </a>
  );
}
