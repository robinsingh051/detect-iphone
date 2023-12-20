// Check if the user is using Chrome on iPhone
const userAgent = navigator.userAgent;

const isiPhone = /iPhone/i.test(userAgent);
const isChrome = /CriOS/i.test(userAgent);

if (isiPhone && isChrome) {
    // Extract Chrome version from user agent string
    const chromeVersionMatch = userAgent.match(/CriOS\/([\d.]+)/);
    const chromeVersion = chromeVersionMatch ? chromeVersionMatch[1] : "Unknown";

    alert(`User is using iPhone with Chrome version ${chromeVersion}`);
} else {
    alert('User is not using iPhone and Chrome');
}
