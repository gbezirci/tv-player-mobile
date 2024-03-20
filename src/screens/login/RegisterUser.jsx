import {SafeAreaView, StatusBar, StyleSheet, Text, View} from 'react-native'
import React from 'react'

export default function RegisterUser() {
    return (
        <SafeAreaView style={styles.container}>
            <Text>Register User</Text>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: StatusBar.currentHeight || 0,
        marginHorizontal: 16,
    },

})
