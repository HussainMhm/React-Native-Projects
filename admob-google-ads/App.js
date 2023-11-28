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

const bannerAdUnitId = __DEV__ ? TestIds.BANNER : "ca-app-pub-xxxxxxxxxxxxx/yyyyyyyyyyyyyy";

const interstitialAdUnitId = __DEV__
    ? TestIds.INTERSTITIAL
    : "ca-app-pub-xxxxxxxxxxxxx/yyyyyyyyyyyyyy";

const RewardedAdUnitId = __DEV__ ? TestIds.REWARDED : "ca-app-pub-xxxxxxxxxxxxx/yyyyyyyyyyyyyy";

const interstitial = InterstitialAd.createForAdRequest(interstitialAdUnitId, {
    requestNonPersonalizedAdsOnly: true,
    keywords: ["fashion", "clothing"],
});

const rewarded = RewardedAd.createForAdRequest(RewardedAdUnitId, {
    requestNonPersonalizedAdsOnly: true,
    keywords: ["fashion", "clothing"],
});

export default function App() {
    const [interstitialLoaded, setInterstitialLoaded] = useState(false);
    const [rewardedLoaded, setRewardedLoaded] = useState(false);

    useEffect(() => {
        const unsubscribe = interstitial.addAdEventListener(AdEventType.LOADED, () => {
            setInterstitialLoaded(true);
        });

        // Start loading the interstitial straight away
        interstitial.load();

        // Unsubscribe from events on unmount
        return unsubscribe;
    }, []);

    useEffect(() => {
        const unsubscribeLoaded = rewarded.addAdEventListener(RewardedAdEventType.LOADED, () => {
            setRewardedLoaded(true);
        });
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
