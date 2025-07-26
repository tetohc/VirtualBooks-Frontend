# 🌐 Frontend - Leyendas Costarricenses

Aplicación web sobre libro virtual de leyendas costarricenses, construida con **Vue.js 3**, utilizando **Vuetify** como biblioteca de componentes, **Vue Router** para navegación entre pantallas, **Pinia** para gestión de estado y Vee-Validate para validaciones reactivas. 
Consume el API [Backend Leyendas Costarricenses](https://github.com/tetohc/VirtualBooks-Backend) desarrollado con Python y FastApi.
---

## 🧰 Tecnologías Utilizadas

| Tecnología              | Descripción                                                                 |
|-------------------------|------------------------------------------------------------------------------|
| Vue 3 + Composition API | Framework para desarrollo frontend  |
| Vuetify 3               | Biblioteca de componentes UI basada en Material Design para Vue             |
| Vue Router 4            | Librería para manejo de rutas y navegación entre vistas                     |
| Pinia                   | Librería para gestión de estado                    |
| Vee-Validate            | Librería para validaciones reactivas de formularios en Vue                  |
| Vite                    | Herramienta de build            |

---

## 📦 Estructura de Pantallas

La aplicación se divide en las siguientes vistas:

- 🏠 **Inicio**: Pantalla principal con introducción al proyecto y navegación a inicio de sesión.  
- 🔐 **Login**: Pantallas para autenticación de usuarios con validación incluida.  
- 📖 **Gestión de Libros**: Panel de control para agregar, editar o eliminar libros de leyendas existentes. También muestra todas las leyendas (libros virtuales) disponibles. 
- 🔍 **Búsqueda**: Permite filtrar y buscar leyendas por texto y fecha.  
-  ➕ **Agregar Libro**: Formulario para añadir nuevas leyendas al sistema (con validación vía Vee-Validate). 
- ✏️ **Editar Libro**: Pantalla para modificar el contenido de una leyenda existente.  
- 📄 **Detalle de Libro**: Información completa de cada leyenda, con imagen, historia y datos relevantes.  

---

## 🧪 Vistas de la Aplicación

### 🏠  Pantalla de Inicio
![Login](https://raw.githubusercontent.com/tetohc/MediaResources/refs/heads/main/images/covers/vitual-books/home_page.png)

### 🔐 Inicio de Sesión
![Dashboard](https://raw.githubusercontent.com/tetohc/MediaResources/refs/heads/main/images/covers/vitual-books/login.png)

### 📖 Gestión de Libros
![Books](https://raw.githubusercontent.com/tetohc/MediaResources/refs/heads/main/images/covers/vitual-books/legends.png)

### 🔍 Búsqueda
![Books](https://raw.githubusercontent.com/tetohc/MediaResources/refs/heads/main/images/covers/vitual-books/search.png)

### 📝 Pantalla para Registrar un Libro
![Books](https://raw.githubusercontent.com/tetohc/MediaResources/refs/heads/main/images/covers/vitual-books/create.png)

### 📄 Pantalla de Detalle
![Books](https://raw.githubusercontent.com/tetohc/MediaResources/refs/heads/main/images/covers/vitual-books/detail.png)

### 📝 Pantalla para Actualizar un Libro
![Books](https://raw.githubusercontent.com/tetohc/MediaResources/refs/heads/main/images/covers/vitual-books/update.png)


## 📦 Instalación y configuración

### Requisitos previos

Asegúrate de tener instalado [Node.js](https://nodejs.org/) y [Yarn](https://classic.yarnpkg.com/en/docs) en tu máquina.

### 📥 Clona el repositorio
```bash
git clone https://github.com/tetohc/VirtualBooks-Frontend.git
cd VirtualBooks-Frontend
```

### 📦 Instala las dependencias
```
yarn install
```

## 🔗 Comunicación con el backend

Asegúrate de que el proyecto [Backend Leyendas Costarricenses](https://github.com/tetohc/VirtualBooks-Backend) esté ejecutándose correctamente para que el frontend funcione.

## ▶️Ejecutar el proyecto

Para ejecutar el proyecto, usa el siguiente comando:

```bash
---
