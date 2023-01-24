import Link from "next/link";

const Navbar = () => {
  return (
    <div className="h-14 bg-[#07080e] text-white flex items-center justify-between px-5 sticky top-0 left-0">
      <div className="flex space-x-5 items-center">
        <Link href="/">
          <div className="logo w-40 flex justify-center items-center">LOGO</div>
        </Link>
        <input
          type="text"
          className=" w-80 h-8 rounded-sm outline-none border-[1px] border-[#fefefe6a] focus:border-2 focus:border-blue-500 indent-4 bg-black"
          placeholder="Search"
        />
      </div>
      <div className="flex space-x-5 items-center">
        <Link href="/login">
          <p>login</p>
        </Link>
        <div className="avatar w-9 h-9 bg-red-500 rounded-sm  cursor-pointer"></div>
        <button className="w-28 h-9 bg-gradient-to-r from-green-200 to-green-500 rounded-sm text-black flex items-center justify-center hover:from-green-300 hover:to-green-600">
          Generate
        </button>
      </div>
    </div>
  );
};
export default Navbar;
