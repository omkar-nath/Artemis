export type NetworkEvent = {
  requestURL: URL | RequestInfo;
  requestMethod: string;
  status: string;
  statusText: string;
  networkResponseTime: number;
};

export type ArtemisOptions = {
  applicationName: string;
  autoErrorTrackingEnabled?: boolean;
  autoNetworkEventTrackingEnabled?: boolean;
  autoUserEventTrackingEnabled?: boolean;
};
