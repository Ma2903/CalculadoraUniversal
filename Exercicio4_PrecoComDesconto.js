import { StyleSheet } from 'react-native';
import React, {useState} from 'react';
import {Button, TextInput, Text, Title, Card, Paragraph} from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Exercicio4_PrecoComDesconto({ navigation, route }) {
  const { color } = route.params;

  const [preco, setPreco] = useState("");
  const [desconto, setDesconto] = useState("");
  const [precoFinal, setPrecoFinal] = useState("");
  const [valorDesconto, setValorDesconto] = useState("");

  const calcularDesconto = () => {
    const valorPreco = parseFloat(preco);
    const percentualDesconto = parseFloat(desconto);
    
    if (!isNaN(valorPreco) && !isNaN(percentualDesconto) && valorPreco > 0 && percentualDesconto >= 0) {
      const valorDescontoCalculado = (valorPreco * percentualDesconto) / 100;
      const precoComDesconto = valorPreco - valorDescontoCalculado;
      
      setValorDesconto(valorDescontoCalculado.toFixed(2));
      setPrecoFinal(precoComDesconto.toFixed(2));
    } else {
      setPrecoFinal("Valores inválidos");
      setValorDesconto("");
    }
    setPreco("");
    setDesconto("");
  }

  return (
    <SafeAreaView style={styles.container} >
      <Card style={styles.card}>
        <Card.Content>
          <Title style={[styles.title, { color: color }]}>Calculadora de Desconto</Title>
          <TextInput 
            label='Preço original (R$)' 
            keyboardType='numeric'
            value={preco} 
            onChangeText={setPreco} 
            style={styles.input}
            left={<TextInput.Icon icon="cash" />}
            theme={{ colors: { primary: color } }}
          />
          <TextInput 
            label='Percentual de desconto (%)' 
            keyboardType='numeric'
            value={desconto} 
            onChangeText={setDesconto} 
            style={styles.input}
            left={<TextInput.Icon icon="percent" />}
            theme={{ colors: { primary: color } }}
          />
          <Button 
            onPress={calcularDesconto} 
            mode="contained" 
            style={[styles.button, { backgroundColor: color }]} 
            icon="sale"
          >
            Calcular Desconto
          </Button>
          {valorDesconto ? (
            <Paragraph style={styles.discount}>
              Valor do desconto: R$ {valorDesconto}
            </Paragraph>
          ) : null}
          {precoFinal ? (
            <Text style={styles.result}>
              Preço final: R$ {precoFinal}
            </Text>
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
      discount: {
        fontSize: 18,
        textAlign: 'center',
        color: '#28a745',
      },
      result: {
        fontSize: 20,
        textAlign: 'center',
        fontWeight: 'bold',
        color: '#333'
      },
      backButton: {
        marginTop: 20,
      }
});