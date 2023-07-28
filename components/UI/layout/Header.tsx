import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <header className="py-6 bg-indigo-400 text-gray-50 text-lg">
      <div className="max-w-screen-xl mx-auto px-4">
        <div className="flex items-center justify-between">
          <div className="text-2xl">
            <Link href="/">Eventor</Link>
          </div>
          <nav>
            <ul className="flex gap-10">
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/events">All Events</Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
