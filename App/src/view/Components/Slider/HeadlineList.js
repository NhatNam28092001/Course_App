import React from 'react'
import { View, Text, FlatList, TouchableOpacity, Image } from 'react-native'
import COLORS from '../../../conts/colors'

function HeadlineList({ newList }) {
    return (
        <View>
            <FlatList
                data={newList}
                renderItem={({ item }) => (
                    <View>
                        <View style={{ height: 1, backgroundColor: COLORS.lighGray, marginTop: 10 }}></View>
                        <TouchableOpacity style={{ marginTop: 15, flexDirection: 'row' }}>
                            <Image
                                source={{ uri: item.urlToImage }}
                                style={{ width: 130, height: 130, borderRadius: 10, marginLeft: 10 }}
                            />
                            <View style={{ marginRight: 135, marginLeft: 10 }}>
                                <Text
                                    numberOfLines={4}
                                    style={{ fontSize: 18, fontWeight: 'bold' }}>{item.title}
                                </Text>
                                <Text
                                    style={{ color: COLORS.primary, marginTop: 5 }}>{item?.source?.name}
                                </Text>
                            </View>
                        </TouchableOpacity>
                        
                    </View>


                )}
            />
        </View>
    )
}

export default HeadlineList
