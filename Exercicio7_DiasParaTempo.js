import { StyleSheet } from 'react-native';
import React, {useState} from 'react';
import {Button, TextInput, Text, Title, Card, Divider} from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Exercicio7_DiasParaTempo({ navigation, route }) {
  const { color } = route.params;

  const [dias, setDias] = useState("");
  const [horas, setHoras] = useState("");
  const [minutos, setMinutos] = useState("");
  const [segundos, setSegundos] = useState("");

  const converterTempo = () => {
    const valorDias = parseFloat(dias);
    
    if (!isNaN(valorDias) && valorDias >= 0) {
      const totalHoras = valorDias * 24;
      const totalMinutos = totalHoras * 60;
      const totalSegundos = totalMinutos * 60;
      
      setHoras(totalHoras.toFixed(0));
      setMinutos(totalMinutos.toFixed(0));
      setSegundos(totalSegundos.toFixed(0));
    } else {
      setHoras("Valor inválido");
      setMinutos("");
      setSegundos("");
    }
    setDias("");
  }

  return (
    <SafeAreaView style={styles.container} >
      <Card style={styles.card}>
        <Card.Content>
          <Title style={[styles.title, { color: color }]}>Conversor de Dias para Tempo</Title>
          <TextInput 
            label='Número de dias' 
            keyboardType='numeric'
            value={dias} 
            onChangeText={setDias} 
            style={styles.input}
            left={<TextInput.Icon icon="calendar-range" />}
            theme={{ colors: { primary: color } }}
          />
          <Button 
            onPress={converterTempo} 
            mode="contained" 
            style={[styles.button, { backgroundColor: color }]} 
            icon="clock-fast"
          >
            Converter
          </Button>

          {horas && (
            <>
              <Divider style={styles.divider} />
              <Text style={styles.result}>Horas: {horas}</Text>
              <Text style={styles.result}>Minutos: {minutos}</Text>
              <Text style={styles.result}>Segundos: {segundos}</Text>
            </>
          )}
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
      divider: {
        marginBottom: 15,
        height: 2
      },
      result: {
        fontSize: 18,
        textAlign: 'center',
        fontWeight: '500',
        color: '#333',
        marginBottom: 8,
      },
      backButton: {
        marginTop: 20,
      }
});