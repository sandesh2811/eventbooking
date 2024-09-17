import Footer from "../Front/Footer";
import Navbar from "../Front/Navbar";
import { useSelector } from "react-redux";
import { RootState } from "../../Redux/Store";

const CheckOut = () => {
  const { selectionDetails } = useSelector(
    (state: RootState) => state.getDetails
  );
  const calculateTotal = () => {
    return +selectionDetails.seatPrice * +selectionDetails.ticketQuantity;
  };
  let totalAmount = calculateTotal();

  return (
    <>
      <Navbar />
      <div className="min-h-[80vh] bg-[#282828] text-[#faf6f9] flex flex-col gap-10 px-4 py-10  font-ClashDisplay items-center">
        <div className="flex flex-col   gap-4  ">
          <h2 className=" font-medium tracking-wide text-xl lg:text-2xl">
            Summary
          </h2>
          <div className="flex flex-col items-center  gap-4 md:grid grid-cols-2 xl:gap-10">
            <div className="flex justify-center  items-center gap-4h-[400px] w-[360px] lg:h-[500px] lg:w-[460px] rounded-md shadow-lg overflow-hidden cursor-pointer ">
              <img
                className="h-full w-full object-cover"
                src={selectionDetails.img}
                alt={selectionDetails.artist}
              />
            </div>
            <div className="flex flex-col gap-4 ">
              <div className=" font-medium text-lg  lg:text-2xl flex flex-col gap-4 ">
                <span>Artist: {selectionDetails.artist}</span>
                <span>Your Name: {selectionDetails.name}</span>
                <span>Location: {selectionDetails.location}</span>
                <span>Seat Type: {selectionDetails.seatType}</span>
                <span>Ticket Quantity: {selectionDetails.ticketQuantity}</span>
                <span>Total Amount: {totalAmount}</span>
              </div>
              <div className="flex flex-col gap-4">
                <h2 className=" font-medium tracking-wide text-xl lg:text-2xl">
                  Please select a payment method.
                </h2>
                <select
                  className="w-full xl:w-[85%] px-2 py-4 bg-[#282828] border-2 border-[#faf6f9]"
                  name="paymentMethod"
                >
                  <option value="Esewa">Esewa</option>
                  <option value="Khalti">Khalti</option>
                  <option value="Mobile Banking">Mobile Banking</option>
                </select>
              </div>
              <div className="flex items-center justify-center">
                <button className="bg-[#faf6f9] cursor-pointer  text-[#282828] uppercase  px-10 py-3 rounded-sm tracking-wide">
                  Pay Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default CheckOut;
