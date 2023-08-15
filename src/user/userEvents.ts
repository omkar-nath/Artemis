import sendUserEvents from "../service/userEvents";
import { allEvents } from "./events/events";
export function handleUserEvents(window: Window) {
  Object.keys(allEvents).forEach((key: string) => {
    window.addEventListener(allEvents[key], (event: Event) => {
      const htmlElement = event.target as HTMLElement;
      const eventDetails = {
        eventType: event.type,
        timestamp: new Date().getTime(),
        targetElement: {
          tagName: htmlElement.tagName,
          className: htmlElement.className || null,
          id: htmlElement.id || null,
          ariaLabel: htmlElement.ariaLabel || "N/A",
          fullElement:htmlElement
        },
      };

      sendUserEvents(eventDetails);
    });
  });
}
