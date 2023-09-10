# Description Storeonline - Hook Jenkins
Angular v12
Node v16.10.0

# Generar un modulo y routing
  ng g m templates --routing

# Generar un componente con un modulo (Primero se crea el modulo y luego el componente)
  1.- ng g m "ruta/nombreDelModulo"
  2.- ng g c "ruta/nombreDelComponente"

# Generar un servicio
  ng g s ruta/nombreDelServicio

# Generar un guardian
  ng g g ruta/nombreDelGuardian
# Comandos git
  git pull upstream develop
  git status
  git add .
  git add "NombreArchivoSinComillas o rutaSinComillas"
  git commit -m "Mensaje del commit"
  git push upstream develop

# Resolución de Conflictos con Git Stash
  1. `git status`
    Verificar el estado actual del repositorio para identificar los archivos con conflictos.

  2. `git stash save "mensaje"`
    Guardar los cambios sin preparar en un stash temporal para limpiar el directorio de trabajo.

  3. `git pull upstream develop`
    Actualizar la rama local con los cambios remotos antes de resolver conflictos.

  4. `git stash drop`
    Aplicar los cambios guardados del stash al directorio de trabajo.

  5. Resolver los conflictos:
    Editar los archivos con conflictos y eliminar las marcas de conflicto `<<<<<<<`, `=======`, y `>>>>>>>`.

  6. `git add <nombre_archivo>`
    Agregar los archivos resueltos al área de preparación.

  8. `git commit -m "Mensaje del commit"`
    Realizar un nuevo commit para guardar los cambios resueltos en la rama.

# Nota
Recuerden que en el archivo tsconfig.json encontrarán las abreviaciones de los path de las carpetas.
