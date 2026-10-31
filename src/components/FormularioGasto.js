import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { CATEGORIAS } from '../constantes/categorias';
import colors from '../styles/colors';

export default function FormularioGasto({
  descripcion,
  monto,
  categoriaSeleccionada,
  onChangeDescripcion,
  onChangeMonto,
  onSeleccionarCategoria,
  onAgregar,
}) {
  return (
    <View style={styles.contenedor}>
      <Text style={styles.titulo}>Nuevo gasto</Text>

      <TextInput
        style={styles.input}
        placeholder="¿En qué gastaste? (ej: Supermercado)"
        placeholderTextColor={colors.textMuted}
        value={descripcion}
        onChangeText={onChangeDescripcion}
      />

      <TextInput
        style={styles.input}
        placeholder="Monto en $ (ej: 5000)"
        placeholderTextColor={colors.textMuted}
        keyboardType="numeric"
        value={monto}
        onChangeText={onChangeMonto}
      />

      <Text style={styles.labelCategoria}>Categoría</Text>
      <View style={styles.filaCategorias}>
        {CATEGORIAS.map((cat) => (
          <TouchableOpacity
            key={cat}
            style={[styles.chip, categoriaSeleccionada === cat && styles.chipActivo]}
            onPress={() => onSeleccionarCategoria(cat)}
          >
            <Text style={[styles.chipTexto, categoriaSeleccionada === cat && styles.chipTextoActivo]}>
              {cat}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      <TouchableOpacity style={styles.boton} onPress={onAgregar} activeOpacity={0.8}>
        <Text style={styles.botonTexto}>+ Agregar gasto</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  contenedor: {
    backgroundColor: colors.cardDark,
    borderRadius: 16,
    padding: 18,
    borderWidth: 1,
    borderColor: colors.border,
    marginBottom: 20,
  },
  titulo: {
    color: colors.textSecondary,
    fontSize: 13,
    fontWeight: '700',
    textTransform: 'uppercase',
    letterSpacing: 1,
    marginBottom: 14,
  },
  input: {
    backgroundColor: colors.cardMid,
    color: colors.textPrimary,
    borderRadius: 10,
    paddingHorizontal: 14,
    paddingVertical: 13,
    fontSize: 15,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: colors.borderLight,
  },
  labelCategoria: {
    color: colors.textMuted,
    fontSize: 12,
    marginBottom: 8,
  },
  filaCategorias: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
    marginBottom: 18,
  },
  chip: {
    backgroundColor: colors.cardMid,
    paddingHorizontal: 13,
    paddingVertical: 7,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: 'transparent',
  },
  chipActivo: {
    backgroundColor: colors.tealBg,
    borderColor: colors.teal,
  },
  chipTexto: {
    color: colors.textMuted,
    fontSize: 13,
  },
  chipTextoActivo: {
    color: colors.teal,
    fontWeight: '600',
  },
  boton: {
    backgroundColor: colors.teal,
    borderRadius: 10,
    paddingVertical: 14,
    alignItems: 'center',
  },
  botonTexto: {
    color: '#0f172a',
    fontSize: 15,
    fontWeight: '700',
  },
});
