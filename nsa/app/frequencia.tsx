import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.logo}>
        <Text style={styles.logoTexto}>NSA</Text>
      </View>
      
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.box}>
          <Text style={styles.materia}>PROGRAMAÇÃO WEB</Text>
          <Text style={styles.info}>CH:80   Aulas:10    Faltas:0   Limite:20   </Text>
          <Text style={styles.info}>Freq. Atual:100%    Freq. Total:100%    </Text>
        </View>

        <View style={styles.box}>
          <Text style={styles.materia}>DESIGN DIGITAL</Text>
          <Text style={styles.info}>CH:80   Aulas:10    Faltas:0   Limite:20   </Text>
          <Text style={styles.info}>Freq. Atual:100%    Freq. Total:100%    </Text>
        </View>

        <View style={styles.box}>
          <Text style={styles.materia}>ANALISE E PROJETO DE SISTEMAS</Text>
          <Text style={styles.info}>CH:80   Aulas:10    Faltas:0   Limite:20   </Text>
          <Text style={styles.info}>Freq. Atual:100%    Freq. Total:100%    </Text>
        </View>

        <View style={styles.box}>
          <Text style={styles.materia}>TÉCNICAS DE PROGRAMAÇÃO E ALGORITMO</Text>
          <Text style={styles.info}>CH:120   Aulas:15    Faltas:0   Limite:30   </Text>
          <Text style={styles.info}>Freq. Atual:100%    Freq. Total:100%    </Text>
        </View>

        <View style={styles.box}>
          <Text style={styles.materia}>QUALIDADE E TESTE DE SOFTWARE</Text>
          <Text style={styles.info}>CH:80   Aulas:10    Faltas:0   Limite:20   </Text>
          <Text style={styles.info}>Freq. Atual:100%    Freq. Total:100%    </Text>
        </View>

        <View style={styles.box}>
          <Text style={styles.materia}>FUNDAMENTOS DA INFORMÁTICA</Text>
          <Text style={styles.info}>CH:80   Aulas:10    Faltas:0   Limite:20   </Text>
          <Text style={styles.info}>Freq. Atual100%:    Freq. Total:100%    </Text>
        </View>

        <View style={styles.total}>
          <Text style={styles.materia}>TOTAL:</Text>
          <Text style={styles.info}>Aulas:520    Faltas:0   Limite:130   </Text>
          <Text style={styles.info}>Freq. Atual:100%    Freq. Total:100%    </Text>
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
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  logo: {
    backgroundColor: 'black',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  logoTexto: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'left',
  },
  box: {
    backgroundColor: '#fff',
    padding: 10,
    marginBottom: 10,
    borderWidth: 2,
    borderColor: '#D9DCD6',
    borderRadius: 10,
    width: '85%',
  },
  total: {
    backgroundColor: '#fff',
    padding: 10,
    marginBottom: 10,
    borderWidth: 3,
    borderColor: 'black',
    borderRadius: 10,
    width: '85%',
  },
  materia: {
    color: '#000',
    fontWeight: 'bold',
    fontSize: 16,
  },
  info: {
    color: '#000000',
    fontSize: 14,
  },
  scrollContainer: {
    width: '100%',
    paddingBottom: 70,
    alignItems: 'center',
  },
  footer: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    backgroundColor: '#16425B',
    padding: 10,
    alignItems: 'center',
  },
  fim: {
    color: 'black',
    fontSize: 14,
  }
});
