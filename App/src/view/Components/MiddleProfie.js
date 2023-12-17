import React from 'react'
import { View, StyleSheet, Text, Image } from 'react-native'
import COLORS from '../../conts/colors'
import { Colors } from 'react-native/Libraries/NewAppScreen';

const MiddleProfie = () => {
    // const [UserDetails, setUserDetails] = React.useState();
    // React.useEffect(() => {
    //     getUserDetails()
    // }, [])
    // const getUserDetails = async () => {
    //     const userData = await AsyncStorage.getItem('user')
    //     if (userData) {
    //         setUserDetails(JSON.parse(userData));
    //     }
    // }
    return (
        <View style={styles.main}>
            <View style={styles.imageContainer}>
                <Image
                    source={require("../../assets/avatar.png")}
                    style={styles.image}
                />
                <Text
                    style={{
                        fontSize: 16,
                        color: COLORS.white,
                        fontWeight: "bold",
                    }}
                >
                    Nam
                </Text>
                <Text
                    style={{
                        fontSize: 16,
                        color: COLORS.grey,
                        fontWeight: "500",
                    }}>nam@gmail.com</Text>
            </View>

            <View style={styles.middleSectionTextContainer}>
                <View style={styles.middleSectionText}>
                    <Text style={styles.toptext}>Applied</Text>
                    <Text style={styles.bottomtext}>28</Text>
                </View>

                <View style={styles.middleSectionText}>
                    <Text style={styles.toptext}>Reviewer</Text>
                    <Text style={styles.bottomtext}>73</Text>
                </View>

                <View style={styles.middleSectionText}>
                    <Text style={styles.toptext}>Contacted</Text>
                    <Text style={styles.bottomtext}>18</Text>
                </View>

            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    main: {
        marginTop: 30,
    },
    imageContainer: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    image: {
        width: 150,
        height: 150,
        borderRadius: 50,
        marginBottom: 5,
    },
    middleSectionTextContainer: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        marginTop: 20,
    },
    middleSectionText: {
        alignContent: 'center',
        justifyContent: 'center'
    },
    toptext: {
        fontSize: 16,
        color: COLORS.white,
        fontWeight: 'bold',
    },
    bottomtext: {
        fontSize: 16,
        color: COLORS.darkGray,
        fontWeight: 'bold'
    }
});

export default MiddleProfie;