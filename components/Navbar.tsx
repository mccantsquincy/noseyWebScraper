import Image from "next/image";
import Link from "next/link";
import React from "react";

function Navbar() {
  const navIcons = [
    { src: "/assets/icons/heart.svg", alt: "heart icon" },
    { src: "/assets/icons/user.svg", alt: "user icon" },
    { src: "/assets/icons/lightning.svg", alt: "bolt icon" },
  ];

  return (
    <header className="w-full">
      <nav className="nav">
        <Link href="/">
          <p className="nav-logo">Nosey</p>
        </Link>

        <div className="flex gap-5 items-center">
          {navIcons.map((icon) => (
            <Image
              key={icon.alt}
              src={icon.src}
              alt={icon.alt}
              width={28}
              height={28}
              className="object-contain"
            />
          ))}
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
