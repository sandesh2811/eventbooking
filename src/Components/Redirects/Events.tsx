import Navbar from "../Front/Navbar";
import Footer from "../Front/Footer";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../Redux/Store";
import { getEvent } from "../../Redux/SelectedEvent";
import { Link } from "react-router-dom";
import { useState } from "react";

const Events = () => {
  const events = useSelector((state: RootState) => state.getData);
  const dispatch = useDispatch();
  const [eventType, setEventType] = useState<string>("All");

  const filterEvents = (value: string) => {
    if (value === "All") {
      setEventType(value);
    } else if (value === "Concert") {
      setEventType(value);
    } else if (value === "ComedyShow") {
      setEventType(value);
    }
  };

  const filteredConcert = events.filter((event) => event.type === "Concert");

  const filteredComdeyShows = events.filter(
    (event) => event.type === "ComedyShow"
  );

  return (
    <div className="min-h-[100vh]">
      <Navbar />
      <div className="min-h-[80vh] bg-[#282828] text-[#faf6f9] flex flex-col gap-10 px-4 py-10  font-ClashDisplay">
        <div className=" text-center ">
          <h1 className="text-4xl  tracking-wide md:text-5xl ">Events</h1>
        </div>
        <div className="flex items-center justify-center gap-4">
          <button
            onClick={() => filterEvents("All")}
            className="bg-[#ffffff] cursor-pointer  text-[#282828] uppercase  px-2 py-1 rounded-sm"
          >
            All
          </button>
          <button
            onClick={() => filterEvents("Concert")}
            className="bg-[#ffffff] cursor-pointer  text-[#282828] uppercase  px-2 py-1 rounded-sm"
          >
            Concert
          </button>
          <button
            onClick={() => filterEvents("ComedyShow")}
            className="bg-[#ffffff] cursor-pointer  text-[#282828] uppercase  px-2 py-1 rounded-sm"
          >
            Comedy Show
          </button>
        </div>
        <div>
          <div className="flex flex-col items-center justify-center  md:grid grid-cols-2 grid-rows-2  lg:grid-cols-3  xl:grid-cols-5 xl:grid-rows-1 gap-6 px-6  py-8">
            {eventType === "All" &&
              events.map((event, index) => {
                return (
                  <div
                    key={index}
                    className="flex justify-center items-center "
                  >
                    <div className="flex justify-center  items-center gap-4 h-[400px] w-[280px]  rounded-md shadow-lg overflow-hidden cursor-pointer ">
                      <Link to="/bookingPage">
                        <img
                          loading="lazy"
                          className="h-full w-full object-cover"
                          src={event.img}
                          alt={event.artist}
                          onClick={() => dispatch(getEvent(event))}
                        />
                      </Link>
                    </div>
                  </div>
                );
              })}
            {eventType === "Concert" &&
              filteredConcert.map((event, index) => {
                return (
                  <div
                    key={index}
                    className="flex justify-center items-center "
                  >
                    <div className="flex justify-center  items-center gap-4 h-[400px] w-[280px]  rounded-md shadow-lg overflow-hidden cursor-pointer ">
                      <Link to="/bookingPage">
                        <img
                          loading="lazy"
                          className="h-full w-full object-cover"
                          src={event.img}
                          alt={event.artist}
                          onClick={() => dispatch(getEvent(event))}
                        />
                      </Link>
                    </div>
                  </div>
                );
              })}
            {eventType === "ComedyShow" &&
              filteredComdeyShows.map((event, index) => {
                return (
                  <div
                    key={index}
                    className="flex justify-center items-center "
                  >
                    <div className="flex justify-center  items-center gap-4 h-[400px] w-[280px]  rounded-md shadow-lg overflow-hidden cursor-pointer ">
                      <Link to="/bookingPage">
                        <img
                          loading="lazy"
                          className="h-full w-full object-cover"
                          src={event.img}
                          alt={event.artist}
                          onClick={() => dispatch(getEvent(event))}
                        />
                      </Link>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Events;
