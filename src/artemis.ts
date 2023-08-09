import { ArtemisOptions } from "./types";
import { trackNativeFetch } from "./network/nativeFetchAPI";
import getUserDetails from "./user/userDetails";

export default class Artemis {
  private applicationName: string;
  _artemisWindow:Window;
  _document:Document;
  constructor({
    autoErrorTrackingEnabled = true,
    autoUserEventTrackingEnabled = true,
    autoNetworkEventTrackingEnabled = true,
    captureUserDetails = true,
    applicationName,
  }: ArtemisOptions) {
    this.applicationName = applicationName;
    this._artemisWindow=window|| {};
    this._document=document || window.document ||{};
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
    trackNativeFetch(this.applicationName,this._artemisWindow);
  }

  collectPerformanceMetrics() {}
}

