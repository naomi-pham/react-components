import Image from "next/image";

const Header = () => {
  return (
    <div className="flex justify-between px-2 sm:px-4 lg:px-8">
      <div className="flex items-center space-x-6">
        <img src="/netflix-logo.png" alt="logo" className="w-16 lg:w-28" />
        <ul className="hidden lg:flex items-center space-x-6">
          <li className="hover:opacity-80 cursor-pointer">Home</li>
          <li className="hover:opacity-80 cursor-pointer">TV Shows</li>
          <li className="hover:opacity-80 cursor-pointer">Movies</li>
          <li className="hover:opacity-80 cursor-pointer">New & Popular</li>
          <li className="hover:opacity-80 cursor-pointer">My List</li>
          <li className="hover:opacity-80 cursor-pointer">
            Browse by Languages
          </li>
        </ul>
        <div className="lg:hidden text-xs">
          Browse <span></span>
        </div>
      </div>
      <div className="flex items-center space-x-6">
        <button>icon</button>
        <button>icon</button>
        <img src="" />
      </div>
    </div>
  );
};

export default Header;
