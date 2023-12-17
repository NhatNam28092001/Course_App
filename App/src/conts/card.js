import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import COLORS from "./colors";

export default function Card({ icon, cardTextOne, cardTextTwo, cardText, style }) {
    return (
        <View style={[styles.cardContainer, style]}>
            <View style={styles.iconContainer}>
                {icon}
            </View>
            <Text style={styles.cardText}>{cardText}</Text>

            <Text style={styles.cardTextOne}>{cardTextOne}</Text>
            <View
                style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                }}
            >
                <Text style={styles.cardTextTwo}>Reviewed</Text>
                <AntDesign name="arrowright" size={24} color={COLORS.darkGray} />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    cardContainer: {
        backgroundColor: COLORS.white,
        width: 150,
        height: 180,
        borderRadius: 10,
        padding: 10,
        marginTop: 20,
    },
    iconContainer: {
        backgroundColor: COLORS.white,
        width: 45,
        height: 45,
        borderRadius: 10,
        justifyContent: "center",
        alignItems: "center",
    },
    cardText: {
        color: COLORS.darkGray,
        fontWeight: "400",
        fontSize: 16,
        marginVertical: 15,
    },
    cardTextOne: {
        fontWeight: "bold",
        color: COLORS.darkGray,
        fontSize: 18,
    },
    cardTextTwo: {
        borderBottomColor: COLORS.darkGray,
        color: COLORS.darkGray,
        fontWeight: "bold",
        fontSize: 18,
        borderBottomWidth: 1,
        marginBottom: 3,
    },
});