import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../Redux/Store";

const ComingSoon = () => {
  const events = useSelector((state: RootState) => state.getData);
  const dispatch = useDispatch();
  return (
    <>
      {events.map((event, index) => {
        return (
          event.status === "pending" && (
            <div
              key={index}
              className="flex justify-center items-center flex-wrap"
            >
              <div
                className="flex justify-center  items-center gap-4 h-[400px] w-[280px]  rounded-md shadow-lg overflow-hidden
            "
              >
                <img
                  onClick={() => dispatch(event)}
                  loading="lazy"
                  className="h-full w-full object-cover"
                  src={event.img}
                  alt={event.artist}
                />
              </div>
            </div>
          )
        );
      })}
    </>
  );
};

export default ComingSoon;
