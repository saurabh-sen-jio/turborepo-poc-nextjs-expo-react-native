import {FlatList, Text, TouchableOpacity, View} from 'react-native';
import {styles} from './styles/styles.ts';
import React, {PropsWithChildren} from 'react';

type TodoTabProps = PropsWithChildren<{
  todos: any;
  setTodos: any;
}>;

export default function TodoTab({todos, setTodos}: TodoTabProps) {
  return (
    <FlatList
      data={todos}
      renderItem={({item}) => (
        <View style={styles.listContainerStyle}>
          <Text>{item.title}</Text>
          <TouchableOpacity
            style={[
              styles.statusIndicatorStyle,
              {
                backgroundColor: item.status ? 'green' : 'red',
              },
            ]}
            onPress={() => {
              setTodos(item.id);
            }}
          />
        </View>
      )}
    />
  );
}
