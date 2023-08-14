import { NetworkEvent } from "../types";

export default function sendNetworkEvents(event:NetworkEvent){
    console.log("Network Events",event,window.ArtemisAgent.applicationName);
}
