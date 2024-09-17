import { Link } from "react-router-dom";
import { easeInOut, motion as m } from "framer-motion";
import { view } from "framer-motion/client";

const Hero = () => {
  const variants = {
    initial: {
      opacity: 0,
      y: 10,
    },
    animate: {
      opacity: 1,
      y: 0,
    },
  };

  return (
    <div className="h-[90vh] text-[#282828]  relative">
      <div className="h-full">
        <img
          loading="lazy"
          className="h-full w-full object-cover"
          src="./Images/concert1.jpg"
          alt="concertCrowd"
        />
      </div>
      <div className=" px-4  w-full flex flex-col items-center justify-center  gap-4 font-ClashDisplay uppercase text-[#faf6f9] absolute top-[50%] translate-y-[-50%] bg-[#282828]/30 backdrop-blur-sm h-full tracking-wide ">
        <m.div
          variants={variants}
          initial="initial"
          animate="animate"
          viewport={{
            once: true,
          }}
          transition={{
            delay: 1.1,
            ease: easeInOut,
            duration: 0.5,
          }}
          className="flex flex-col items-center justify-center gap-1 "
        >
          <h1 className="text-7xl  md:text-[6rem] font-bold text-center">
            Book Events
          </h1>
          <span className="text-center  text-xl ">
            Booking events & concerts made easier.
          </span>
        </m.div>
        <Link to="/events">
          <m.button
            variants={variants}
            initial="initial"
            animate="animate"
            transition={{
              delay: 1.1,
              ease: easeInOut,
              duration: 0.5,
            }}
            className="bg-[#ffffff] cursor-pointer  text-[#282828] uppercase  px-4 py-3"
          >
            Book an Event
          </m.button>
        </Link>
      </div>
    </div>
  );
};

export default Hero;
