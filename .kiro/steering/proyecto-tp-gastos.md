---
inclusion: manual
name: proyecto-tp-gastos
description: Contexto completo del Trabajo Práctico Gestor de Gastos Personales en React Native + Expo
---

# Proyecto: Gestor de Gastos Personales
**Tecnología:** React Native + Expo (TypeScript)  
**Estilo visual:** Dark Mode minimalista, acento teal `#14b8a6`

---

## Estructura de carpetas

```
tp movil/
├── App.tsx                         ← Punto de entrada. Solo estado, lógica y render.
└── src/
    ├── types/
    │   └── index.ts                ← Interface Gasto + array CATEGORIAS
    ├── styles/
    │   └── colors.ts               ← Paleta de colores centralizada
    └── components/
        ├── Header.tsx              ← Título y subtítulo de la app
        ├── Dashboard.tsx           ← Tarjetas: total, gasto más alto, cantidad
        ├── FormularioGasto.tsx     ← Inputs + selector de categoría + botón agregar
        ├── FiltrosCategorias.tsx   ← Chips horizontales para filtrar el historial
        ├── ListaGastos.tsx         ← Contenedor del historial (o estado vacío)
        └── ItemGasto.tsx           ← Una fila individual de gasto + botón eliminar
```

---

## Tipos (`src/types/index.ts`)

```ts
interface Gasto {
  id: string;          // Date.now().toString()
  descripcion: string;
  monto: number;
  categoria: string;
}

const CATEGORIAS = ['Alimentación', 'Transporte', 'Entretenimiento', 'Salud', 'Otros'];
```

---

## Colores (`src/styles/colors.ts`)

| Token | Hex | Uso |
|---|---|---|
| `background` | `#0b0f19` | Fondo de la app |
| `cardDark` | `#111625` | Formulario, estado vacío |
| `cardMid` | `#1e2538` | Items de gasto, inputs |
| `cardLight` | `#161b2b` | Mini tarjetas del dashboard |
| `border` | `#1e293b` | Bordes sutiles |
| `borderLight` | `#2d3748` | Bordes de items |
| `textPrimary` | `#f8fafc` | Títulos y valores importantes |
| `textSecondary` | `#94a3b8` | Labels y metadata |
| `textMuted` | `#64748b` | Placeholders y textos inactivos |
| `teal` | `#14b8a6` | Botón primario, categoría activa |
| `red` | `#ef4444` | Botón eliminar |

---

## Estado en `App.tsx`

| Variable | Tipo | Propósito |
|---|---|---|
| `gastos` | `Gasto[]` | Lista completa de gastos |
| `descripcion` | `string` | TextInput descripción |
| `monto` | `string` | TextInput monto (se parsea al guardar) |
| `categoriaSeleccionada` | `string` | Categoría elegida en el formulario |
| `filtroCategoria` | `string` | Filtro activo en el historial (`'Todos'` = sin filtro) |

---

## Funciones en `App.tsx`

### `handleAgregar()`
1. Valida que `descripcion` y `monto` no estén vacíos → `Alert`
2. Parsea `monto` con `parseFloat`, valida que sea > 0 → `Alert`
3. Crea un `Gasto` nuevo y lo agrega: `setGastos([...gastos, nuevoGasto])`
4. Limpia los campos del formulario

### `handleEliminar(id)`
- Filtra el array: `setGastos(gastos.filter(g => g.id !== id))`

### Cálculos derivados (no son estado)
```ts
const totalGastado    = gastos.reduce((acc, g) => acc + g.monto, 0);
const gastoMasAlto    = gastos.length > 0 ? Math.max(...gastos.map(g => g.monto)) : 0;
const gastosFiltrados = filtroCategoria === 'Todos'
  ? gastos
  : gastos.filter(g => g.categoria === filtroCategoria);
```

---

## Componentes

### `Header`
Sin props. Solo muestra el título y el subtítulo.

### `Dashboard`
| Prop | Tipo | Descripción |
|---|---|---|
| `totalGastado` | `number` | Suma de todos los gastos |
| `gastoMasAlto` | `number` | El monto más alto registrado |
| `cantidadGastos` | `number` | Cantidad de gastos en la lista |

### `FormularioGasto`
Recibe los valores de los inputs y callbacks para actualizarlos. El botón llama a `onAgregar`.

### `FiltrosCategorias`
| Prop | Tipo | Descripción |
|---|---|---|
| `filtroActivo` | `string` | Categoría seleccionada actualmente |
| `onCambiarFiltro` | `(cat: string) => void` | Actualiza el filtro |

### `ListaGastos`
| Prop | Tipo | Descripción |
|---|---|---|
| `gastos` | `Gasto[]` | Lista ya filtrada que viene de `App.tsx` |
| `onEliminar` | `(id: string) => void` | Pasa al `ItemGasto` |

### `ItemGasto`
| Prop | Tipo | Descripción |
|---|---|---|
| `gasto` | `Gasto` | El objeto gasto a mostrar |
| `onEliminar` | `(id: string) => void` | Dispara la eliminación |

---

## Conceptos del TP cubiertos

| Concepto | Dónde |
|---|---|
| `useState` | `App.tsx` — 5 estados |
| `TextInput` | `FormularioGasto.tsx` — descripción y monto numérico |
| `map()` | `FormularioGasto`, `FiltrosCategorias`, `ListaGastos` |
| Condicionales | Validación en `handleAgregar`, estado vacío en `ListaGastos`, estilos activos |
| Eventos | `onPress`, `onChangeText` en todos los componentes interactivos |
| Arrays y Objetos | Interface `Gasto`, spread, filter, reduce, Math.max |
| Filtrado | `gastosFiltrados` calculado dinámicamente por `filtroCategoria` |
| Cálculos | `totalGastado` con `reduce`, `gastoMasAlto` con `Math.max` |

---

## Notas importantes
- Sin persistencia: los datos se pierden al cerrar la app (no usa `AsyncStorage`).
- Sin navegación: todo está en una sola pantalla.
- Sin `useEffect` ni `useCallback`: diseño intencional para el scope del TP.
- Los montos usan `.toLocaleString('es-AR')` para formato de pesos argentinos.
- Los IDs se generan con `Date.now().toString()`.
