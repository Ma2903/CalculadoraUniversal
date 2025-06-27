import { StyleSheet, View } from 'react-native';
import React, {useState} from 'react';
import {Button, TextInput, Text, Title, Card} from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Exercicio1_MetrosParaCentimetros({ navigation, route }) {
  const { color } = route.params;

  const [metros, setMetros] = useState("");
  const [centimetros, setCentimetros] = useState("");

  const converter = () => {
    const valorMetros = parseFloat(metros);
    if (!isNaN(valorMetros)) {
      setCentimetros((valorMetros * 100).toString());
    } else {
      setCentimetros("Valor inválido");
    }
    setMetros("");
  }

  return (
    <SafeAreaView style={styles.container} >
      <Card style={styles.card}>
        <Card.Content>
          <Title style={[styles.title, { color: color }]}>Conversor de Medidas</Title>
          <TextInput 
            label='Valor em metros (m)' 
            keyboardType='numeric'
            value={metros} 
            onChangeText={setMetros} 
            style={styles.input}
            left={<TextInput.Icon icon="ruler" />}
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
          {centimetros ? (
            <Text style={styles.result}>
              Resultado: {centimetros} cm
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