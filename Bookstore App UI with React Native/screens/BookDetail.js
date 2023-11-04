import React, { useEffect, useState } from "react";
import { Text, View } from "react-native";
import { COLORS } from "../constants";
import BookCoverSection from "../components/BookDetail.js/BookCoverSection";
import BookDescriptionSection from "../components/BookDetail.js/BookDescriptionSection";
import BookButtonsSection from "../components/BookDetail.js/BookButtonsSection";

function BookDetail({ route, navigation }) {
    const [book, setBook] = useState(null);

    useEffect(() => {
        let { book } = route.params;
        setBook(book);
    }, [book]);

    if (book) {
        return (
            <View style={{ flex: 1, backgroundColor: COLORS.black }}>
                {/* Book Cover Section */}
                <View style={{ flex: 4 }}>
                    <BookCoverSection book={book} />
                </View>

                {/* Description */}
                <View style={{ flex: 2 }}>
                    <BookDescriptionSection book={book} />
                </View>

                {/* Buttons */}
                <View style={{ height: 70, marginBottom: 30 }}>
                    <BookButtonsSection book={book} />
                </View>
            </View>
        );
    } else {
        return <></>;
    }
}

export default BookDetail;
