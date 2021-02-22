import React, { useState } from 'react';
import {
    View,
    Text,
    StyleSheet,
    Button,
} from 'react-native';

const Calculation1 = () => {
    const [number, setNumber] = useState(0);

    const Add = () => {
        setNumber(number + 1)
    }

    const Subtract = () => {
        setNumber(number - 1)
    }

    return (
        <View style={styles.page}>
            <Button title="Tambah" onPress={Add} />
            <Text style={styles.text}>{number}</Text>
            <Button title="Kurang" onPress={Subtract} />
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
