# 🔍 Giphy Search App ⚡

![React](https://img.shields.io/badge/React-18.2.0-61dafb)
![TypeScript](https://img.shields.io/badge/TypeScript-5.1.6-3178c6)
![Vite](https://img.shields.io/badge/Vite-4.4.6-646cff)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-6.5.1-0055ff)
![License](https://img.shields.io/badge/License-MIT-green)

Una moderna aplicación web de búsqueda de GIFs con interfaz atractiva, almacenamiento de historial y experiencia de usuario mejorada.

![Giphy Search App Preview](https://github.com/user-attachments/assets/8a8bf6d0-2c6b-4301-ba49-5d4d95333ec5)


## ✨ Características

- 🚀 Búsqueda instantánea de GIFs
- 🎨 Interfaz moderna con animaciones fluidas
- 📱 Diseño totalmente responsive
- 💾 Historial de búsquedas con persistencia en localStorage
- 🔄 Carga infinita de resultados
- 🔍 Vista detallada de GIFs en modal
- 📥 Descarga directa de GIFs
- 💖 Marcado de favoritos
- 🌙 Tema oscuro moderno con acentos de color

## 🛠️ Tecnologías Utilizadas

- **React 18**: Biblioteca para construir interfaces de usuario
- **TypeScript**: Tipado estático para JavaScript
- **Vite**: Herramienta de compilación ultrarrápida
- **Framer Motion**: Biblioteca para animaciones fluidas
- **React Icons**: Iconos vectoriales para React
- **CSS3**: Estilos avanzados y animaciones
- **API de Giphy**: Para buscar y mostrar GIFs
- **LocalStorage**: Para persistencia del historial de búsquedas

## 🚀 Instalación y Uso

### Prerrequisitos

- Node.js (v14.0.0 o superior)
- npm o yarn

### Pasos para instalación

1. Clona este repositorio:

   ```bash
   git clone https://github.com/tu-usuario/giphy-search-app.git
   cd giphy-search-app
   ```

2. Instala las dependencias:

   ```bash
   npm install
   # o
   yarn install
   ```

3. Crea un archivo `.env` en la raíz del proyecto con tu API key de Giphy:

   ```
   VITE_API_KEY=tu_api_key_de_giphy
   ```

   Puedes obtener una API key registrándote en [Giphy Developers](https://developers.giphy.com/)

4. Inicia el servidor de desarrollo:

   ```bash
   npm run dev
   # o
   yarn dev
   ```

5. Abre tu navegador en `http://localhost:5173` (o el puerto que indique Vite)

## 📋 Estructura del Proyecto

```
giphy-search-app/
├── src/
│   ├── components/
│   │   ├── AddCategory.tsx     # Componente de búsqueda
│   │   ├── CardSkeleton.tsx    # Componente de carga
│   │   ├── GifSearch.tsx       # Gestor de resultados
│   │   ├── GifSearchItem.tsx   # Item individual de GIF
│   │   ├── Logo.tsx            # Logo de la app
│   │   └── SearchHistory.tsx   # Historial de búsquedas
│   ├── context/
│   │   └── SearchContext.tsx   # Contexto para el historial
│   ├── helpers/
│   │   └── getGifs.ts          # Función para API
│   ├── hooks/
│   │   └── useFetchGifs.ts     # Hook personalizado
│   ├── types/
│   │   └── index.ts            # Definiciones de tipos
│   ├── GiphyApp.tsx            # Componente principal
│   ├── index.css               # Estilos globales
│   └── main.tsx                # Punto de entrada
├── tsconfig.json               # Configuración de TypeScript
├── vite.config.ts              # Configuración de Vite
└── ...
```

## 🧩 Características Principales

### Historial de Búsquedas

- Almacena automáticamente el historial de búsquedas
- Persiste entre sesiones mediante localStorage
- Interfaz desplegable para acceder fácilmente a búsquedas anteriores
- Contador de frecuencia para cada término buscado

### Funcionalidades Adicionales

- Descarga directa de GIFs
- Opción para marcar favoritos
- Compartir GIFs (utilizando Web Share API cuando está disponible)
- Términos de búsqueda sugeridos para usuarios nuevos

## 🏗️ Mejoras Técnicas

- **Migración a TypeScript**: Tipado estático para mayor robustez del código
- **Patrón de Contexto**: Implementación de Context API para gestión de estado global
- **Optimizaciones de Rendimiento**: Lazy loading de imágenes y componentes
- **Infinite Scroll**: Implementación mediante Intersection Observer API
- **Manejo Mejorado de Errores**: Gestión de errores más robusta en peticiones API
