import { useEffect, useState } from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import {
    BannerAd,
    BannerAdSize,
    TestIds,
    InterstitialAd,
    AdEventType,
    RewardedAd,
    RewardedAdEventType,
} from "react-native-google-mobile-ads";
import CustomButton from "./components/CustomButton";

// Define ad unit IDs for banner, interstitial, and rewarded ads
const bannerAdUnitId = __DEV__ ? TestIds.BANNER : "ca-app-pub-xxxxxxxxxxxxx/yyyyyyyyyyyyyy";
const interstitialAdUnitId = __DEV__
    ? TestIds.INTERSTITIAL
    : "ca-app-pub-xxxxxxxxxxxxx/yyyyyyyyyyyyyy";
const RewardedAdUnitId = __DEV__ ? TestIds.REWARDED : "ca-app-pub-xxxxxxxxxxxxx/yyyyyyyyyyyyyy";

// Create instances of interstitial and rewarded ads with ad request configurations
const interstitial = InterstitialAd.createForAdRequest(interstitialAdUnitId, {
    requestNonPersonalizedAdsOnly: true,
    keywords: ["fashion", "clothing"],
});

const rewarded = RewardedAd.createForAdRequest(RewardedAdUnitId, {
    requestNonPersonalizedAdsOnly: true,
    keywords: ["fashion", "clothing"],
});

export default function App() {
    // State to track if the interstitial and rewarded ads are loaded
    const [interstitialLoaded, setInterstitialLoaded] = useState(false);
    const [rewardedLoaded, setRewardedLoaded] = useState(false);

    // Effect to handle interstitial ad loading and event subscription
    useEffect(() => {
        // Subscribe to the LOADED event for the interstitial ad
        const unsubscribe = interstitial.addAdEventListener(AdEventType.LOADED, () => {
            setInterstitialLoaded(true);
        });

        // Start loading the interstitial straight away
        interstitial.load();

        // Unsubscribe from events on unmount
        return unsubscribe;
    }, []);

    // Effect to handle rewarded ad loading and event subscription
    useEffect(() => {
        // Subscribe to the LOADED event for the rewarded ad
        const unsubscribeLoaded = rewarded.addAdEventListener(RewardedAdEventType.LOADED, () => {
            setRewardedLoaded(true);
        });

        // Subscribe to the EARNED_REWARD event for the rewarded ad
        const unsubscribeEarned = rewarded.addAdEventListener(
            RewardedAdEventType.EARNED_REWARD,
            (reward) => {
                console.log("User earned reward of ", reward);
            }
        );

        // Start loading the rewarded ad straight away
        rewarded.load();

        // Unsubscribe from events on unmount
        return () => {
            unsubscribeLoaded();
            unsubscribeEarned();
        };
    }, []);

    return (
        <View style={styles.container}>
            {/* Banner Ad */}
            <Text style={styles.title}>Banner Ad</Text>
            <BannerAd
                unitId={bannerAdUnitId}
                size={BannerAdSize.LARGE_BANNER}
                requestOptions={{
                    requestNonPersonalizedAdsOnly: true,
                }}
            />

            {/* Interstitial Ad */}
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

            {/* Rewarded Ad */}
            <Text style={styles.title}>Rewarded Ad</Text>
            <CustomButton
                title="Show Rewarded"
                onPress={() => {
                    rewarded.show();
                }}
            />
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
