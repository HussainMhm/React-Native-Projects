import React, { useState } from "react";
import { SafeAreaView, Text, View, StyleSheet, StatusBar } from "react-native";
import { ScrollView } from "react-native-virtualized-view";

import { COLORS, FONTS, SIZES, icons, images } from "../constants";
import HeaderSection from "../components/Home/HeaderSection";
import ShortcutsSection from "../components/Home/ShortcutsSection";
import { categoriesData, myBooksData, profileData } from "../constants/raw-data";
import MyBooksSection from "../components/Home/MyBooksSection";
import CategoriesSection from "../components/Home/CategoriesSection";

function Home() {
    const [profile, setProfile] = useState(profileData);
    const [myBooks, setMyBooks] = useState(myBooksData);
    const [categories, setCategories] = useState(categoriesData);

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.black, ...styles.androidSafeArea }}>
            {/* Header Section */}
            <View style={{ height: 200 }}>
                <HeaderSection profile={profile} />
                <ShortcutsSection />
            </View>

            {/* Body Section */}
            <ScrollView style={{ marginTop: SIZES.radius }}>
                {/* My Books */}
                <MyBooksSection books={myBooks} />

                {/* Categories */}
                <CategoriesSection categories={categories} books={myBooks} />
            </ScrollView>
        </SafeAreaView>
    );
}

export default Home;

const styles = StyleSheet.create({
    androidSafeArea: {
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight + 8 : 0,
    },
});
