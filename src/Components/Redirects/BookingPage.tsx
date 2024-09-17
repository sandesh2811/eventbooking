import { useDispatch, useSelector } from "react-redux";
import Footer from "../Front/Footer";
import Navbar from "../Front/Navbar";
import { RootState } from "../../Redux/Store";
import { useState } from "react";
import { Link } from "react-router-dom";
import { getUserSelectionDetails } from "../../Redux/GetDetails";

const BookingPage = () => {
  const { selectedEvent } = useSelector(
    (state: RootState) => state.selectedEvent
  );
  const dispatch = useDispatch();
  const artist = selectedEvent.artist;
  const img = selectedEvent.img;

  const [name, setName] = useState<string>("");
  const [location, setLocation] = useState<string>("");
  const [seatType, setSeatType] = useState<string>("None");
  const [seatPrice, setSeatPrice] = useState<string>("0");
  const [ticketQuantity, setTicketQuantity] = useState<string>("1");

  const userSelectedSeat = (value: string) => {
    if (value === "Front") {
      setSeatType("Front");
      setSeatPrice(selectedEvent.frontSeatPrice);
    } else if (value === "Mid") {
      setSeatPrice(selectedEvent.midSeatPrice);
      setSeatType("Mid");
    } else if (value === "Back") {
      setSeatPrice(selectedEvent.backSeatPrice);
      setSeatType("Back");
    }
  };

  return (
    <>
      <Navbar />
      <div className="min-h-[80vh] bg-[#282828] text-[#faf6f9] flex flex-col  gap-10 px-4 py-10  font-ClashDisplay">
        <div className="flex flex-col items-center justify-center md:grid grid-cols-2 md:items-start gap-4 md:gap-8">
          <div className="flex flex-col items-center gap-4  h-full">
            <div className="flex justify-center  items-center gap-4 h-[400px] w-[360px] lg:h-[500px] lg:w-[460px] rounded-md shadow-lg overflow-hidden cursor-pointer ">
              <img
                className="h-full w-full object-cover"
                src={selectedEvent.img}
                alt={selectedEvent.artist}
              />
            </div>
            <div className="flex flex-col items-center justify-center">
              <h2 className=" font-medium tracking-wide text-xl lg:text-2xl">
                {selectedEvent.artist}
              </h2>
              <span className=" text-center md:text-lg lg:text-xl">
                Type: {selectedEvent.type}
              </span>
            </div>
          </div>
          <div className="flex flex-col gap-4 xl:h-full xl:justify-evenly ">
            <div>
              <h2 className=" font-medium tracking-wide text-xl lg:text-2xl">
                Please enter your full name.
              </h2>
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                type="text"
                className="w-full xl:w-[50%] px-2 py-3 bg-transparent text-[#faf6f9] border-2 border-[#faf6f9]"
              />
            </div>
            <div>
              <h2 className=" font-medium tracking-wide text-xl lg:text-2xl">
                Please select location.
              </h2>
              <select
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="w-full xl:w-[50%] px-2 py-4 bg-[#282828] border-2 border-[#faf6f9]"
                name="City"
              >
                <option value="None">None</option>
                {selectedEvent.city.map((c, idx) => {
                  return (
                    <option key={idx} value={c}>
                      {c}
                    </option>
                  );
                })}
              </select>
            </div>
            <div>
              <h2 className=" font-medium tracking-wide text-xl lg:text-2xl">
                Please select a seat type.
              </h2>
              <select
                onChange={(e) => {
                  userSelectedSeat(e.target.value);
                }}
                className="w-full xl:w-[50%] px-2 py-3 bg-[#282828] border-2 border-[#faf6f9]"
                name="Seat"
              >
                <option value="None">None</option>
                <option value="Front">Front</option>
                <option value="Mid">Mid</option>
                <option value="Back">Back</option>
              </select>
            </div>
            {/* <div className="text-lg  lg:text-xl"> */}
            {seatType === "Front" && (
              <span>Price: Rs {selectedEvent.frontSeatPrice}</span>
            )}
            {seatType === "Mid" && (
              <span>Price: Rs {selectedEvent.midSeatPrice}</span>
            )}
            {seatType === "Back" && (
              <span>Price: Rs {selectedEvent.backSeatPrice}</span>
            )}
            {/* </div> */}
            <div>
              <h2 className=" font-medium tracking-wide text-xl lg:text-2xl">
                Please select ticket quantity.
              </h2>

              <select
                className="w-full xl:w-[50%] px-2 py-4 bg-[#282828] border-2 border-[#faf6f9]"
                name="ticketQuantity"
                value={ticketQuantity}
                onChange={(e) => {
                  setTicketQuantity(e.target.value);
                }}
              >
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
              </select>
            </div>
            <div className=" xl:w-[50%] flex items-center justify-center ">
              <Link to="/checkout">
                <button
                  onClick={() =>
                    dispatch(
                      getUserSelectionDetails({
                        name,
                        location,
                        seatType,
                        ticketQuantity,
                        artist,
                        seatPrice,
                        img,
                      })
                    )
                  }
                  className="bg-[#faf6f9] cursor-pointer  text-[#282828] uppercase  px-10 py-3 rounded-sm tracking-wide"
                >
                  Proceed to Checkout
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default BookingPage;
