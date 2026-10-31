import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import { CATEGORIAS } from '../constantes/categorias';
import colors from '../styles/colors';

export default function FiltrosCategorias({ filtroActivo, onCambiarFiltro }) {
  return (
    <View style={styles.contenedor}>
      <Text style={styles.titulo}>Filtrar por categoría</Text>

      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <TouchableOpacity
          style={[styles.chip, filtroActivo === 'Todos' && styles.chipActivo]}
          onPress={() => onCambiarFiltro('Todos')}
        >
          <Text style={[styles.chipTexto, filtroActivo === 'Todos' && styles.chipTextoActivo]}>
            Todos
          </Text>
        </TouchableOpacity>

        {CATEGORIAS.map((cat) => (
          <TouchableOpacity
            key={cat}
            style={[styles.chip, filtroActivo === cat && styles.chipActivo]}
            onPress={() => onCambiarFiltro(cat)}
          >
            <Text style={[styles.chipTexto, filtroActivo === cat && styles.chipTextoActivo]}>
              {cat}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  contenedor: {
    marginBottom: 20,
  },
  titulo: {
    color: colors.textMuted,
    fontSize: 12,
    fontWeight: '600',
    textTransform: 'uppercase',
    letterSpacing: 1,
    marginBottom: 10,
  },
  chip: {
    backgroundColor: colors.cardMid,
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    marginRight: 8,
  },
  chipActivo: {
    backgroundColor: '#334155',
  },
  chipTexto: {
    color: colors.textMuted,
    fontSize: 13,
  },
  chipTextoActivo: {
    color: colors.textPrimary,
    fontWeight: '600',
  },
});
