import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import colors from '../styles/colors';

export default function Dashboard({ totalGastado, gastoMasAlto, cantidadGastos }) {
  return (
    <View style={styles.container}>
      <View style={styles.tarjetaTotal}>
        <Text style={styles.label}>Total gastado</Text>
        <Text style={styles.valorTotal}>${totalGastado.toLocaleString('es-AR')}</Text>
      </View>

      <View style={styles.fila}>
        <View style={styles.miniTarjeta}>
          <Text style={styles.miniLabel}>Gasto más alto</Text>
          <Text style={styles.miniValor}>${gastoMasAlto.toLocaleString('es-AR')}</Text>
        </View>
        <View style={styles.miniTarjeta}>
          <Text style={styles.miniLabel}>Transacciones</Text>
          <Text style={styles.miniValor}>{cantidadGastos}</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: 10,
    marginBottom: 20,
  },
  tarjetaTotal: {
    backgroundColor: colors.cardMid,
    borderRadius: 14,
    padding: 20,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: colors.borderLight,
  },
  label: {
    color: colors.textSecondary,
    fontSize: 12,
    fontWeight: '600',
    textTransform: 'uppercase',
    letterSpacing: 1,
  },
  valorTotal: {
    color: colors.textPrimary,
    fontSize: 34,
    fontWeight: '800',
    marginTop: 6,
  },
  fila: {
    flexDirection: 'row',
    gap: 10,
  },
  miniTarjeta: {
    flex: 1,
    backgroundColor: colors.cardLight,
    borderRadius: 12,
    padding: 14,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: colors.border,
  },
  miniLabel: {
    color: colors.textMuted,
    fontSize: 11,
    fontWeight: '600',
    textTransform: 'uppercase',
  },
  miniValor: {
    color: colors.textSecondary,
    fontSize: 16,
    fontWeight: '700',
    marginTop: 4,
  },
});
