import { ArtemisOptions, NetworkEvent } from "./types";
import { trackNativeFetch} from "./network/nativeFetchAPI";

class Artemis {
  private applicationName: string;
  constructor({
    autoErrorTrackingEnabled = true,
    autoUserEventTrackingEnabled = true,
    autoNetworkEventTrackingEnabled = true,
    applicationName,
  }: ArtemisOptions) {
    this.applicationName = applicationName;
    if (autoErrorTrackingEnabled) {
      this.trackJSErrors();
    }
    if (autoNetworkEventTrackingEnabled) {
      this.trackNetworkEvent();
    }
    if (autoUserEventTrackingEnabled) {
        this.trackUserInteractions();
    }
  }

  trackUserInteractions() {
    
  }

  trackJSErrors() {}

  trackNetworkEvent() {
    trackNativeFetch();
  }

  collectPerformanceMetrics() {}
}

export default Artemis;
