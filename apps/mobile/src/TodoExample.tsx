import React, {PropsWithChildren, useState} from 'react';
import {
  Button,
  FlatList,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import {connect} from 'react-redux';
import {setTodoData} from '@repo/store';

type TodoExampleProps = PropsWithChildren<{
  todos: any;
  setTodos: any;
}>;

function TodoExample({todos, setTodos}: TodoExampleProps): JSX.Element {
  const [listItemNumber, setListItemNumber] = useState('');
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Native</Text>
      <TextInput
        inputMode={'numeric'}
        value={listItemNumber}
        onChangeText={setListItemNumber}
        style={styles.textEditStyles}
        textAlign={'center'}
        underlineColorAndroid={'grey'}
        placeholder={'Enter Pin Code'}
      />
      <Button
        onPress={() => {
          setTodos(Number.parseInt(listItemNumber, 10));
        }}
        title="Submit"
      />
      <View style={styles.spacerStyle} />
      <FlatList
        data={todos}
        renderItem={({item}) => (
          <View style={styles.listContainerStyle}>
            <Text>{item.title}</Text>
            <View
              style={[
                styles.statusIndicatorStyle,
                {
                  backgroundColor: item.status ? 'green' : 'red',
                },
              ]}
            />
          </View>
        )}
      />
      <StatusBar />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    fontWeight: 'bold',
    marginBottom: 20,
    fontSize: 36,
  },
  textEditStyles: {
    margin: 16,
    paddingHorizontal: 16,
  },
  listContainerStyle: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  spacerStyle: {
    height: 10,
  },
  statusIndicatorStyle: {
    width: 20,
    height: 20,
    margin: 6,
    borderRadius: 100,
  },
});

const mapStateToProps = (state: any) => {
  return {
    todos: state.todos.todoData,
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
