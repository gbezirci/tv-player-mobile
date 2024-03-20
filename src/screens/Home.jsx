import {Button, FlatList, SafeAreaView, StatusBar, StyleSheet, Text, TouchableOpacity, View} from 'react-native'
import React from 'react'
import Icon from "react-native-vector-icons/Ionicons";

const DATA = [];


const Item = ({title}) => (
    <View style={styles.item}>
        <Text style={styles.title}>{title}</Text>
    </View>
);

export default function Home({navigation}) {
    return (
        <SafeAreaView style={styles.container}>

            <View style={styles.listRow}>
                {DATA.length === 0 ?
                    <View style={{justifyContent:"center",alignItems:"center",height:250}}>
                        <Text style={{fontSize:25}}>Henüz ekli bir kullanıcı yok</Text>
                    </View>
                    :

                    <FlatList
                        data={DATA}
                        renderItem={({item}) => <Item title={item.title}/>}
                        keyExtractor={item => item.id}
                    />}
            </View>

            <View style={styles.buttonRow}>
                <TouchableOpacity style={styles.addUserButton}
                                  onPress={() => { navigation.navigate('Register')
                                  }}>

                    <View style={styles.buttonContent}>
                        <Icon name="add" size={30} color="white"/>
                        <Text style={styles.addUserButtonText}>Yeni Kullanıcı Ekle</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: StatusBar.currentHeight || 0,
        marginHorizontal: 16,
    },
    item: {
        backgroundColor: '#f9c2ff',
        padding: 20,
        marginVertical: 8
    },
    title: {
        fontSize: 32,
    },
    addUserButton: {
        padding: 20,
        justifyContent: 'center',
        alignItems: 'center',
        borderStyle: "solid",
        borderBottomWidth: 1,
        borderColor: "black",
        flexDirection: 'row',
        backgroundColor: 'blue',
        borderRadius: 5,
    },

    buttonContent: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    addUserButtonText: {
        color: 'white',
        marginLeft: 10,
        fontSize: 20,
    },

    buttonRow: {
        marginTop: 30,
        flex: 1,
        justifyContent: 'center',
    },
    listRow: {
        marginTop: 30,
        flex: 9,
        justifyContent: 'flex-start',
        borderStyle: "solid",
        borderWidth:.5,
        borderColor: "#ccc",
        borderRadius: 5,
    }

});
