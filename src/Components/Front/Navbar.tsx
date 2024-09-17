// import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  // const [toggleNav, setToggleNav] = useState<boolean>(false);

  // const enableNav = () => {
  //   setToggleNav(!toggleNav);
  // };

  return (
    <div className="relative px-4 ">
      <div className=" h-[10vh] flex justify-center md:justify-center items-center font-ClashDisplay">
        {/* <h2
          onClick={() => enableNav()}
          className="md:hidden text-xl tracking-wide cursor-pointer"
        >
          Menu
        </h2> */}

        <ul className="flex justify-center items-center gap-8 md:w-[60%] md:gap-14 lg:gap-28   text-xl tracking-wide">
          <Link to="/">Home</Link>
          <Link to="/events">Events</Link>
          <Link to="/refund">Refund</Link>
        </ul>
      </div>
      {/* {toggleNav && (
        <ul
          className="md:hidden absolute top-0 left-0 h-screen   w-full flex flex-col items-center justify-center
      gap-20  text-xl tracking-wide bg-[#282828] text-[#faf9f6] font-ClashDisplay"
        >
          <div className="absolute top-9 right-4 cursor-pointer">
            <h2 onClick={() => enableNav()} className="text-xl tracking-wide ">
              Close
            </h2>
          </div>
          <Link to="/">Home</Link>
          <Link to="/events">Events</Link>
          <Link to="/refund">Refund</Link>
        </ul>
      )} */}
    </div>
  );
};

export default Navbar;
