import {Button, FlatList, Text, TextInput, View} from 'react-native';
import {styles} from './styles/styles.ts';
import React, {PropsWithChildren, useState} from 'react';
import {localUserId, Message} from '@repo/store';
type ChatsTabProps = PropsWithChildren<{
  chatMessageList: Message[];
  sendMessage: any;
}>;

export default function ChatsTab({
  chatMessageList,
  sendMessage,
}: ChatsTabProps) {
  const [chatEditText, setChatEditText] = useState<string>('');
  return (
    <View style={{flex: 1, width: '100%', justifyContent: 'flex-end'}}>
      <FlatList
        inverted
        data={[...chatMessageList].reverse()}
        renderItem={({item}) => (
          <View
            style={[
              styles.chatBubble,
              item.userId === localUserId
                ? {
                    alignSelf: 'flex-end',
                    borderTopEndRadius: 0,
                    backgroundColor: 'pink',
                  }
                : {
                    alignSelf: 'flex-start',
                    borderTopStartRadius: 0,
                    backgroundColor: 'grey',
                  },
            ]}>
            <Text
              style={{color: item.userId === localUserId ? 'black' : 'white'}}>
              {item.message}
            </Text>
          </View>
        )}
      />
      <TextInput
        style={styles.chatEditTextStyle}
        placeholder={'Type a message'}
        onChangeText={setChatEditText}
        value={chatEditText}
      />
      <Button
        title={'Send socket'}
        onPress={() => {
          if (chatEditText.length > 0) {
            sendMessage(chatEditText);
            setChatEditText('');
          }
        }}
      />
    </View>
  );
}
