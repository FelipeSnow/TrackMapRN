import { PermissionsAndroid } from "react-native"

const checkPermission = async () => {
    try {
        const permission = await PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION, {
            title: "Track Map App requests local",
            message: "Track Map App needs your local permission to show you in the map",
            buttonPositive: "Allow",
            buttonNegative: "Cancel",
            buttonNeutral: "Ask me Later",
        }
        );
        if (permission === PermissionsAndroid.RESULTS.GRANTED) {
            console.log("Local permissions granted");
        } else {
            console.log("Local permission denied");
        }
    }
    catch (err) {
        console.warn(err);
    }
}


export { checkPermission, };