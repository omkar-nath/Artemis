export type NetworkEvent = {
  requestURL: URL | RequestInfo;
  requestMethod: String;
  status: String;
  statusText: String;
  networkResponseTime:Number;
};
