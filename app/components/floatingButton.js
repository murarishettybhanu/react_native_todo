import React from 'react';
import { StyleSheet } from 'react-native';
import { FAB } from 'react-native-paper';

const FloatingButton = (props) => {
    return (
        <FAB
            style={styles.fab}
            icon="plus"
            onPress={() => props.onPress()}
        />
    )
}

const styles = StyleSheet.create({
    fab: {
        position: 'absolute',
        margin: 16,
        right: 10,
        bottom: 10,
    },
})

export default FloatingButton;