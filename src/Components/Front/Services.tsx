// Css subgrid use garera milaune

import { motion as m } from "framer-motion";

const Services = () => {
  const variants = {
    hidden: { opacity: 0 },
    visible: (custom: any) => ({
      opacity: 1,

      transition: { delay: custom, duration: 0.5 },
    }),
  };

  const textVariants = {
    hidden: { y: 80, opacity: 0 },
    visible: (custom: any) => ({
      opacity: 1,
      y: 0,
      transition: { delay: custom, duration: 0.5 },
    }),
  };

  return (
    <div className="bg-[#282828] min-h-[50vh] px-4 pt-4 pb-2 md:pb-4  text-[#faf6f9] font-ClashDisplay">
      <div className="mb-6">
        <m.h1
          variants={textVariants}
          initial="hidden"
          whileInView="visible"
          custom={0.8 * 0.5}
          viewport={{ once: true }}
          className="text-4xl text-center md:text-5xl "
        >
          Our Services
        </m.h1>

        <div className="grid grid-rows-3 md:grid-cols-3 md:grid-rows-1 items-center text-[#282828] gap-6 mt-6">
          <m.div
            variants={variants}
            initial="hidden"
            whileInView="visible"
            custom={1.5 * 0.5}
            viewport={{ once: true }}
            className="bg-[#faf6f9] h-[350px] px-6 flex flex-col items-center justify-center gap-4 "
          >
            <h2 className=" font-medium tracking-wide text-xl lg:text-2xl">
              Easy To Book
            </h2>
            <p className=" text-center md:text-lg lg:text-xl">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere
              rerum quas placeat ratione error recusandae sit voluptatem
              necessitatibus ea.
            </p>
          </m.div>
          <m.div
            variants={variants}
            initial="hidden"
            whileInView="visible"
            custom={2.5 * 0.5}
            viewport={{ once: true }}
            className="bg-[#faf6f9] h-[350px] px-6 flex flex-col items-center justify-center gap-4  "
          >
            <h2 className="font-medium tracking-wide text-xl lg:text-2xl">
              Refund Policy
            </h2>
            <p className=" text-center md:text-lg lg:text-xl">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere
              rerum quas placeat ratione error recusandae sit voluptatem
              necessitatibus ea.
            </p>
          </m.div>
          <m.div
            variants={variants}
            initial="hidden"
            whileInView="visible"
            custom={3.5 * 0.5}
            viewport={{ once: true }}
            className="bg-[#faf6f9] h-[350px] px-6 flex flex-col items-center justify-center  gap-4 "
          >
            <h2 className=" font-medium tracking-wide text-xl lg:text-2xl">
              Various Payment Support
            </h2>
            <p className=" text-center md:text-lg lg:text-xl">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere
              rerum quas placeat ratione error recusandae sit voluptatem
              necessitatibus ea.
            </p>
          </m.div>
        </div>
      </div>
    </div>
  );
};

export default Services;
