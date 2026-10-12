import Image from "next/image";
import Link from "next/link";
import logo from "@/assets/logo.png";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/apps", label: "Apps" },
  { href: "/installation", label: "Installation" },
];

const Footer = () => {
  return (
    <footer className="border-t border-slate-200 bg-slate-900 text-slate-300">
      <div className="container mx-auto grid gap-8 px-4 py-12 md:grid-cols-3">
        {/* Brand */}
        <div className="max-w-sm">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src={logo}
              alt="Hero App logo"
              className="h-10 w-10 object-contain"
            />
            <span className="text-lg font-bold text-white">Hero App</span>
          </Link>
          <p className="mt-4 text-sm leading-relaxed text-slate-400">
            Discover, install, and keep track of your favorite apps in one
            place.
          </p>
        </div>

        {/* Navigation */}
        <nav aria-label="Footer navigation">
          <h3 className="text-sm font-semibold text-white">Explore</h3>
          <ul className="mt-4 space-y-2 text-sm">
            {navLinks.map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  className="transition-colors hover:text-emerald-400"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Contribute */}
        <div>
          <h3 className="text-sm font-semibold text-white">Get involved</h3>
          <p className="mt-4 text-sm text-slate-400">
            Found a bug or have an idea? Contributions are welcome.
          </p>
          <button className="mt-4 rounded-lg bg-emerald-600 px-5 py-2 text-sm font-semibold text-white transition-colors hover:bg-emerald-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900">
            Contribute
          </button>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-slate-800">
        <p className="container mx-auto px-4 py-4 text-center text-xs text-slate-500">
          &copy; {new Date().getFullYear()} Hero App. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
