import React, {PropsWithChildren} from 'react';
import {FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {connect} from 'react-redux';
import {setTodoData} from '@repo/store';

type TodoExampleProps = PropsWithChildren<{
  todos: any;
  setTodos: any;
}>;

function TodoExample({todos, setTodos}: TodoExampleProps): JSX.Element {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Native</Text>
      <View style={styles.spacerStyle} />
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
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    marginTop: 24,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    fontWeight: 'bold',
    marginBottom: 20,
    fontSize: 36,
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
    marginLeft: 16,
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
