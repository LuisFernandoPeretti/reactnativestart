import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';

import MeuComponente from './MeuComponente';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Olá marcella</Text>
      <StatusBar style="light" />
      <ScrollView>
        <MeuComponente />
        <MeuComponente />
        <MeuComponente />
        <MeuComponente />
        <MeuComponente />
        <MeuComponente />
        <MeuComponente />
        <MeuComponente />
        <MeuComponente />
        <MeuComponente />
        <MeuComponente />
        <MeuComponente />
      </ScrollView>

    </View>
  );
} 

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2A2A2A',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 50
  },
  title: {
    color: '#fff',
    fontSize: 24,
    marginBottom: 24
  }
});
