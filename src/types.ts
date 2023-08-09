export type NetworkEvent = {
  requestURL: URL | RequestInfo;
  requestMethod: string;
  status: number;
  statusText: string;
  networkResponseTime: number;
  timestamp:number;
};

export type ArtemisOptions = {
  applicationName: string;
  autoErrorTrackingEnabled?: boolean;
  autoNetworkEventTrackingEnabled?: boolean;
  autoUserEventTrackingEnabled?: boolean;
  captureUserDetails?:boolean

};
