export default function getBrowser(userAgent:string) {
  if (/MSIE|Trident/i.test(userAgent)) {
    return "Internet Explorer";
  } else if (/Edge/i.test(userAgent)) {
    return "Microsoft Edge";
  } else if (/Chrome/i.test(userAgent)) {
    return "Google Chrome";
  } else if (/Firefox/i.test(userAgent)) {
    return "Mozilla Firefox";
  } else if (/Safari/i.test(userAgent)) {
    return "Apple Safari";
  } else if (/Opera|OPR/i.test(userAgent)) {
    return "Opera";
  } else {
    return "Unknown";
  }
}
