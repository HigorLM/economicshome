import { StyleSheet, View, Image, useWindowDimensions } from "react-native";
import React, { useState, useContext } from 'react';
import Logo from '../../../assets/images/Logo.png';
import CustomInput from "../../components/CustomInput";
import CustomButton from "../../components/CustomButton";
import api from '../../api'
import { Context } from '../../context/authContext'
import {Picker} from '@react-native-picker/picker';

const RegisterInvestimentos = ({ navigation }) => {

    const { state, dispatch } = useContext(Context);

    const [name, setName] = useState('');
    const [type, setType] = useState('');
    const [description, setDescription] = useState('');
    const [valor, setValor] = useState('');

    const { height } = useWindowDimensions();

    const onRegisterPressed = async () => {
        try {
            const authData = await api.post("/investimento/register", {
                name: name,
                type: type,
                description: description,
                valor: valor,
            });
            if (authData.status === 200) {
                alert(authData.data.message)
                setName("")
                setType("")
                setDescription("")
                setValor("")
                dispatch({type: "update", payload: true})
            }
            else {
                console.log(authData.data.message)
            }
        }
        catch (e) {
            console.log(e)
        }
    }

    return (
        <View style={styles.view}>
            <Image
                source={Logo}
                style={[styles.logo, { height: height * 0.3 }]}
                resizeMode="contain"
            />

            <CustomInput
                placeholder="Investimentos Name"
                value={name}
                setValue={setName}
            />

            <Picker
            
                selectedValue={type}
                style={styles.picker}
                onValueChange={setType}
            >
                <Picker.Item label="Categoria" value="Categoria" />
                <Picker.Item label="Celular" value="Celular" />
                <Picker.Item label="Viagem" value="Viagem" />
                <Picker.Item label="Tenis" value="Tenis" />
                <Picker.Item label="Maquiagem" value="Maquiagem" />
                <Picker.Item label="Emergencia" value="Emergencia" />
                <Picker.Item label="Carro" value="Carro" />
                <Picker.Item label="Moto" value="Moto" />
                <Picker.Item label="Casa" value="Casa" />
                <Picker.Item label="Outro" value="Outro" />
            </Picker>

            <CustomInput
                placeholder="Description"
                value={description}
                setValue={setDescription}
            />

            <CustomInput
                placeholder="Valor"
                value={valor}
                setValue={setValor}
            />

            <CustomButton text="Register" onPress={onRegisterPressed} />
        </View>
    )
};

const styles = StyleSheet.create({
    view: {
        alignItems: 'center',
        padding: 20,
        backgroundColor: "#f2e6d3"
    },
    logo: {
        width: '70%',
        maxWidth: 300,
        maxHeight: 200,
    },
    loginText: {
        fontWeight: "bold",
        color: "#6200ee",
    },
    picker: {
        marginVertical: 5,
        borderRadius: 5,
        backgroundColor: '#6db582',
        textAlignVertical: 'center',
        textAlign: 'center',
        fontSize: '14px',
        fontWeight: 'bold',
        borderWidth: 0,
        height: 45,
        width: '50%'
    }
});

export default RegisterInvestimentos