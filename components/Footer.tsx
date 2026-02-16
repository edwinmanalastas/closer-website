import Link from "next/link";

const links = [
  { href: "/privacy", label: "Privacy Policy" },
  { href: "/terms", label: "Terms of Service" },
  { href: "/support", label: "Support" },
  { href: "/safety", label: "Safety Guidelines" },
];

export default function Footer() {
  return (
    <footer className="border-t border-border py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="text-center md:text-left">
            <p className="text-lg font-bold mb-1">Closer</p>
            <p className="text-muted text-sm">
              Meet the people around you.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-6">
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
