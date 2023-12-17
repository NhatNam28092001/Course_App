import React, { useEffect, useState } from 'react'
import { View, Text, FlatList, TouchableOpacity, Image, Dimensions } from 'react-native'
import GlobalApi from '../../../Services/GlobalApi'
import COLORS from '../../../conts/colors'

function TopHeadlineSlider({newList}) {
    
    return (
        <View style={{ marginTop: 15 }}>
            <FlatList
                data={newList}
                horizontal={true}
                renderItem={({ item }) => (
                    <TouchableOpacity
                        style={{ width: Dimensions.get('screen').width * 0.80, marginRight: 15 }}>
                        <Image
                            source={{ uri: item.urlToImage }}
                            style={{ width: Dimensions.get('screen').width * 0.77, height: 250, borderRadius: 10, marginLeft: 15 }}
                        />
                        <Text
                            numberOfLines={3}
                            style={{ marginTop: 10, fontSize: 16, fontWeight: '800' }}>{item.title}</Text>
                        <Text style={{ marginTop: 5, color: COLORS.primary }}>{item?.source?.name}</Text>
                    </TouchableOpacity>
                )}
            />
        </View>
    )
}

export default TopHeadlineSlider
