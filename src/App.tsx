import { Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";
import BookingPage from "./Components/Redirects/BookingPage";
import CheckOut from "./Components/Redirects/CheckOut";

const Home = lazy(() => {
  return import("./Components/Front/Home");
});
const Events = lazy(() => {
  return import("./Components/Redirects/Events");
});
const Refund = lazy(() => {
  return import("./Components/Redirects/Refund");
});

function App() {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <Suspense fallback={<h1>Loading...</h1>}>
              <Home />
            </Suspense>
          }
        />
        <Route
          path="/events"
          element={
            <Suspense fallback={<h1>Loading...</h1>}>
              <Events />
            </Suspense>
          }
        />
        <Route
          path="/refund"
          element={
            <Suspense fallback={<h1>Loading...</h1>}>
              <Refund />
            </Suspense>
          }
        />
        <Route
          path="/bookingPage"
          element={
            <Suspense fallback={<h1>Loading...</h1>}>
              <BookingPage />
            </Suspense>
          }
        />
        <Route
          path="/checkout"
          element={
            <Suspense fallback={<h1>Loading...</h1>}>
              <CheckOut />
            </Suspense>
          }
        />
      </Routes>
    </>
  );
}

export default App;
