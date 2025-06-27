import { StyleSheet } from 'react-native';
import React, {useState} from 'react';
import {Button, TextInput, Text, Title, Card, Paragraph} from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Exercicio3_CalculoIMC({ navigation, route }) {
  const { color } = route.params;

  const [peso, setPeso] = useState("");
  const [altura, setAltura] = useState("");
  const [imc, setImc] = useState("");
  const [classificacao, setClassificacao] = useState("");

  const calcularIMC = () => {
    const valorPeso = parseFloat(peso);
    const valorAltura = parseFloat(altura);
    
    if (!isNaN(valorPeso) && !isNaN(valorAltura) && valorAltura > 0) {
      const resultadoIMC = valorPeso / (valorAltura * valorAltura);
      setImc(resultadoIMC.toFixed(2));
      
      if (resultadoIMC < 18.5) {
        setClassificacao("Abaixo do peso");
      } else if (resultadoIMC < 25) {
        setClassificacao("Peso normal");
      } else if (resultadoIMC < 30) {
        setClassificacao("Sobrepeso");
      } else {
        setClassificacao("Obesidade");
      }
    } else {
      setImc("Valores inválidos");
      setClassificacao("");
    }
    setPeso("");
    setAltura("");
  }

  return (
    <SafeAreaView style={styles.container} >
      <Card style={styles.card}>
        <Card.Content>
          <Title style={[styles.title, { color: color }]}>Calculadora de IMC</Title>
          <TextInput 
            label='Seu peso (kg)' 
            keyboardType='numeric'
            value={peso} 
            onChangeText={setPeso} 
            style={styles.input}
            left={<TextInput.Icon icon="weight-kilogram" />}
            theme={{ colors: { primary: color } }}
          />
          <TextInput 
            label='Sua altura (metros)' 
            keyboardType='numeric'
            value={altura} 
            onChangeText={setAltura} 
            style={styles.input}
            left={<TextInput.Icon icon="human-male-height" />}
            theme={{ colors: { primary: color } }}
          />
          <Button 
            onPress={calcularIMC} 
            mode="contained" 
            style={[styles.button, { backgroundColor: color }]} 
            icon="calculator"
          >
            Calcular IMC
          </Button>
          {imc ? (
            <Text style={styles.result}>
              Seu IMC: {imc}
            </Text>
          ) : null}
          {classificacao ? (
            <Paragraph style={[styles.classification, { color: color }]}>
              Classificação: {classificacao}
            </Paragraph>
          ) : null}
        </Card.Content>
      </Card>
      <Button 
        mode="outlined" 
        onPress={() => navigation.goBack()} 
        style={styles.backButton} 
        icon="arrow-left"
        textColor={color}
        borderColor={color}
      >
        Voltar
      </Button>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f0f4f7',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
    },
    card: {
        width: '100%',
        padding: 10,
        borderRadius: 12,
    },
    title: {
        fontSize: 22,
        fontWeight: 'bold',
        marginBottom: 20,
        textAlign: 'center',
    },
    input: {
        marginBottom: 15,
    },
    button: {
        marginBottom: 15,
    },
    result: {
        fontSize: 20,
        textAlign: 'center',
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 5,
    },
    classification: {
        fontSize: 18,
        textAlign: 'center',
        fontWeight: 'bold',
    },
    backButton: {
        marginTop: 20,
    }
});