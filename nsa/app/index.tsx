import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Image } from 'react-native';
import { useRouter } from 'expo-router';

export default function HomeScreen() {
  const router = useRouter(); // Usa o router do Expo Router

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.logo}>
          <Text style={styles.logotext}>NSA</Text>
        </View>

        <Text style={styles.inst}>DADOS DA HABILITAÇÃO SELECIONADA</Text>
        <br></br>
        <View style={styles.box}>
          <Text style={styles.info}>Ensino Médio com Hab. em Desenvolvimento de Sistemas</Text>
        </View>

        <Text style={styles.inst}>DADOS DA CLASSE SELECIONADA</Text>
        <br></br>
        <View style={styles.box}>
          <Text style={styles.info}>{'Nome: João Siles Lindo\nRM: 230194 \nSemestre/Ano: 2023 \nMódulo/Série atual: 1° Série \nTurma: A'}</Text>
        </View>

  

        <Text style={styles.inst}>MENU DE OPÇÕES</Text>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={() => router.push('/frequencia')}>
            <Image source={require('./frequencia.png')} style={styles.icon}/><Text style={styles.buttonText}>Frequência</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button} onPress={() => router.push('/horarios')}>
          <Image source={require('./relogio.png')} style={styles.icon}/><Text style={styles.buttonText}>Horários de aula</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button} onPress={() => router.push('/boletim')}>
          <Image source={require('./boletim.png')} style={styles.icon}/><Text style={styles.buttonText}>Boletim</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button} onPress={() => router.push('/mensagens')}>
          <Image source={require('./mensagem.png')} style={styles.icon}/><Text style={styles.buttonText}>Mensagens</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>

      <View style={styles.footer}>
        <Text style={styles.fim}>Sistema NSA</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  scrollContainer: {
    width: '100%',
    paddingBottom: 70,
    alignItems: 'center',
  },
  logo: {
    backgroundColor: 'black',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  logotext: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
  },
  box: {
    backgroundColor: '#fff',
    padding: 10,
    marginBottom: 20,
    borderWidth: 2,
    borderColor: 'black',
    borderRadius: 10,
    width: '85%',
  },
  info: {
    color: '#000000',
    fontSize: 16,
  },
  inst: {
    color: '#000000',
    fontSize: 14,
    fontWeight: 'bold',
  },
  buttonContainer: {
    width: '100%',
    alignItems: 'center',
  },
  button: {
    backgroundColor: 'black',
    padding: 15,
    width: '70%',
    alignItems: 'center',
    borderRadius: 8,
    marginVertical: 5,
    flexDirection: 'row',  // Adiciona layout flexível
  justifyContent: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  footer: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    backgroundColor: 'black',
    padding: 10,
    alignItems: 'center',
  },
  fim: {
    color: '#fff',
    fontSize: 14,
  },
  icon: {
    width: 25,
    height: 25,
    position: 'relative',
    right: 10
  }
});
