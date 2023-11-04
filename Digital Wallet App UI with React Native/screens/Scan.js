import { useEffect, useRef, useState } from "react";
import {
    View,
    Text,
    StyleSheet,
    Image,
    Button,
    SafeAreaView,
    TouchableOpacity,
} from "react-native";
import { Camera } from "expo-camera";

import { COLORS, FONTS, SIZES, icons, images } from "../constants";

function Scan({ navigation }) {
    let cameraRef = useRef();
    const [hasCameraPermission, setHasCameraPermission] = useState();
    const [photo, setPhoto] = useState();

    useEffect(() => {
        (async () => {
            const cameraPermission = await Camera.requestCameraPermissionsAsync();
            setHasCameraPermission(cameraPermission.status === "granted");
        })();
    }, []);

    if (hasCameraPermission === undefined) {
        return <Text>Requesting permissions...</Text>;
    } else if (!hasCameraPermission) {
        return <Text>Permission for camera not granted. Please change this in settings.</Text>;
    }

    function renderHeader() {
        return (
            <View
                style={{
                    flexDirection: "row",
                    marginTop: SIZES.padding * 5,
                    paddingHorizontal: SIZES.padding * 3,
                }}
            >
                <TouchableOpacity
                    style={{
                        width: 45,
                        alignItems: "center",
                        justifyContent: "center",
                    }}
                    onPress={() => navigation.navigate("HomeTab")}
                >
                    <Image
                        source={icons.close}
                        style={{
                            height: 20,
                            width: 20,
                            tintColor: COLORS.white,
                        }}
                    />
                </TouchableOpacity>

                <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
                    <Text style={{ color: COLORS.white, ...FONTS.body3 }}>Scan for Payment</Text>
                </View>

                <TouchableOpacity
                    style={{
                        height: 45,
                        width: 45,
                        backgroundColor: COLORS.green,
                        borderRadius: 10,
                        alignItems: "center",
                        justifyContent: "center",
                    }}
                    onPress={() => console.log("Info")}
                >
                    <Image
                        source={icons.info}
                        style={{
                            height: 25,
                            width: 25,
                            tintColor: COLORS.white,
                        }}
                    />
                </TouchableOpacity>
            </View>
        );
    }

    function renderScanFocus() {
        return (
            <View
                style={{
                    flex: 1,
                    alignItems: "center",
                    justifyContent: "center",
                }}
            >
                <Image
                    source={images.focus}
                    resizeMode="stretch"
                    style={{
                        marginTop: "-55%",
                        width: 250,
                        height: 250,
                    }}
                />
            </View>
        );
    }

    function renderPaymentMethods() {
        return (
            <View
                style={{
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    right: 0,
                    height: 220,
                    padding: SIZES.padding * 3,
                    borderTopLeftRadius: SIZES.radius,
                    borderTopRightRadius: SIZES.radius,
                    backgroundColor: COLORS.white,
                }}
            >
                <Text style={{ ...FONTS.h4 }}>Another payment methods</Text>

                <View
                    style={{
                        flex: 1,
                        flexDirection: "row",
                        alignItems: "flex-start",
                        marginTop: SIZES.padding * 2,
                    }}
                >
                    <TouchableOpacity
                        style={{
                            flexDirection: "row",
                            alignItems: "center",
                        }}
                        onPress={() => console.log("Phone Number")}
                    >
                        <View
                            style={{
                                width: 40,
                                height: 40,
                                backgroundColor: COLORS.lightpurple,
                                alignItems: "center",
                                justifyContent: "center",
                                borderRadius: 10,
                            }}
                        >
                            <Image
                                source={icons.phone}
                                resizeMode="cover"
                                style={{
                                    height: 25,
                                    width: 25,
                                    tintColor: COLORS.purple,
                                }}
                            />
                        </View>
                        <Text style={{ marginLeft: SIZES.padding, ...FONTS.body4 }}>
                            Phone Number
                        </Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={{
                            flexDirection: "row",
                            alignItems: "center",
                            marginLeft: SIZES.padding * 2,
                        }}
                        onPress={() => console.log("Barcode")}
                    >
                        <View
                            style={{
                                width: 40,
                                height: 40,
                                backgroundColor: COLORS.lightGreen,
                                alignItems: "center",
                                justifyContent: "center",
                                borderRadius: 10,
                            }}
                        >
                            <Image
                                source={icons.barcode}
                                resizeMode="cover"
                                style={{
                                    height: 25,
                                    width: 25,
                                    tintColor: COLORS.primary,
                                }}
                            />
                        </View>
                        <Text style={{ marginLeft: SIZES.padding, ...FONTS.body4 }}>Barcode</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }

    function onBarCodeRead(result) {
        console.log(result.data);
    }

    return (
        <View
            style={{
                flex: 1,
                backgroundColor: "#000",
            }}
        >
            <Camera
                style={{ flex: 1 }}
                ref={cameraRef}
                onBarCodeScanned={onBarCodeRead}
                ratio="16:9"
            >
                {renderHeader()}
                {renderScanFocus()}
            </Camera>
            {renderPaymentMethods()}
        </View>
    );
}
export default Scan;
