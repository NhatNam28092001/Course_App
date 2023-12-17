import React, { useEffect, useState } from 'react'
import { View, Text, StyleSheet, ScrollView } from 'react-native'
import CategoryTextSlider from '../Components/Slider/CategoryTextSlider'
import { SafeAreaView } from 'react-native-safe-area-context'
import COLORS from '../../conts/colors'
import { Ionicons } from '@expo/vector-icons';
import TopHeadlineSlider from '../Components/Slider/TopHeadlineSlider'
import HeadlineList from '../Components/Slider/HeadlineList'
import GlobalApi from '../../Services/GlobalApi'


const New = () => {
    const [newList, setNewsList] = useState([])
    useEffect(() => {
        getTopHeadline();
    }, [])

    const getTopHeadline = async () => {
        const result = (await GlobalApi.getTopHeadline).data;
        setNewsList(result.articles)
    }
    return (
        <ScrollView>
            <View style={styles.container}>
                <Text
                    style={styles.title}>BBC NewS</Text>
                <Ionicons name="notifications-outline" size={24} color="black" />
            </View>

            {/* categorylist */}
            <CategoryTextSlider />

            {/* TopHeadlineSlider */}
            <TopHeadlineSlider newList={newList} />

            {/* HeadlineList */}
            <HeadlineList newList={newList} />
        </ScrollView>


    )

}
const styles = StyleSheet.create({
    container: {
        marginLeft: 10,
        paddingTop: 25,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: COLORS.primary
    }
})
export default New
