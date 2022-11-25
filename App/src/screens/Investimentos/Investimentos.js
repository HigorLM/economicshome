import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import { Context } from '../../context/authContext'
import api from '../../api'
import { Entypo } from '@expo/vector-icons'
import CustomButton from '../../components/CustomButton'

const Investimentos = ({ navigation }) => {
    const { state, dispatch } = useContext(Context)

    const [Investimentos, setInvestimentos] = useState({});

    useEffect(() => {
        const onScreenLoad = async () => {
            const list = await api.get('/investimento/find');
            setInvestimentos(list.data.investimentos)
            dispatch({type: "update", payload: false})
        }
        onScreenLoad();
    }, [state.update]
    )

    const seeDesempenho = async (item) => {
        await dispatch({type: 'setInvestimento', payload: item});
        navigation.navigate('InvestimentoDesempenhos');
    }

    const newDesempenho = async (item) => {
        await dispatch({type: 'setInvestimento', payload: item});
        navigation.navigate('RegisterDesempenho')
    }

    return (
        <View style={styles.view}>
            {state.isAdmin ? (
                <CustomButton text="Novo Investimento" onPress={() => navigation.navigate("RegisterInvestimentos")} />
            ) : (
                <></>
            )}
            <FlatList
                data={Investimentos}
                renderItem={({ item }) => {
                    return (
                        <View style={styles.container}>
                            <TouchableOpacity style={styles.text} onPress={() => seeDesempenho(item)}>
                                    <Text style={styles.title}>{item.name}</Text>
                                    <Text style={styles.item}>{item.type}</Text>
                                    <Text style={styles.item}>{item.description}</Text>
                                    <Text style={styles.item}>{item.valor}</Text>
                            </TouchableOpacity>
                            <Entypo
                                name="squared-plus"
                                size={60}
                                color="green"
                                style={styles.icon}
                                onPress={() => newDesempenho(item)
                                }
                            />
                        </View>
                    )
                }
                }
                keyExtractor={(item) => item.id}
            />
        </View>


    )
}

export default Investimentos

const styles = StyleSheet.create({
    view: {
        flex: 1,
        justifyContent: "center",
        backgroundColor: "#f2e6d3"
    },
    button: {
        marginBottom: 20
    },
    container: {
        flexDirection: "row",
        flexWrap: "wrap",
        margin: 5,
        padding: 10,
        borderRadius: 10,
        backgroundColor: 'lightblue',
        alignItems: 'center'
    },
    text: {
        height: 120,
        width: '80%',
        justifyContent: "center",
    },
    title: {
        fontSize: 30
    },
    item: {
        fontSize: 15
    },
    icon: {
        margin: 0
    }
})
