import { useState } from "react";
import Image from "./Image";
import { Link } from "react-router-dom";
import {
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/clerk-react";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="w-full h-16 md:h-20 flex items-center justify-between">
      <Link to={"/"} className="flex items-center gap-4 text-2xl font-bold">
        <Image src="logo.png" alt="Lama logo" w={32} h={32} />
        <span>lamalog</span>
      </Link>
      <div className="md:hidden">
        <div
          className="cursor-pointer text-4xl"
          onClick={() => setOpen((prev) => !prev)}
        >
          {open ? "X" : "☰"}
        </div>
        {/*MOBILE MENU */}
        <div
          className={`w-full h-screen flex flex-col items-center justify-center gap-8 font-medium text-lg absolute top-16 transition-all ease-in-out
                ${open ? "-right-0" : "-right-[100%]"}`}
        >
          <Link>Home</Link>
          <Link>Trending</Link>
          <Link>Most PopulLinkr</Link>
          <Link>About</Link>
          <Link>
            <button className="py-2 px-4 rounded-3xl bg-blue-800 text-white">
              Login👋
            </button>
          </Link>
        </div>
      </div>
      {/*DESKTOP MENU */}
      <div className="hidden md:flex items-center gap-8 xl:gap-12 font-medium">
        <Link>Home</Link>
        <Link>Trending</Link>
        <Link>Most Popular</Link>
        <Link>About</Link>
        <SignedOut>
          <Link to={"/login"}>
            <button className="py-2 px-4 rounded-3xl bg-blue-800 text-white">
              Login👋
            </button>
          </Link>
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </div>
    </div>
  );
};

export default Navbar;
