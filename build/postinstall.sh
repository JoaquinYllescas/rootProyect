#!/bin/bash

# Antes de ejecutar este archivo, nos aseguramos de que 
# - Ejecutamos este archivo con "./postinstall.sh" directamente. SI nos dice "no permitido", aplicamos "chmod +x /path/to/yourscript.sh"


bower install

#Si no estan creadas estas carpetas se crearan automticamente al ejecutar este archivo:
if [ ! -d "../dist/css" ]; then
	mkdir ../dist/css
fi

if [ ! -d "../dist/js" ]; then
	mkdir ../dist/js
fi

if [ ! -d "../src/js" ]; then
	mkdir ../src/js
fi

if [ ! -d "../src/js/vendors" ]; then
	mkdir ../src/js/vendors
fi

if [ ! -d "../src/scss" ]; then
	mkdir ../src/scss
fi


# Finalmente copiamos y pegamos los archivos ke hemos descargado en la carpeta SRC para ke despues, gulp los compile y los mande a DIST
cp -a ./bower_components/reset-css/_reset.scss ../src/scss/
cp -a ./bower_components/bootstrap-grid-only/css/grid12.css ../src/scss/_grid12.scss
cp -a ./bower_components/jquery/dist/jquery.min.js ../src/js/vendors/

npm install
gulp all