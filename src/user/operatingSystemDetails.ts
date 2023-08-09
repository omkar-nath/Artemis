export default function getOperatingSystem(userAgent:string) {
  if (/Windows NT 10.0/i.test(userAgent)) {
    return "Windows 10";
  } else if (/Windows NT 6.3/i.test(userAgent)) {
    return "Windows 8.1";
  } else if (/Windows NT 6.2/i.test(userAgent)) {
    return "Windows 8";
  } else if (/Windows NT 6.1/i.test(userAgent)) {
    return "Windows 7";
  } else if (/Windows NT 6.0/i.test(userAgent)) {
    return "Windows Vista";
  } else if (/Windows NT 5.1/i.test(userAgent)) {
    return "Windows XP";
  } else if (/Windows NT 5.0/i.test(userAgent)) {
    return "Windows 2000";
  } else if (/Macintosh|Mac OS X/i.test(userAgent)) {
    return "Mac OS X";
  } else if (/Linux/i.test(userAgent)) {
    return "Linux";
  } else if (/Android/i.test(userAgent)) {
    return "Android";
  } else if (/iOS|iPhone|iPad|iPod/i.test(userAgent)) {
    return "iOS";
  } else {
    return "Unknown";
  }
}
