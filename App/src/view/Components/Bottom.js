import React from 'react'
import { View, Text } from 'react-native'
import COLORS from '../../conts/colors'
import Card from '../../conts/card'
import { StyleSheet } from 'react-native'
import { FontAwesome } from "@expo/vector-icons";
import Sizes from '../../conts/sizes'

export default function Bottom() {
    return (
        <View style={styles.bottomContainer}>
            <Text style={{
                fontSize: 20,
                fontWeight: 'bold',
                color: COLORS.white,
            }}>
                Complete Profile
            </Text>

            <View style={styles.completeContainer}>
                <Card
                    icon={
                        <FontAwesome
                            name="graduation-cap"
                            size={24}
                            color={COLORS.primary}
                        />
                    }
                    cardTextOne="02 Steps"
                    cardText="Education"
                    style={{ backgroundColor: COLORS.primary }}
                />

                <Card
                    icon={
                        <FontAwesome name="briefcase" size={24} color={COLORS.secondary} />
                    }
                    cardTextOne="04 Steps"
                    cardText="Professional"
                    style={{ backgroundColor: COLORS.secondary }}
                />
            </View>

            <View style={styles.bottomSection}>
                <Text style={styles.bottomSectionText}>Buy Pro $23.49</Text>
            </View>
        </View >


    )
}
const styles = StyleSheet.create({
    bottomContainer: {
        marginTop: Sizes.medium,
    },
    completeContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: Sizes.xs,
    },
    card: {
        backgroundColor: COLORS.secondary,
    },
    bottomSection: {
        justifyContent: "center",
        alignItems: "center",
        marginTop: Sizes.medium,
    },
    bottomSectionText: {
        fontWeight: "bold",
        fontSize: Sizes.smedium,
        color: COLORS.darkGray,
        borderBottomWidth: 1,
        marginBottom: 5,
        borderBottomColor: COLORS.darkGray,
    }
});