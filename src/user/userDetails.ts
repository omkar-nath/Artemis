import getBrowser from "./browserDetails";
import getOperatingSystem from "./operatingSystemDetails";
export default function getUserDetails(artemisWindow:Window) {
  const userAgent = navigator.userAgent;
  const browser = getBrowser(userAgent);
  const operatingSystem = getOperatingSystem(userAgent);

  const userDetails = {
    browser,
    operatingSystem,
    screenWidth: artemisWindow.screen.width,
    screenHeight: artemisWindow.screen.height,
    language: navigator.language,
    timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone,
  };

  console.log("User details",userDetails);
 
}
