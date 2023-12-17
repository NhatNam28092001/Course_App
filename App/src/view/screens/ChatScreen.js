import { View, Text } from 'react-native'
import React, { useCallback, useEffect, useState } from 'react'
import { useRoute } from '@react-navigation/native'
import { GiftedChat } from 'react-native-gifted-chat';
import ChatFaceData from '../../Services/ChatFaceData';
import GlobalApi from '../../Services/GlobalApi';

const ChatScreen = () => {
  const param = useRoute().params;

  const [messages, setMessages] = useState([])

  const [loading, setLoading] = useState(false);

  const [selectedChatFace, setSelectedChatFace] = useState([]);
  useEffect(() => {

    setSelectedChatFace(param.selectedFace)
    setMessages([
      {
        _id: 1,
        text: 'Hello, I am ' + param.selectedFace?.name + ', How Can I help you?',
        createdAt: new Date(),
        user: {
          _id: 2,
          name: 'React Native',
          avatar: param.selectedFace?.image,
        },
      },
    ])
  }, [])

  const onSend = useCallback((messages = []) => {
    setLoading(true)
    setMessages(previousMessages => GiftedChat.append(previousMessages, messages),)
    if (messages[0].text) {
      getBardResp(messages[0].text)
    }
  }, [])

  const getBardResp = (msg) => {
    GlobalApi.getBardApi(msg).then(resp => {
      // console.log(resp.data)

      if (resp.data.resp[1].content) {
        const chatAPIResp = {
          _id: Math.random() * (9999999 - 1),
          text: resp.data.resp[1].content,
          createdAt: new Date(),
          user: {
            _id: 2,
            name: 'React Native',
            avatar: param.selectedFace?.image,
          },
        }
        setMessages(previousMessages => GiftedChat.append(previousMessages, chatAPIResp))
        setLoading(false)

      }
      else {
        setLoading(false)
        const chatAPIResp = {
          _id: Math.random() * (9999999 - 1),
          text: "Sorry, I can not help with it",
          createdAt: new Date(),
          user: {
            _id: 2,
            name: 'React Native',
            avatar: param.selectedFace?.image,
          },
        }
        setMessages(previousMessages => GiftedChat.append(previousMessages, chatAPIResp))
      }
    })
      .catch((err) => {
        // console.log(Object.keys(err))
        console.log(err)
      })
  }

  return (
    <View style={{ flex: 1, backgroundColor: '#fff' }}>
      <GiftedChat
        messages={messages}
        isTyping={loading}
        onSend={messages => onSend(messages)}
        user={{
          _id: 1,
        }}
      />
    </View>
  )
}

export default ChatScreen