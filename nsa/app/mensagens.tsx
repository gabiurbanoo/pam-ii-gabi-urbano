import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function HomeScreen() {
  return (
<View style={styles.container}>
      <View style={styles.logo}>
        <Text style={styles.logoTexto}>NSA</Text>
      </View>
    
    <Text style={styles.inst}>Nenhuma mensagem.</Text>
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
    inst: {
        color: '#000000',
        fontSize: 14,
        fontWeight: 'bold',
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
        color: '#fff',
        fontSize: 14,
      }
    });
