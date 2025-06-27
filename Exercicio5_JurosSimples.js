import { StyleSheet } from 'react-native';
import React, {useState} from 'react';
import {Button, TextInput, Text, Title, Card, Paragraph} from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Exercicio5_JurosSimples({ navigation, route }) {
  const { color } = route.params;

  const [capital, setCapital] = useState("");
  const [taxa, setTaxa] = useState("");
  const [periodo, setPeriodo] = useState("");
  const [juros, setJuros] = useState("");
  const [montante, setMontante] = useState("");

  const calcularJurosSimples = () => {
    const valorCapital = parseFloat(capital);
    const valorTaxa = parseFloat(taxa);
    const valorPeriodo = parseFloat(periodo);
    
    if (!isNaN(valorCapital) && !isNaN(valorTaxa) && !isNaN(valorPeriodo) && 
        valorCapital > 0 && valorTaxa > 0 && valorPeriodo > 0) {
      
      const taxaDecimal = valorTaxa / 100;
      const jurosCalculados = valorCapital * taxaDecimal * valorPeriodo;
      const montanteCalculado = valorCapital + jurosCalculados;
      
      setJuros(jurosCalculados.toFixed(2));
      setMontante(montanteCalculado.toFixed(2));
    } else {
      setJuros("Valores inválidos");
      setMontante("");
    }
    setCapital("");
    setTaxa("");
    setPeriodo("");
  }

  return (
    <SafeAreaView style={styles.container} >
      <Card style={styles.card}>
        <Card.Content>
          <Title style={[styles.title, { color: color }]}>Calculadora de Juros Simples</Title>
          <TextInput 
            label='Capital inicial (R$)' 
            keyboardType='numeric'
            value={capital} 
            onChangeText={setCapital} 
            style={styles.input}
            left={<TextInput.Icon icon="cash" />}
            theme={{ colors: { primary: color } }}
          />
          <TextInput 
            label='Taxa de juros (% ao período)' 
            keyboardType='numeric'
            value={taxa} 
            onChangeText={setTaxa} 
            style={styles.input}
            left={<TextInput.Icon icon="percent" />}
            theme={{ colors: { primary: color } }}
          />
          <TextInput 
            label='Período (tempo)' 
            keyboardType='numeric'
            value={periodo} 
            onChangeText={setPeriodo} 
            style={styles.input}
            left={<TextInput.Icon icon="clock-outline" />}
            theme={{ colors: { primary: color } }}
          />
          <Button 
            onPress={calcularJurosSimples} 
            mode="contained" 
            style={[styles.button, { backgroundColor: color }]} 
            icon="chart-line"
          >
            Calcular Juros Simples
          </Button>
          {juros ? (
            <Paragraph style={[styles.interest, { color: color }]}>
              Juros: R$ {juros}
            </Paragraph>
          ) : null}
          {montante ? (
            <Text style={styles.result}>
              Montante total: R$ {montante}
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
      interest: {
        fontSize: 18,
        textAlign: 'center',
      },
      result: {
        fontSize: 20,
        textAlign: 'center',
        fontWeight: 'bold',
        color: '#28a745'
      },
      backButton: {
        marginTop: 20,
      }
});