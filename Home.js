import { ScrollView, StyleSheet, View } from 'react-native';
import React from 'react';
import { Button, Card, Text, Title, Paragraph, Avatar } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function HomeScreen({ navigation }) {

  const exercicios = [
    {
      id: 'Exercicio1',
      titulo: 'Metros para Centímetros',
      descricao: 'Converte valores de metros para centímetros.',
      screen: 'Exercicio1_MetrosParaCentimetros',
      icon: 'ruler',
      color: '#3F51B5', // Indigo
    },
    {
      id: 'Exercicio2',
      titulo: 'Quilômetros para Milhas',
      descricao: 'Converte uma distância de quilômetros para milhas.',
      screen: 'Exercicio2_QuilometrosParaMilhas',
      icon: 'road-variant',
      color: '#009688', // Teal
    },
    {
      id: 'Exercicio3',
      titulo: 'Calculadora de IMC',
      descricao: 'Calcula o seu Índice de Massa Corporal.',
      screen: 'Exercicio3_CalculoIMC',
      icon: 'calculator-variant',
      color: '#FF5722', // Deep Orange
    },
    {
      id: 'Exercicio4',
      titulo: 'Preço com Desconto',
      descricao: 'Calcula o preço final de um produto com desconto.',
      screen: 'Exercicio4_PrecoComDesconto',
      icon: 'sale',
      color: '#E91E63', // Pink
    },
    {
      id: 'Exercicio5',
      titulo: 'Juros Simples',
      descricao: 'Calculadora de juros simples e montante final.',
      screen: 'Exercicio5_JurosSimples',
      icon: 'chart-line',
      color: '#4CAF50', // Green
    },
    {
      id: 'Exercicio6',
      titulo: 'Juros Compostos',
      descricao: 'Calculadora de juros compostos e montante final.',
      screen: 'Exercicio6_JurosCompostos',
      icon: 'chart-bar',
      color: '#FFC107', // Amber
    },
    {
      id: 'Exercicio7',
      titulo: 'Dias para Tempo',
      descricao: 'Converte dias para horas, minutos e segundos.',
      screen: 'Exercicio7_DiasParaTempo',
      icon: 'clock-time-four-outline',
      color: '#03A9F4', // Light Blue
    }
  ];

  const handleNavigate = (screen, color) => {
    navigation.navigate(screen, { color });
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Title style={styles.title}>Calculadora Universal</Title>
        <Text style={styles.subtitle}>Selecione uma das ferramentas abaixo</Text>
        
        {exercicios.map((exercicio) => (
          <Card 
            key={exercicio.id} 
            style={styles.card} 
            elevation={4} 
            onPress={() => handleNavigate(exercicio.screen, exercicio.color)}
          >
            <View style={styles.cardIconContainer}>
              <Avatar.Icon size={64} icon={exercicio.icon} style={{ backgroundColor: exercicio.color }} />
            </View>
            <Card.Content style={styles.cardContent}>
              <Title style={styles.cardTitle}>{exercicio.titulo}</Title>
              <Paragraph style={styles.cardSubtitle}>{exercicio.descricao}</Paragraph>
            </Card.Content>
            <Card.Actions style={styles.cardActions}>
              <Button 
                mode="contained" 
                onPress={() => handleNavigate(exercicio.screen, exercicio.color)}
                icon="arrow-right-circle"
                style={{backgroundColor: exercicio.color}}
              >
                Acessar
              </Button>
            </Card.Actions>
          </Card>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#f0f2f5',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 10,
    color: '#333',
  },
  subtitle: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 20,
    color: '#555',
  },
  card: {
    marginVertical: 8,
    marginHorizontal: 5,
    backgroundColor: '#fff',
    borderRadius: 12,
    overflow: 'hidden',
  },
  cardIconContainer: {
    alignItems: 'center',
    paddingTop: 20,
  },
  cardContent: {
    alignItems: 'center',
    paddingVertical: 10,
  },
  cardTitle: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 18,
    color: '#333',
  },
  cardSubtitle: {
    textAlign: 'center',
    fontSize: 14,
    color: '#666',
    marginTop: 4,
  },
  cardActions: {
    justifyContent: 'center',
    paddingBottom: 15,
  }
});