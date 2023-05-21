// import { Link } from "react-router-dom";
// const Dummy_Events = [
//   {
//     id: "e1",
//     title: "Eventssss",
//   },
//   { id: "e2", title: "another eventsss" },
// ];
// const EventPage = () => {
//   return(
//   <>
//     <h1>EventPage</h1>
//     <ul>
//       {Dummy_Events.map((item)=>{
//         return <li key={item.id}>
//           <Link to={item.id}>{item.title}</Link>
//         </li>
//       })}
//     </ul>
//   </>
//   )
// };
// export default EventPage;
// import { useEffect, useState } from 'react';

import EventsList from "../components/EventsList";
import { useLoaderData } from "react-router-dom";
function EventsPage() {
  const fetchedEvents = useLoaderData();
  // if (fetchedEvents.isError){
  //   return <p>{fetchedEvents.message}</p>
  // }
  // const [isLoading, setIsLoading] = useState(false);
  // const [fetchedEvents, setFetchedEvents] = useState();
  // const [error, setError] = useState();

  // useEffect(() => {
  //   async function fetchEvents() {
  //     setIsLoading(true);
  //     const response = await fetch('http://localhost:8080/events');

  //     if (!response.ok) {
  //       setError('Fetching events failed.');
  //     } else {
  //       const resData = await response.json();
  //       setFetchedEvents(resData.events);
  //     }
  //     setIsLoading(false);
  //   }

  //   fetchEvents();
  // }, []);

  return (
    <>
      {/* <div style={{ textAlign: 'center' }}>
        {isLoading && <p>Loading...</p>}
        {error && <p>{error}</p>}
      </div> */}
      {
        // !isLoading && fetchedEvents &&
        <EventsList events={fetchedEvents} />

      }
    </>
  );
}
export const loader = async () => {
  const response = await fetch("http://localhost:8080/events");

  if (!response.ok) {
    // ...
    // return { isError: true, message: "The path is wrong" };
  } else {
    const resData = await response.json();
    return resData.events;
  }
};
export default EventsPage;
