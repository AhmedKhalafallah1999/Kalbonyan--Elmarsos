// Challenge / Exercise

// 1. Add five new (dummy) page components (content can be simple <h1> elements)
//    - HomePage
//    - EventsPage
//    - EventDetailPage
//    - NewEventPage
//    - EditEventPage
// 2. Add routing & route definitions for these five pages
//    - / => HomePage
//    - /events => EventsPage
//    - /events/<some-id> => EventDetailPage
//    - /events/new => NewEventPage
//    - /events/<some-id>/edit => EditEventPage
// 3. Add a root layout that adds the <MainNavigation> component above all page components
// 4. Add properly working links to the MainNavigation
// 5. Ensure that the links in MainNavigation receive an "active" class when active
// 6. Output a list of dummy events to the EventsPage
//    Every list item should include a link to the respective EventDetailPage
// 7. Output the ID of the selected event on the EventDetailPage
// BONUS: Add another (nested) layout route that adds the <EventNavigation> component above all /events... page components
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/HomePage";
import NewEventPage, { action as newEventAction } from "./pages/NewEventPage";
import EventPage, { loader as eventsloader } from "./pages/EventPage";
import EventDetailPage from "./pages/EventDetailPage";
import EditEventPage from "./pages/EditEventPage";
import Root from "./pages/root";
import EventRoot from "./pages/EventRoot";
import ErrorNew from "./pages/ErorrNew";
import { loader as EventDetail } from "./pages/EventDetailPage";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      { index: true, element: <HomePage></HomePage> },
      {
        path: "events",
        element: <EventRoot></EventRoot>,
        children: [
          {
            index: true,
            element: <EventPage></EventPage>,
            errorElement: <ErrorNew></ErrorNew>,
            loader: eventsloader,
          },
          {
            path: "new",
            element: <NewEventPage></NewEventPage>,
            action: newEventAction,
          },
          {
            path: ":eventId",
            id: "event-detail",
            loader: EventDetail,
            children: [
              {
                path: "edit",
                element: <EditEventPage></EditEventPage>,
                // loader: EventDetail,
              },
              {
                index: true,
                element: <EventDetailPage></EventDetailPage>,
                loader: EventDetail,
              },
            ],
          },
        ],
      },
    ],
  },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
