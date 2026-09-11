# Hillary + Isaiah

Sitio de boda bilingüe construido con React, TypeScript y Vite.

## Desarrollo

```sh
npm ci
npm run dev
```

`npm run build` valida TypeScript y genera el sitio en `dist`.

## Netlify

Importa este repositorio en Netlify. `netlify.toml` define el comando de build,
la carpeta de publicación, Node y el fallback de rutas para la aplicación.

Antes del despliegue, activa la detección de formularios en el panel Forms de
Netlify. Si el sitio ya estaba desplegado, vuelve a desplegar después de activarla.
Comprueba que aparezca el formulario `rsvp` y prueba un envío desde el sitio
publicado. Las notificaciones por correo se configuran en Netlify.

El formulario HTML oculto en `index.html` permite detectar los campos de React.
Mantén ambas definiciones sincronizadas al agregar campos. El envío usa POST
codificado, un campo trampa antispam y estados de envío, éxito y error. Al declinar
no se solicitan asientos; al aceptar menos asientos se exige la cantidad final.
El servidor de desarrollo de Vite no procesa Netlify Forms.

Documentación: https://docs.netlify.com/manage/forms/setup/
