import { NetworkEvent, ArtemisEventTypes } from "../types";
import { getApplicationName } from "../utils";

export default function sendNetworkEvents(event: NetworkEvent) {
  const payload = {
    payload: event,
    metadata: {
      artemisEvent: ArtemisEventTypes.API_CALL,
      applicationName: getApplicationName()
    },
  };
  console.log("Network Events", payload);
}
