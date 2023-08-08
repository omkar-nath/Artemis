import getBrowser from "./browserDetails";
import getOperatingSystem from "./operatingSystemDetails";
export default function getUserDetails() {
  const userAgent = navigator.userAgent;
  const browser = getBrowser(userAgent);
  const operatingSystem = getOperatingSystem(userAgent);

  const userDetails = {
    browser,
    operatingSystem,
    screenWidth: window.screen.width,
    screenHeight: window.screen.height,
    language: navigator.language,
    timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone,
  };

  console.log("User details",userDetails);
  return userDetails;
}
