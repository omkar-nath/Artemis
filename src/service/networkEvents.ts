import { NetworkEvent } from "../types";

export function handleNetworkEvents(event:NetworkEvent,applicationName:string){
    console.log("Network Events",event);
}
