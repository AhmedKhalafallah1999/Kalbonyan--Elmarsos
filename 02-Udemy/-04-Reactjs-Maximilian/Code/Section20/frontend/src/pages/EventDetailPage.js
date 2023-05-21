import { json, useRouteLoaderData } from "react-router-dom";
import EventItem from "../components/EventItem";
const EventDetailPage = () => {
  // const param = useParams();
  const loaderData =  useRouteLoaderData('event-detail');
  return <EventItem event={loaderData.event} />;
};
export default EventDetailPage;
export async function loader({ request, params }) {
  const id = params.eventId;
  const response = await fetch("http://localhost:8080/events/" + id);
  if (!response.ok) {
    throw json({ message: "Some Thing Went Wrong" }, { status: 500 });
  } else {
    return response;
  }
}
