import Link from "next/link";
import { useSession, signIn, signOut } from "next-auth/react";
import { FiLogIn, FiLogOut } from "react-icons/fi";

const Navbar = () => {
  const { data: session } = useSession();

  return (
    <div className="h-14 w-screen bg-[#07080e] text-white flex items-center justify-between px-5 z-[999] fixed top-0 left-0">
      <div className="flex space-x-5 items-center">
        <Link href="/">
          <div className="logo w-10 sm:w-20 md:w-40 flex justify-center items-center">
            LOGO
          </div>
        </Link>
        <input
          type="text"
          className="w-36 sm:w-64 md:w-80 h-8 rounded-sm outline-none border-[1px] border-[#fefefe6a] focus:border-2 focus:border-blue-500 indent-4 bg-black"
          placeholder="Search"
        />
      </div>
      <div className="flex space-x-4 md:space-x-5 items-center">
        {session ? (
          <button
            className="flex space-x-2 py-2 px-4 items-center hover:bg-[#222225]"
            onClick={() => signOut()}
          >
            <FiLogOut />
            <span>signout</span>
          </button>
        ) : (
          <button
            className="flex space-x-2 py-2 px-4 items-center hover:bg-[#222225]"
            onClick={() => signIn()}
          >
            <FiLogIn />
            <span>login</span>
          </button>
        )}
        {/* <div className="avatar w-9 h-9 bg-red-500 rounded-sm  cursor-pointer"></div> */}
        <button className="w-20 sm:w-24 md:w-28 h-9 bg-gradient-to-r from-green-200 to-green-500 rounded-sm text-black flex items-center justify-center hover:from-green-300 hover:to-green-600">
          Generate
        </button>
      </div>
    </div>
  );
};
export default Navbar;
