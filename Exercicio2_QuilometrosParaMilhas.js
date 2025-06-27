import { StyleSheet } from 'react-native';
import React, {useState} from 'react';
import {Button, TextInput, Text, Title, Card} from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Exercicio2_QuilometrosParaMilhas({ navigation, route }) {
  const { color } = route.params;

  const [quilometros, setQuilometros] = useState("");
  const [milhas, setMilhas] = useState("");

  const converter = () => {
    const valorQuilometros = parseFloat(quilometros);
    if (!isNaN(valorQuilometros)) {
      const resultado = valorQuilometros * 0.621371;
      setMilhas(resultado.toFixed(4));
    } else {
      setMilhas("Valor inválido");
    }
    setQuilometros("");
  }

  return (
    <SafeAreaView style={styles.container} >
      <Card style={styles.card}>
        <Card.Content>
          <Title style={[styles.title, { color: color }]}>Quilômetros para Milhas</Title>
          <TextInput 
            label='Distância em quilômetros (km)' 
            keyboardType='numeric'
            value={quilometros} 
            onChangeText={setQuilometros} 
            style={styles.input}
            left={<TextInput.Icon icon="road-variant" />}
            theme={{ colors: { primary: color } }}
          />
          <Button 
            onPress={converter} 
            mode="contained" 
            style={[styles.button, { backgroundColor: color }]}
            icon="arrow-down-bold-hexagon-outline"
          >
            Converter
          </Button>
          {milhas ? (
            <Text style={styles.result}>
              Resultado: {milhas} milhas
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
      marginBottom: 20,
    },
    button: {
      marginBottom: 20,
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