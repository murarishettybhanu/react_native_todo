import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import Header from '../components/header';
import FloatingButton from '../components/floatingButton';
import TaskList from '../components/taskList';
import { Modal, Portal, Text, Button, Provider, TextInput } from 'react-native-paper';
import { connect } from 'react-redux';
import { addTask } from '../redux/actions/taskAction';


const TodoApp = (props) => {
    //state variables

    // for modal
    const [visible, setVisible] = useState(false);
    const [text, setText] = useState('');
    const [description, setDescription] = useState('');
    const [textError, setTextError] = useState(false);
    const [DescriptionError, setDescriptionError] = useState(false);

    const hideModal = () => setVisible(false);
    const showModal = () => setVisible(true);

    //
    const onAddButtonClick = () => {
        setText('');
        setDescription('');
        let date = new Date();
        let obj = {
            title: text,
            description: description,
            dateTime: date,
            status: false
        }
        props.addTodo(obj);
        hideModal();
    }

    const onTitleChange = (text) => {
        setText(text)
        if (text.length > 0) {
            setTextError(false);
        }
        else {
            setTextError(true);
        }
    }

    const onDescriptionChange = (text) => {
        setDescription(text)
        if (text.length > 0) {
            setDescriptionError(false);
        }
        else {
            setDescriptionError(true);
        }
    }
    return (
        <View style={styles.container} >
            <Header />
            <FloatingButton onPress={() => {
                showModal();
            }} />
            <TaskList />
            <Provider>
                <Portal>
                    <Modal visible={visible} onDismiss={hideModal}>
                        <View style={styles.modalView}>
                            <Text style={styles.modelText}>Add Task</Text>
                            <TextInput
                                style={!textError ? styles.textInput : styles.textInputError}
                                label="Title *"
                                value={text}
                                onChangeText={text => onTitleChange(text)}
                            />
                            <TextInput
                                style={!DescriptionError ? {} : styles.textInputError}
                                multiline={true}
                                numberOfLines={4}
                                label="Description *"
                                value={description}
                                onChangeText={text => onDescriptionChange(text)}
                            />
                            <Button icon="plus" mode="contained" disabled={textError || DescriptionError ? 'true' : ''} style={styles.button} onPress={() => {
                                onAddButtonClick()
                            }}>
                                Add
                            </Button>
                        </View>
                    </Modal>
                </Portal>
            </Provider>
        </View >
    )
}
const styles = StyleSheet.create({
    container: {
        height: '100%'
    },
    modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
    },
    button: {
        marginTop: 20
    },
    modelText: {
        fontSize: 20,
        fontWeight: "900",
        marginBottom: 10,
        textAlign: 'center'
    },
    textInput: { marginBottom: 10 },
    textInputError:
    {
        marginBottom: 10,
        borderColor: 'red',
        borderWidth: 1
    },
})
const mapStateToProps = state => ({
    task: state.task.tasks,
});

const mapDispatchToProps = dispatch => ({
    addTodo: (task) => dispatch(addTask(task)),

});

export default connect(mapStateToProps, mapDispatchToProps)(TodoApp);