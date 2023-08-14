import { ArtemisOptions } from "./types";
import { trackNativeFetch } from "./network/nativeFetchAPI";
import getUserDetails from "./user/userDetails";
import { handleUserEvents } from "./user/userEvents";
import handleJsErrors from "./service/jsErrors";

export default class Artemis {
  private applicationName: string;
  _artemisWindow: Window;
  _document: Document;
  constructor({
    autoErrorTrackingEnabled = true,
    autoUserEventTrackingEnabled = true,
    autoNetworkEventTrackingEnabled = true,
    captureUserDetails = true,
    applicationName,
  }: ArtemisOptions) {
    window.ArtemisAgent.agentInstalled=false;
    this.applicationName = applicationName;
    this._artemisWindow = window || {};
    this._document = document || window.document || {};
    if (!applicationName) {
      console.warn(
        "A valid application name is required for initializing artemis agent!"
      );
      return;
    }
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
    window.ArtemisAgent.agentInstalled=true;
    window.ArtemisAgent.applicationName=applicationName;
    console.log("Artemis agent initialized successfully", "😻");
  }

  trackUserInteractions() {
    handleUserEvents(this._artemisWindow);
  }

  trackUserDetails() {
    getUserDetails(this._artemisWindow);
  }

  trackJSErrors() {
    window.onerror = function(message, source, lineno, colno, error) {
      const errorMessage = error ? error.message : message;
      const stackTrace = error ? error.stack : 'N/A';
    
    
      const errorEventDetails={
        timestamp: new Date().getTime(),
        stackTrace,
        lineNo:lineno,
        colNo:colno,
        errorMsg:errorMessage
      }
      
      handleJsErrors(errorEventDetails);
  
    };
 
    
  }

  trackNetworkEvent() {
    trackNativeFetch(this._artemisWindow);
  }

  collectPerformanceMetrics() {}
}
