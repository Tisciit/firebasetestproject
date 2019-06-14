document.onload = () => {
    // Retrieve Firebase Messaging object.
    const messaging = firebase.messaging();
    messaging.usePublicVapidKey("BOVGmWuCO5mEKAOzL6ilPjKe80vri4iZE9jyeiqrJ3BgMiNy-wjLqr_U_2TnquRBjUdh16HN9YPFH0FanmxI1Vc");

    Notification.requestPermission().then(permission => {
        if (permission === "granted") {
            console.log("Notification permissions granted");
        } else {
            console.log("unable to notify");
        }
    })
}