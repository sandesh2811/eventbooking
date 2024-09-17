import { Link } from "react-router-dom";
import Footer from "../Front/Footer";
import Navbar from "../Front/Navbar";

const Refund = () => {
  return (
    <div className="h-[100vh]">
      <Navbar />
      <div className="min-h-[80vh] bg-[#282828] px-4 md:py-15 py-16 flex flex-col items-center justify-center  text-[#faf6f9] font-ClashDisplay tracking-wide ">
        <div className=" w-[310px] text-center">
          <h1 className="text-4xl tracking-wide md:text-5xl ">Refund</h1>
        </div>
        <div className="flex flex-col justify-evenly md:items-center px-6 py-4 border-2 border-[#faf6f9]  w-full lg:w-[800px] h-[70vh]  mb-2  mt-10 shadow-lg">
          <div>
            <span className=" text-md font-light text-center md:text-lg lg:text-xl">
              Note: The fields marked with * must be filled.
            </span>
          </div>
          <div className="    flex items-start flex-col gap-2 h-[9vh] md:w-[500px] ">
            <span className="text-lg font-light text-center md:text-lg lg:text-xl">
              Full Name*
            </span>
            <input
              type="text"
              required
              className="w-full h-full px-4  outline-none text-[#282828]"
            />
          </div>
          <div className="  flex items-start flex-col gap-2 h-[9vh] md:w-[500px] ">
            <span className=" text-lg font-light text-center md:text-lg lg:text-xl">
              Contact Number*
            </span>
            <input
              type="text"
              required
              className="w-full h-full px-4  outline-none text-[#282828]"
            />
          </div>
          <div className="  flex items-start flex-col gap-2 h-[9vh] md:w-[500px] ">
            <span className=" text-lg font-light text-center md:text-lg lg:text-xl">
              Email
            </span>
            <input
              type="text"
              required
              className="w-full h-full px-4  outline-none text-[#282828]"
            />
          </div>
          <div className="  flex items-start flex-col gap-2 h-[9vh] md:w-[500px] ">
            <span className=" text-lg font-light text-center md:text-lg lg:text-xl">
              Reason for refund*
            </span>
            <textarea
              required
              className="w-full h-full  px-4  outline-none text-[#282828]"
            ></textarea>
          </div>
          <div className="w-full flex items-center justify-center">
            <Link to="/">
              <button className="    px-10 py-2 bg-[#f3f4e5] text-[#282828]   text-md tracking-wide hover:scale-95 duration-150 ease-in-out shadow-md ">
                Submit
              </button>
            </Link>
          </div>
          <span className=" text-lg font-light text-center md:text-lg lg:text-xl">
            We will get to you as soon as possible.
          </span>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Refund;
