import React from "react";
import { View, Text, StyleSheet, ScrollView } from 'react-native'

export default function MeuComponente() {
    return (
        <View style={styles.card}>
        <Text style={styles.cardTitle}>
          Titulo
        </Text>
        <Text style={styles.cardSubtitle}>
          Subtitulo
        </Text>
      </View>
    )
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#FFF',
    padding: 12,
    borderRadius: 3,
    marginVertical: 12
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold'
  },
  cardSubtitle: {
    color: '#999',
    fontSize: 14
  }
});