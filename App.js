import React, { useState } from 'react';
import { StyleSheet, View, ScrollView, Alert } from 'react-native';
import { StatusBar } from 'expo-status-bar';

import colors from './src/styles/colors';
import Header            from './src/components/Header';
import Dashboard         from './src/components/Dashboard';
import FormularioGasto   from './src/components/FormularioGasto';
import FiltrosCategorias from './src/components/FiltrosCategorias';
import ListaGastos       from './src/components/ListaGastos';

export default function App() {

  const [gastos, setGastos] = useState([
    { id: '1', descripcion: 'Supermercado', monto: 15000, categoria: 'Alimentación' },
    { id: '2', descripcion: 'Nafta',        monto: 20000, categoria: 'Transporte'   },
    { id: '3', descripcion: 'Café',         monto: 3500,  categoria: 'Alimentación' },
  ]);

  const [descripcion,           setDescripcion]           = useState('');
  const [monto,                 setMonto]                 = useState('');
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState('Alimentación');
  const [filtroCategoria,       setFiltroCategoria]       = useState('Todos');

  const handleAgregar = () => {
    if (descripcion.trim() === '' || monto.trim() === '') {
      Alert.alert('Campos incompletos', 'Por favor completá la descripción y el monto.');
      return;
    }
    const montoNumerico = parseFloat(monto);
    if (isNaN(montoNumerico) || montoNumerico <= 0) {
      Alert.alert('Monto inválido', 'Ingresá un número mayor a cero.');
      return;
    }
    const nuevoGasto = {
      id:          Date.now().toString(),
      descripcion: descripcion.trim(),
      monto:       montoNumerico,
      categoria:   categoriaSeleccionada,
    };
    setGastos([...gastos, nuevoGasto]);
    setDescripcion('');
    setMonto('');
  };

  const handleEliminar = (id) => {
    setGastos(gastos.filter(g => g.id !== id));
  };

  const totalGastado    = gastos.reduce((acc, g) => acc + g.monto, 0);
  const gastoMasAlto    = gastos.length > 0 ? Math.max(...gastos.map(g => g.monto)) : 0;
  const gastosFiltrados = filtroCategoria === 'Todos'
    ? gastos
    : gastos.filter(g => g.categoria === filtroCategoria);

  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <Header />
      <ScrollView contentContainerStyle={styles.scroll} showsVerticalScrollIndicator={false}>
        <Dashboard
          totalGastado={totalGastado}
          gastoMasAlto={gastoMasAlto}
          cantidadGastos={gastos.length}
        />
        <FormularioGasto
          descripcion={descripcion}
          monto={monto}
          categoriaSeleccionada={categoriaSeleccionada}
          onChangeDescripcion={setDescripcion}
          onChangeMonto={setMonto}
          onSeleccionarCategoria={setCategoriaSeleccionada}
          onAgregar={handleAgregar}
        />
        <FiltrosCategorias
          filtroActivo={filtroCategoria}
          onCambiarFiltro={setFiltroCategoria}
        />
        <ListaGastos
          gastos={gastosFiltrados}
          onEliminar={handleEliminar}
        />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    paddingTop: 50,
  },
  scroll: {
    padding: 20,
    paddingBottom: 40,
  },
});
