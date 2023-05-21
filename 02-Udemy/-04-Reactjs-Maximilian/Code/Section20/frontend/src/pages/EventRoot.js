import EventsNavigation from "../components/EventsNavigation";
import { Outlet } from "react-router-dom";
const EventRoot = () => {
  return (
    <>
      <EventsNavigation></EventsNavigation>
      <main>
        <Outlet></Outlet>
      </main>
    </>
  );
};
export default EventRoot;
