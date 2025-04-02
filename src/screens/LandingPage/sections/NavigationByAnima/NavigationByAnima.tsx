import React from "react";
import { Button } from "../../../../components/ui/button";

export const NavigationByAnima = (): JSX.Element => {
  // Navigation items data
  const navItems = [
    { label: "Tech Reviews", href: "#" },
    { label: "Brand Work", href: "#" },
    { label: "About", href: "#" },
  ];

  return (
    <header className="w-full h-[164px] bg-white">
      <nav className="container h-full flex items-center justify-between">
        {/* Brand name */}
        <div className="font-body-text text-black text-[length:var(--body-text-font-size)] tracking-[var(--body-text-letter-spacing)] leading-[var(--body-text-line-height)] [font-style:var(--body-text-font-style)]">
          Gyasi Linje
        </div>

        {/* Navigation links and button */}
        <div className="flex items-center gap-12">
          {navItems.map((item, index) => (
            <a
              key={index}
              href={item.href}
              className="font-body-text font-[number:var(--body-text-font-weight)] text-black text-[length:var(--body-text-font-size)] tracking-[var(--body-text-letter-spacing)] leading-[var(--body-text-line-height)] whitespace-nowrap [font-style:var(--body-text-font-style)]"
            >
              {item.label}
            </a>
          ))}

          <Button className="px-6 py-3.5 bg-black rounded-lg shadow-button-shadow">
            <span className="font-small-text font-[number:var(--small-text-font-weight)] text-white text-[length:var(--small-text-font-size)] tracking-[var(--small-text-letter-spacing)] leading-[var(--small-text-line-height)] whitespace-nowrap [font-style:var(--small-text-font-style)]">
              Button
            </span>
          </Button>
        </div>
      </nav>
    </header>
  );
};
