import React, {PropsWithChildren, useState} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {connect} from 'react-redux';
import {setTodoData, useWebSocket} from '@repo/store';
import {Message} from '@repo/store';
import {styles} from './tabs/styles/styles.ts';
import TodoTab from './tabs/TodoTab.tsx';
import WeatherAPITab from './tabs/WeatherAPITab.tsx';
import ChatsTab from './tabs/ChatsTab.tsx';

type TodoExampleProps = PropsWithChildren<{
  todos: any;
  setTodos: any;
  chatMessageList: Message[];
}>;

function TodoExample({
  todos,
  setTodos,
  chatMessageList,
}: TodoExampleProps): JSX.Element {
  const [tabs, changeTab] = useState<string>('todo');

  const {error, sendMessage} = useWebSocket(
    'wss://socketsbay.com/wss/v2/1/demo/',
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Native</Text>
      <View style={styles.navBarStyles}>
        <TouchableOpacity
          onPress={() => changeTab('todo')}
          style={[
            styles.tabStyles,
            {backgroundColor: tabs === 'todo' ? 'black' : 'grey'},
          ]}>
          <Text style={styles.tabHeaderStyle}>Todo demo tab</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => changeTab('weather')}
          style={[
            styles.tabStyles,
            {backgroundColor: tabs === 'weather' ? 'black' : 'grey'},
          ]}>
          <Text style={styles.tabHeaderStyle}>Weather API demo tab</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => changeTab('chats')}
          style={[
            styles.tabStyles,
            {backgroundColor: tabs === 'chats' ? 'black' : 'grey'},
          ]}>
          <Text style={styles.tabHeaderStyle}>Chats</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.spacerStyle} />
      {tabs === 'todo' ? (
        <TodoTab todos={todos} setTodos={setTodos} />
      ) : tabs === 'weather' ? (
        <WeatherAPITab />
      ) : (
        <ChatsTab chatMessageList={chatMessageList} sendMessage={sendMessage} />
      )}
    </View>
  );
}

const mapStateToProps = (state: any) => {
  return {
    todos: state.todos.todoData,
    chatMessageList: state.chats.messageList,
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    setTodos: (params: number) => {
      return dispatch(setTodoData(params));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoExample);
