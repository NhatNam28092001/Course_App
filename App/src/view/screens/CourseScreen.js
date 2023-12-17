import React from 'react'
import { View, Text, ImageBackground, StyleSheet, Image, FlatList, TouchableOpacity } from 'react-native';
import { SafeAreaView, } from 'react-native-safe-area-context';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';

const CourseScreen = ({ route, navigation }) => {
    const { data } = route.params;

    // const BottonNavigatorBar = () => {
    //     return <View style={{
    //         height: 80,
    //         bottom: 0,
    //         zIndex: 100,
    //         flexDirection: 'row',

    //     }}>
    //         <View style={{
    //             height: 60,
    //             width: 70,
    //             backgroundColor: '#FFEDEE',
    //             borderRadius: 30,
    //             justifyContent: 'center',
    //             alignItems: 'center',
    //             marginRight: 10,
    //             marginLeft: 15
    //         }}>
    //             <MaterialIcons name="local-mall" size={24} color="#FF6670" />
    //         </View>
    //         <View style={{
    //             height: 60,
    //             backgroundColor: '#6E8AFA',
    //             flex: 1,
    //             borderRadius: 30,
    //             alignItems: 'center',
    //             justifyContent: 'center'
    //         }}>
    //             <Text style={{ fontSize: 15, color: '#fff', fontWeight: 'bold' }}> Buy Now</Text>
    //         </View>
    //     </View>
    // }


    const CourseContentList = ({ content, index }) => {
        return <View
            style={{
                paddingHorizontal: 20,
                paddingVertical: 10,
                flexDirection: 'row',
            }}>
            <Text style={{ fontSize: 40, fontWeight: 'bold', color: '#E4E7F4' }}>
                {'0' + (index + 1)}
            </Text>
            <View style={{ paddingHorizontal: 20, flex: 1 }}>
                <Text style={{
                    fontSize: 15,
                    color: '#A0A5BD',
                    fontWeight: "500",
                    marginBottom: 5
                }}>{content.time}</Text>
                <Text style={{ fontSize: 18, fontWeight: 'bold' }}>{content.title}</Text>
            </View>
            <View style={{
                width: 40,
                height: 40,
                backgroundColor: '#49CC96',
                borderRadius: 20,
                justifyContent: 'center',
                alignItems: 'center',
            }}>
                <TouchableOpacity onPress={() => navigation.navigate('VideoScreen')}>
                    <MaterialIcons name="play-arrow" size={24} color="#fff" />
                </TouchableOpacity>

            </View>
        </View>
    }
    return (
        <SafeAreaView style={{ backgroundColor: '#fff', flex: 1 }}>

            <ImageBackground
                source={data.image}
                style={{
                    height: 400,
                    paddingTop: 40,
                    paddingRight: 20,
                    paddingLeft: 20,
                }} >
                <Image
                    resizeMode="contain"
                    source={require('../../assets/bestseller.png')}
                    style={{ width: 100, marginBottom: 10 }}
                />
                <Text style={{ fontSize: 25, fontWeight: 'bold', top: -35 }}>
                    {data.title}
                </Text>

                <View style={{ top: -25, flexDirection: 'row' }}>
                    <View style={{ flexDirection: 'row', marginRight: 10 }}>
                        <Ionicons name="people" size={24} color='#61688B' />
                        <Text style={{ color: 'black', fontWeight: 'bold' }}>
                            {data.students + 'k'}
                        </Text>
                    </View>

                    <View style={{ flexDirection: 'row' }}>
                        <Ionicons
                            name="star"
                            size={24} color='#61688B'
                            style={{ marginRight: 5 }}
                        />
                        <Text style={{ color: 'black', fontWeight: 'bold' }}>
                            {data.star + 'k'}
                        </Text>
                    </View>
                </View>
                {/* <Text style={{ top: -10, fontWeight: 'bold', fontSize: 25 }}>
                    {"$" + data.price}
                </Text> */}
            </ImageBackground>
            <View
                style={{
                    flex: 1,
                    marginTop: -45,
                    backgroundColor: '#fff',
                    borderTopRightRadius: 50,
                    borderTopLeftRadius: 50,
                }}>
                <Text
                    style={{
                        marginTop: 20,
                        marginBottom: 20,
                        marginHorizontal: 20,
                        fontSize: 21,
                        fontWeight: 'bold'
                    }}>
                    Course Content
                </Text>
                <FlatList
                    showVerticalScrollIndicator={false}
                    data={data.courseContent}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({ item, index }) => (<CourseContentList index={index} content={item} />)}
                />
            </View>
            {/* <BottonNavigatorBar /> */}
        </SafeAreaView>
    )


}
export default CourseScreen;