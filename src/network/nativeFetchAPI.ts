import { handleNetworkEvents } from "../service/networkEvents";
import { NetworkEvent } from "../types";

export function trackNativeFetch(applicationName:string) {
  const originalFetch = window.fetch;
  window.fetch = function (...args) {
    const startTime = performance.now();
    const responsePromise = originalFetch.apply(this, args);
    responsePromise.then((response) => {
      const endTime = performance.now();
      const networkResponseTime = endTime - startTime;
      const event: NetworkEvent = {
        requestURL: args[0],
        requestMethod: args[1]?.method || "GET",
        status: response.status,
        statusText: response.statusText,
        networkResponseTime,
        timestamp:new Date().getTime()
      };
      handleNetworkEvents(event,applicationName);
      
    });
    return responsePromise;
  };
}
