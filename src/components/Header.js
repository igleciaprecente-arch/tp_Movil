import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import colors from '../styles/colors';

export default function Header() {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>💰 Mis Gastos</Text>
      <Text style={styles.subtitulo}>Registrá y controlá tus gastos diarios</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingBottom: 16,
    borderBottomWidth: 1,
    borderColor: colors.border,
  },
  titulo: {
    color: colors.textPrimary,
    fontSize: 22,
    fontWeight: '700',
  },
  subtitulo: {
    color: colors.textMuted,
    fontSize: 13,
    marginTop: 3,
  },
});
