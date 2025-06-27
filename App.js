import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { PaperProvider } from 'react-native-paper';

// Importando as telas
import Home from './Home';
import Exercicio1_MetrosParaCentimetros from './Exercicio1_MetrosParaCentimetros';
import Exercicio2_QuilometrosParaMilhas from './Exercicio2_QuilometrosParaMilhas';
import Exercicio3_CalculoIMC from './Exercicio3_CalculoIMC';
import Exercicio4_PrecoComDesconto from './Exercicio4_PrecoComDesconto';
import Exercicio5_JurosSimples from './Exercicio5_JurosSimples';
import Exercicio6_JurosCompostos from './Exercicio6_JurosCompostos';
import Exercicio7_DiasParaTempo from './Exercicio7_DiasParaTempo';

const Stack = createNativeStackNavigator();

export default function App(){
    const screenOptions = ({ route }) => ({
        headerStyle: {
            backgroundColor: route.params?.color || '#6200ee',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
            fontWeight: 'bold',
        },
    });

    return (
        <SafeAreaProvider>
            <PaperProvider>
                <NavigationContainer>
                    <Stack.Navigator initialRouteName="Home">
                        <Stack.Screen name="Home" component={Home} options={{ title: 'Lista de Exercícios', headerStyle: { backgroundColor: '#6200ee' } }}/>
                        <Stack.Screen name="Exercicio1_MetrosParaCentimetros" component={Exercicio1_MetrosParaCentimetros} options={screenOptions}/>
                        <Stack.Screen name="Exercicio2_QuilometrosParaMilhas" component={Exercicio2_QuilometrosParaMilhas} options={screenOptions}/>
                        <Stack.Screen name="Exercicio3_CalculoIMC" component={Exercicio3_CalculoIMC} options={screenOptions}/>
                        <Stack.Screen name="Exercicio4_PrecoComDesconto" component={Exercicio4_PrecoComDesconto} options={screenOptions}/>
                        <Stack.Screen name="Exercicio5_JurosSimples" component={Exercicio5_JurosSimples} options={screenOptions}/>
                        <Stack.Screen name="Exercicio6_JurosCompostos" component={Exercicio6_JurosCompostos} options={screenOptions}/>
                        <Stack.Screen name="Exercicio7_DiasParaTempo" component={Exercicio7_DiasParaTempo} options={screenOptions}/>
                    </Stack.Navigator>
                </NavigationContainer>
            </PaperProvider>
        </SafeAreaProvider>
    );
}