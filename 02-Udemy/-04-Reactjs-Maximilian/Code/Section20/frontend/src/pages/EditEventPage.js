import EventForm from "../components/EventForm";
import { useRouteLoaderData } from "react-router-dom";
const EditEventPage = () => {
  const data = useRouteLoaderData("event-detail");
  const event = data.event;
  return <EventForm event={event}></EventForm>;
};
export default EditEventPage;
// export async function loader({ request, params }) {
//   const id = params.eventId;
//   const response = await fetch("http://localhost:8080/events/" + id);
//   if (!response.ok) {
//     throw json({ message: "Some Thing Went Wrong" }, { status: 500 });
//   } else {
//     return response;
//   }
// }
