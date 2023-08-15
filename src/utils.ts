export function getApplicationName(){
    if(!window.ArtemisAgent.agentInstalled){
        console.warn("Artemis agent not installed!")
    }
    return window.ArtemisAgent.applicationName || null;
}