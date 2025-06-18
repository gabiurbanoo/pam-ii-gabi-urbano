import { useLocalSearchParams } from 'expo-router';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { useRouter } from 'expo-router';

export default function ConsultaSolicitacao() {
  const { protocol } = useLocalSearchParams();
  const router = useRouter();

  return (
    <View style={styles.container}>
          <View style={styles.logo}>
            <Text style={styles.logoTexto}>NSA</Text>
          </View>
     <Text style={styles.diaTexto}>Quarta-Feira</Text>
      <ScrollView contentContainerStyle={styles.scroll}>
         <View style={styles.container2}>
    
               <Text style={styles.materia}>PROGRAMAÇÃO WEB</Text>
                 <Text style={styles.info}> </Text>
                  <Text style={styles.info}>João Siles Divo Querido </Text>
             </View>
             <View style={styles.container2}>
               <Text style={styles.materia}>PROGRAMAÇÃO WEB</Text>
                 <Text style={styles.info}> </Text>
                  <Text style={styles.info}>João Siles Divo Querido </Text>
             </View>
         <View style={styles.container2}>
               <Text style={styles.materia}>ANALISE E PROJETO DE SISTEMAS</Text>
                 <Text style={styles.info}> </Text>
                  <Text style={styles.info}>Bruno Cano</Text>
             </View>
             <View style={styles.container2}>
               <Text style={styles.materia}>ANALISE E PROJETO DE SISTEMAS</Text>
                 <Text style={styles.info}> </Text>
                  <Text style={styles.info}>Bruno Cano</Text>
             </View>
         <View style={styles.container2}>
               <Text style={styles.materia}>FUNDAMENTOS DA INFORMÁTICA</Text>
                <Text style={styles.info}> </Text>
                 <Text style={styles.info}>Aleteia Soares </Text>
             </View>
         
             <View style={styles.container2}>
               <Text style={styles.materia}>FUNDAMENTOS DA INFORMÁTICA</Text>
                <Text style={styles.info}> </Text>
                 <Text style={styles.info}>Aleteia Soares </Text>
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
       diaTexto: {
        color: 'black',
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
       boxTotal: {
         backgroundColor: '#fff',
         padding: 10,
         marginBottom: 10,
         borderWidth: 3,
         borderColor: '#81C3D7',
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