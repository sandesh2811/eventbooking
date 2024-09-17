import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-[#faf6f9] text-[#282828] min-h-[20vh] px-4 py-2 justify-center font-ClashDisplay  flex flex-col items-center ">
      <div className="grid grid-rows-3 md:grid-cols-3 md:grid-rows-1 items-center  gap-2 w-full ">
        <div className="my-4 flex flex-col items-center gap-2">
          <h2 className=" tracking-wide text-xl lg:text-2xl font-medium">
            Contact us
          </h2>
          <ul className="flex flex-col  gap-2 text-center">
            <li>Kathmandu, Nepal</li>
            <li>+997 0123456789</li>
            <li>abc@gmail.com</li>
          </ul>
        </div>
        <div className="my-4 flex flex-col items-center gap-2 ">
          <h2 className=" tracking-wide text-xl lg:text-2xl font-medium">
            Quick Links
          </h2>
          <ul className="flex flex-col  gap-2 text-center">
            <Link to="/about">About us</Link>
            <Link to="/FAQ">FAQ</Link>
            <Link to="/blogs">Blogs</Link>
          </ul>
        </div>

        <div className="my-4 flex flex-col items-center  gap-2">
          <h2 className=" tracking-wide text-xl lg:text-2xl font-medium">
            Customer Service
          </h2>
          <ul className="flex flex-col  gap-2 text-center">
            <Link to="/">Privacy Policy</Link>
            <Link to="/">Terms & Conditions</Link>
            <Link to="/">Refund Policy</Link>
          </ul>
        </div>
      </div>
      <span>Made by Sandesh Bhandari.</span>
    </div>
  );
};

export default Footer;
