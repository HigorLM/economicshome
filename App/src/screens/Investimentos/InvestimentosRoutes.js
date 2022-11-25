import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import RegisterInvestimentos from './RegisterInvestimentos';
import Investimentos from './Investimentos';
import RegisterDesempenho from '../Desempenho/RegisterDesempenho';
import InvestimentoDesempenhos from '../Desempenho/InvestimentoDesempenhos';

const Stack = createNativeStackNavigator();

const InvestimentosRoutes = ({ navigation }) => {
    return (
            <Stack.Navigator screenOptions={{ headerShown: false }} >
                <Stack.Screen name="MainInvestimentos" component={Investimentos} />
                <Stack.Screen name="RegisterInvestimentos" component={RegisterInvestimentos} />
                <Stack.Screen name="RegisterDesempenho" component={RegisterDesempenho} />
                <Stack.Screen name="InvestimentoDesempenhos" component={InvestimentoDesempenhos} />
                </Stack.Navigator>
    )
}

export default InvestimentosRoutes

