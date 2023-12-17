import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View, Button, TouchableOpacity } from 'react-native';
import { Video } from 'expo-av';
const VideoScreen = () => {
  const video = React.useRef(null);
  const secondVideo = React.useRef(null);
  const [status, setStatus] = React.useState({})
  const [statusSecondVideo, setStatusSecondVideo] = React.useState({})
  return (

    <View style={styles.container}>
      <Video
        ref={video}
        style={styles.video}
        source={require("../../assets/reactnativeintro.mp4")}
        // source={{ uri: "https://www.youtube.com/watch?v=pflXnUNMsNk&list=PL4cUxeGkcC9ixPU-QkScoRBVxtPPzVjrQ&index=2&ab_channel=NetNinja" }}
        useNativeControls
        resizeMode="contain"
        isLooping
        onPlaybackStatusUpdate={setStatus}
      />

      {/* <View style={styles.buttons}>
        <Button title="Play from 5s" onPress={() => video.current.playFromPositionAsync(5000)} />
        <Button title={status.isLooping ? "Set to not loop" : "Set to loop"} onPress={() => video.current.setIsLoopingAsync(!status.isLooping)} />
      </View> */}

      <Video
        ref={secondVideo}
        style={styles.video}
        source={require("../../assets/reactless1.mp4")}
        useNativeControls
        resizeMode="contain"
        isLooping
        onPlaybackStatusUpdate={setStatusSecondVideo}
      />
      {/* <View style={styles.buttons}>
        <Button title="Play from 50s" onPress={() => secondVideo.current.playFromPositionAsync(50000)} />
        <Button title={statusSecondVideo.isLooping ? "Set to not loop" : "Set to loop"} onPress={() => secondVideo.current.setIsLoopingAsync(!statusSecondVideo.isLooping)} />
      </View> */}

      <StatusBar style='auto' />
    </View>
  )
}

export default VideoScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  video: {
    flex: 1,
    alignSelf: 'stretch'
  },
  buttons: {
    margin: 16
  }
})