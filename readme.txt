Estructura de proyecto web.

Incluye:

	- Boostrap Grid
	- jQuery
	- Reset CSS by Meyer
	- SASS

Dependiendo de la tecnologia que se vaya usar habra que modificar el archivo "build/postinstall.sh" encargado de instalar todo y crear las carpetas.

Inicialmente la estructura es: 


	- Proyecto 

		- build (ejecutables)
		- dist (produccion, aqui iran los archivos finales)
		- src (SCSS y JS)

Lor archivos con compilados en "dist/css" y "dist/js".

Si quisiesemos usar WP por ejemplo, descargamos el repo, descargamos WP dentro de "dist", y sustituimos las rutas de "build/postinstall.sh". EN el caso de WP, seria conveniente que en vez de compilar CSS y JS dentro de "dist" directamente, fuese en "dist/wp-content/themes/myTheme/".


Despues de tener preparado el WP, solo tenemos que ejecutar el archivo en linea de comandos con: ./postinstall.sh






Estructure for web project.

Libraries and frameworks included:

	- Boostrap Grid
	- jQuery
	- Reset CSS by Meyer
	- SASS

We should have a look to the "build/postinstall.sh" document before start, who is gonna be in charge of install and create the folders.

Initial structure:

	- Proyecto 

			- build (execution files)
			- dist (production, final files)
			- src (SCSS y JS)

Compile files will be in "dist/css" y "dist/js".


