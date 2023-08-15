import { ArtemisEventTypes } from "../types";
import { getApplicationName } from "../utils";

export default function handleJsErrors(error: Record<string, any>) {
  const payload = {
    payload: error,
    metadata: {
      artemisEvent: ArtemisEventTypes.ERROR,
      applicationName: getApplicationName(),
    },
  };
  console.log("Error event occured", payload);
}
