import Link from "next/link";
import Image from "next/image";

const links = [
  { href: "/privacy", label: "Privacy Policy" },
  { href: "/terms", label: "Terms and Conditions" },
  { href: "/community-guidelines", label: "Community Guidelines" },
  { href: "/support", label: "Support" },
  { href: "/safety", label: "Safety Tips" },
];

export default function Footer() {
  return (
    <footer className="border-t border-border py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-2.5">
            <Image
              src="/logo.png"
              alt="Closer"
              width={28}
              height={16}
              className="h-4 w-auto"
            />
            <div>
              <p className="text-lg font-bold leading-tight">Closer</p>
              <p className="text-muted text-xs">
                Made for the moments that matter.
              </p>
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-x-6 gap-y-3">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-muted hover:text-foreground transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border text-center">
          <p className="text-muted text-xs">
            &copy; {new Date().getFullYear()} Closer. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
