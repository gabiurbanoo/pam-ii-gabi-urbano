import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.logo}>
        <Text style={styles.logoTexto}>NSA</Text>
      </View>
<ScrollView contentContainerStyle={styles.scroll}>
    <View style={styles.container2}>
          <Text style={styles.materia}>PROGRAMAÇÃO WEB</Text>
            <Text style={styles.info}>1°BI: MB   2°BI: B    3°BI: MB   4°BI: R   </Text>
             <Text style={styles.info}>Freq. Total:89.9%</Text>
        </View>
    <View style={styles.container2}>
          <Text style={styles.materia}>DESIGN DIGITAL</Text>
          <Text style={styles.info}>1°BI: MB   2°BI: MB    3°BI: MB   4°BI: MB   </Text>
          <Text style={styles.info}>Freq. Total:100%</Text>
        </View>
    <View style={styles.container2}>
          <Text style={styles.materia}>ANALISE E PROJETO DE SISTEMAS</Text>
          <Text style={styles.info}>1°BI: B   2°BI: R    3°BI: I   4°BI: R   </Text>
          <Text style={styles.info}>Freq. Total:75.9%</Text>
        </View>
    <View style={styles.container2}>
          <Text style={styles.materia}>TÉCNICAS DE PROGRAMAÇÃO E ALGORITMO</Text>
          <Text style={styles.info}>1°BI: MB   2°BI: MB    3°BI: MB   4°BI: R   </Text>
          <Text style={styles.info}>Freq. Total:95%</Text>
        </View>
    <View style={styles.container2}>
          <Text style={styles.materia}>FUNDAMENTOS DA INFORMÁTICA</Text>
          <Text style={styles.info}>1°BI: MB   2°BI: MB    3°BI: MB   4°BI: MB   </Text>
          <Text style={styles.info}>Freq. Total:100%</Text>
        </View>
    
    <View style={styles.total}>
          <Text style={styles.materia}>TOTAL:</Text>
           <Text style={styles.info}>Aulas:520    Faltas:57   Limite:130   </Text>
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
  container2: {
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
    borderColor: '#black',
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
  scroll: {
    width: '100%',
    paddingBottom: 70,
    alignItems: 'center',
  },
});