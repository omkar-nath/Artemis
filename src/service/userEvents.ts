import { ArtemisEventTypes } from "../types";
import { getApplicationName } from "../utils";

export default function sendUserEvents(event: any) {
  const payload = {
    payload: event,
    metadata: {
      artemisEvent: ArtemisEventTypes.USER_EVENT,
      applicationName: getApplicationName(),
    },
  };
  console.log("User event", payload, window.ArtemisAgent.applicationName);
}
