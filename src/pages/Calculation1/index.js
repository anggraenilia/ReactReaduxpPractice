import React, { useState } from 'react';
import {
    View,
    Text,
    StyleSheet,
    Button,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

const Calculation1 = () => {
    const number = useSelector(state => state.number)
    const dispatch = useDispatch()

    return (
        <View style={styles.page}>
            <Button title="Tambah" onPress={() => dispatch({
                type: 'ADD'
            })} />
            <Text style={styles.text}>{number}</Text>
            <Button title="Kurang" onPress={() => dispatch({
                type: "SUBTRACT"
            })} />
        </View>
    )
}

export default Calculation1;

const styles = StyleSheet.create({
    page: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        fontSize: 20,
        marginVertical: 15,
    }
})
