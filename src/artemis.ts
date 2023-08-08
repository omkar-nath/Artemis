import { NetworkEvent } from "./types";

class Artemis{
    constructor(){
        this.trackJSErrors();
        this.trackUserInteractions();
        this.collectPerformanceMetrics();
        this.trackNetworkEvent();
    }

    trackUserInteractions(){

    }

    trackJSErrors(){

    }

    trackNetworkEvent(){
        (function(){
            const originalFetch=window.fetch;
            window.fetch=function(...args){
                const startTime=performance.now();
                const responsePromise=originalFetch.apply(this,args);
                responsePromise.then((response)=>{
                    const endTime=performance.now();
                    const networkResponseTime=endTime-startTime;
                    const event :NetworkEvent={
                        requestURL:args[0],
                        requestMethod:args[1]?.method || 'GET',
                        status:response.status,
                        statusText:response.statusText,
                        networkResponseTime
                    };

                this.handleNetworkEvents(event);
                });
                return responsePromise;
            };
        })();
    }

    handleNetworkEvents(event:NetworkEvent){
        console.log("Network event occured",event);
    }

    collectPerformanceMetrics(){

    }
}

export default Artemis;