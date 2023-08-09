import { ArtemisOptions } from "./types";
import { trackNativeFetch } from "./network/nativeFetchAPI";
import getUserDetails from "./user/userDetails";

export default class Artemis {
  private applicationName: string;
  constructor({
    autoErrorTrackingEnabled = true,
    autoUserEventTrackingEnabled = true,
    autoNetworkEventTrackingEnabled = true,
    captureUserDetails = true,
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
    if (captureUserDetails) {
      this.trackUserDetails();
    }

    console.log('Artemis agent initialized successfully',"😻" );
  }

  trackUserInteractions() {}

  trackUserDetails() {
    getUserDetails();
  }

  trackJSErrors() {}

  trackNetworkEvent() {
    trackNativeFetch(this.applicationName);
  }

  collectPerformanceMetrics() {}
}

