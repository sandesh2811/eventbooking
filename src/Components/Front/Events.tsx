import { Link } from "react-router-dom";
import ComingSoon from "./ComingSoon";
import EventCard from "./EventCard";

const Events = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-6   min-h-[70vh] text-[#282828] px-4 py-10 font-ClashDisplay">
      <div className="min-h-[50vh] ">
        <h1 className="text-4xl text-center md:text-5xl tracking-wide ">
          Events
        </h1>
        <div className="flex flex-col items-center justify-center  md:grid grid-cols-2 grid-rows-2 lg:flex lg:flex-row lg:gap-14 gap-6 px-6  py-8">
          <EventCard />
        </div>
      </div>
      <div className="min-h-[50vh] ">
        <h1 className="text-4xl text-center md:text-5xl  tracking-wide">
          Coming Soon
        </h1>
        <div className="flex flex-col items-center justify-center  md:grid grid-cols-2 grid-rows-1 lg:flex lg:flex-row lg:gap-14 gap-6 px-6  py-8">
          <ComingSoon />
        </div>
      </div>
      <div>
        <Link to="/events">
          <button className="bg-[#282828] cursor-pointer  text-[#faf6f9] uppercase  px-10 py-3 rounded-sm tracking-wide">
            Explore All Events
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Events;
