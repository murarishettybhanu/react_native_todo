import React from 'react';
import { List } from 'react-native-paper';
import { View, ScrollView, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { toggleTask, deleteTask } from '../redux/actions/taskAction';



const TaskList = (props) => {
    const onToggleTodo = (key) => {
        props.toggleTodo(key);
    }
    const onDeleteTodo = (key) => {
        props.deleteTodo(key);
    }

    return (
        <View>
            <ScrollView>
                {props.task.map((item, key) =>
                    <TouchableOpacity>
                        <List.Item
                            key={key}
                            title={`${item.title}`}
                            titleStyle={item.status ? { textDecorationLine: 'line-through' } : {}}
                            description={`${item.description}\n${new Date(item.dateTime).toDateString()}`}
                            right={props => {
                                return item.status ?
                                    <TouchableOpacity onPress={() => onDeleteTodo(key)}><List.Icon {...props} icon="delete" /></TouchableOpacity> : <></>
                            }}
                            onPress={() => {
                                onToggleTodo(key);
                            }}
                        />
                    </TouchableOpacity>
                )}
            </ScrollView>
        </View>
    )
}

const mapStateToProps = state => ({
    task: state.task.tasks,
});

const mapDispatchToProps = dispatch => ({
    toggleTodo: (key) => dispatch(toggleTask(key)),
    deleteTodo: (key) => dispatch(deleteTask(key))
});

export default connect(mapStateToProps, mapDispatchToProps)(TaskList);
