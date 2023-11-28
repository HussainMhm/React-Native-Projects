import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import {
    BannerAd,
    BannerAdSize,
    TestIds,
    InterstitialAd,
    AdEventType,
} from "react-native-google-mobile-ads";
import CustomButton from "./components/CustomButton";

const bannerAdUnitId = __DEV__ ? TestIds.BANNER : "ca-app-pub-xxxxxxxxxxxxx/yyyyyyyyyyyyyy";

const interstitialAdUnitId = __DEV__
    ? TestIds.INTERSTITIAL
    : "ca-app-pub-xxxxxxxxxxxxx/yyyyyyyyyyyyyy";

const interstitial = InterstitialAd.createForAdRequest(interstitialAdUnitId, {
    requestNonPersonalizedAdsOnly: true,
    keywords: ["fashion", "clothing"],
});

export default function App() {
    const [interstitialLoaded, setInterstitialLoaded] = useState(false);

    useEffect(() => {
        const unsubscribe = interstitial.addAdEventListener(AdEventType.LOADED, () => {
            setInterstitialLoaded(true);
        });

        // Start loading the interstitial straight away
        interstitial.load();

        // Unsubscribe from events on unmount
        return unsubscribe;
    }, []);

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Banner Ad</Text>
            <BannerAd
                unitId={bannerAdUnitId}
                size={BannerAdSize.LARGE_BANNER}
                requestOptions={{
                    requestNonPersonalizedAdsOnly: true,
                }}
            />

            <Text style={styles.title}>Interstitial Ad</Text>

            {interstitialLoaded ? (
                <CustomButton
                    title="Show Interstitial"
                    onPress={() => {
                        interstitial.show();
                    }}
                />
            ) : (
                <Text>Loading Interstitial Ad..</Text>
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
    title: {
        fontWeight: "bold",
        fontSize: 24,
        marginTop: 32,
        marginBottom: 12,
    },
});
