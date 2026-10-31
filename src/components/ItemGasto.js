import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import colors from '../styles/colors';

export default function ItemGasto({ gasto, onEliminar }) {
  return (
    <View style={styles.contenedor}>
      <View style={styles.info}>
        <Text style={styles.descripcion}>{gasto.descripcion}</Text>
        <Text style={styles.meta}>
          {gasto.categoria} · ${gasto.monto.toLocaleString('es-AR')}
        </Text>
      </View>

      <TouchableOpacity
        style={styles.botonEliminar}
        onPress={() => onEliminar(gasto.id)}
        activeOpacity={0.7}
      >
        <Text style={styles.textoEliminar}>Eliminar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  contenedor: {
    backgroundColor: colors.cardMid,
    borderRadius: 12,
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderWidth: 1,
    borderColor: colors.borderLight,
    marginBottom: 10,
  },
  info: {
    flex: 1,
    paddingRight: 12,
  },
  descripcion: {
    color: colors.textPrimary,
    fontSize: 15,
    fontWeight: '600',
  },
  meta: {
    color: colors.textMuted,
    fontSize: 12,
    marginTop: 4,
  },
  botonEliminar: {
    backgroundColor: colors.redBg,
    borderWidth: 1,
    borderColor: colors.redBorder,
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 8,
  },
  textoEliminar: {
    color: colors.red,
    fontSize: 12,
    fontWeight: '600',
  },
});
