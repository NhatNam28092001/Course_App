import React, { useState } from 'react'
import { View, Text, FlatList, Touchable, TouchableOpacity, StyleSheet } from 'react-native'
import COLORS from '../../../conts/colors'

function CategoryTextSlider() {
    const [active, setActive] = useState(1)
    const categorylist = [
        {
            id: 1,
            name: 'Latest'
        },
        {
            id: 2,
            name: 'World'
        },
        {
            id: 3,
            name: 'Bussiness'
        },
        {
            id: 4,
            name: 'Sport'
        },
        {
            id: 5,
            name: 'Life'
        },
        {
            id: 6,
            name: 'Movie'
        },
    ]

    const onCategoryClick = (id) => {
        setActive(id)
    }

    return (
        <View style={{ marginTop: 10 }}>
            <FlatList
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                data={categorylist}
                renderItem={({ item }) => (
                    <TouchableOpacity onPress={() => onCategoryClick(item.id)}>
                        <Text style={item.id == active ? styles.selectText : styles.unselectText}>{item.name}</Text>
                    </TouchableOpacity>
                )}
            />
        </View>
    )
}
const styles = StyleSheet.create({
    unselectText: {
        marginLeft: 10,
        marginRight: 10,
        fontSize: 20,
        fontWeight: '900',
        color: COLORS.gray
    },
    selectText: {
        marginLeft: 10,
        marginRight: 10,
        fontSize: 20,
        fontWeight: 'bold',
        color: COLORS.primary
    }

})

export default CategoryTextSlider
