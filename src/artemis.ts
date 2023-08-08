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
                const responsePromise=originalFetch.apply(this,args);
                responsePromise.then((response)=>{
                    const event={
                        requestURL:args[0],
                        requestMethod:args[1]?.method || 'GET',
                        status:response.status,
                        statusText:response.statusText
                    };

                this.handleNetworkEvents(event);
                });
                return responsePromise;
            };
        })();
    }

    handleNetworkEvents(event){
        console.log("Network event occured",event);
    }

    collectPerformanceMetrics(){

    }
}

export default Artemis;