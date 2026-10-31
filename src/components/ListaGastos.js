import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ItemGasto from './ItemGasto';
import colors from '../styles/colors';

export default function ListaGastos({ gastos, onEliminar }) {
  return (
    <View style={styles.contenedor}>
      <Text style={styles.titulo}>Historial</Text>

      {gastos.length === 0 ? (
        <View style={styles.vacio}>
          <Text style={styles.vacioCabecera}>Sin gastos registrados</Text>
          <Text style={styles.vacioDetalle}>Agregá tu primer gasto usando el formulario de arriba.</Text>
        </View>
      ) : (
        gastos.map((gasto) => (
          <ItemGasto key={gasto.id} gasto={gasto} onEliminar={onEliminar} />
        ))
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  contenedor: {
    marginBottom: 30,
  },
  titulo: {
    color: colors.textSecondary,
    fontSize: 13,
    fontWeight: '700',
    textTransform: 'uppercase',
    letterSpacing: 1,
    marginBottom: 12,
  },
  vacio: {
    backgroundColor: colors.cardDark,
    borderRadius: 14,
    padding: 30,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: colors.border,
  },
  vacioCabecera: {
    color: colors.textSecondary,
    fontSize: 15,
    fontWeight: '600',
    marginBottom: 6,
  },
  vacioDetalle: {
    color: colors.textMuted,
    fontSize: 13,
    textAlign: 'center',
    lineHeight: 20,
  },
});
