import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import RegisterDesempenho from './RegisterDesempenho';
import Desempenho from './Desempenho';

const Stack = createNativeStackNavigator();

const DesempenhoRoutes = ({ navigation }) => {
    return (
            <Stack.Navigator screenOptions={{ headerShown: false }} >
                <Stack.Screen name="DesempenhoMain" component={Desempenho} />
            </Stack.Navigator>
    )
}

export default DesempenhoRoutes

