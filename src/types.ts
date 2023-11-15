export type NetworkEvent = {
  requestURL: URL | RequestInfo;
  requestMethod: string;
  status: number;
  statusText: string;
  errorMessage?:string;
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

export enum ArtemisEventTypes{
  API_CALL="artemis_API_Call",
  USER_EVENT="artemis_User_Event",
  ERROR="artemis_Error_Event",
  USER_DETAILS="artemis-User-details"

}

declare global {
  interface Window {
      ArtemisAgent:any;
  }
}
