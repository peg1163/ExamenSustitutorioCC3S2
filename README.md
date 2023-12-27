# Examen Sustitutorio 
## Parte 1 
  Comenzaremos ejecutando bundle install para tener todas las dependencias listas en el proyecto

  ![image](https://github.com/peg1163/ExamenSustitutorioCC3S2/assets/92898224/a55704b9-6487-4f3c-a8f9-3db43877678d)

crearemos el esquema para la base de datos , si revisamos el archivo migrate , observaremos que ya tenemos
el esquema hecho pero aun tenemos que ejecutarlo con el comando rake db:migrate, opcionalmente podemos agregar datos a la semilla
  
  ![image](https://github.com/peg1163/ExamenSustitutorioCC3S2/assets/92898224/41b0e3b2-6f76-4c8d-9cfb-3456503f05ab)

como queremos ingresar datos a esta tabla entonces ingresaremos algunos en la semilla , pero poniendo 
los datos aqui no hara que estos esten dentro de la tabla , para poder ingresarlos tenemos que ejecutar el comando rake db:seed 
Si ingresamos a la consola de rails , podremos verificar si se ingresaron los datos a la tabla , con el comando :Movie.first
nos devolvera la primera fila de la tabla  : 
  
![image](https://github.com/peg1163/ExamenSustitutorioCC3S2/assets/92898224/40153357-8aec-4fa1-a0c8-fe0dd4e09531)

Ahora verifiquemos si rspec esta funcionando correctamente ejecutandolo : 

![image](https://github.com/peg1163/ExamenSustitutorioCC3S2/assets/92898224/bb374b15-412a-4f11-a90d-389550be5668)

como no hemos escrito pruebas no nos muestra ejemplos o fallas , pero parece que esta configurada
correctamente para correr las pruebas cuando las creemos , ahora provemos cucumber , en el archivo dado 
en la prueba , se nos da ya dos escenarios que fallaran con la ejecucion de cucumber :

![image](https://github.com/peg1163/ExamenSustitutorioCC3S2/assets/92898224/5f3a4dff-30ab-46b4-9774-acb3bf7c3384)

Agrega un campo Director a Movies : para esto , crearemos una migracion que agrege una columna ,
con ayuda del comando "rails generate migration add_column" crearemos la migracion
luego , dentro de esta migracion nos apoyaremos del metodo add_column :
  
![image](https://github.com/peg1163/ExamenSustitutorioCC3S2/assets/92898224/baa4133e-b4d1-418e-a653-0bac840acd2a)


![image](https://github.com/peg1163/ExamenSustitutorioCC3S2/assets/92898224/36e4022e-4ce9-48fd-b7b8-c74409464cbf)

cuando ejecutamos la migracion veremos que se ha agregado la columna  

![image](https://github.com/peg1163/ExamenSustitutorioCC3S2/assets/92898224/229d84b8-df96-45d5-bac2-4a9e3019e661)

una manera de corroborarlo es ingresando a la consola de rails y buscar las columnas de la tabla

![image](https://github.com/peg1163/ExamenSustitutorioCC3S2/assets/92898224/1b3a0b03-ff98-417a-8677-a9f25d73d9ad)

Ahora para que se pueda mostrar en las vistas del servidor , tendremos que agregar los espacios de director 
en las vistas  : 

![image](https://github.com/peg1163/ExamenSustitutorioCC3S2/assets/92898224/ca757236-52e2-4e67-a190-31dc97776847)

Asi si ejecutamos el servidor nos aparecera lo siguiente :

![image](https://github.com/peg1163/ExamenSustitutorioCC3S2/assets/92898224/1db9d375-f37f-47ce-b721-d22a1657b9ee)

Pero porque esta vacio? , esto sucede porque no hemos llenado datos a la columna director , solo la hemos creado

Ahora si ejecutamos cucumber veremos que el background logra ejecutarse correctamente ya que hemos creado la columna director

![image](https://github.com/peg1163/ExamenSustitutorioCC3S2/assets/92898224/fc7ebf20-435d-43f0-8910-c23a69c30a5b)

Pero aun asi hay algunos errores 

## Parte 2

### Pregunta 1 
¿Por qué la abstracción de un objeto de formulario pertenece 
a la capa de presentación y no a la capa de servicios (o inferior)?

Respuesta : porque cuando hablamos un objeto formulario , hablamos de interfaz de usuario  o la "vista del usuario "
pero en la capa de servicios se ve la logica atras de esta interfaz , por ejemplo si hablamos de una aplicacion que funciona con MVC
el controlador y el modelo seria la parte de servicios , mientras que la vista seria la parte de presentacion 

### Pregunta 2
¿Cuál es la diferencia entre autenticación y autorización? 

Respuesta : Cuando hablamos de autenticacion vemos que el usuario sea el correcto es decir verificamos la identidad del ususario, mientras que cuando hablamos 
de autorizacion controlamos permisos , movimientos , o acciones que tiene este usuario ya autenticado


### Pregunta 3 
Middleware : 
podriamos definirlo como un enlace entre la solicitud hacia la aplicacion y la respuesta de esta hacia el usuario , los middleware realizan diferentes tareas en el proceso de solicitud respuesta , en rails tenemos no solo 1 middleware , si ejecutamos el comando rake:middleware podremos observar los middleware que tenemos en la aplicacion :  como por ejemplo la aplicaion de la parte 1 

![image](https://github.com/peg1163/ExamenSustitutorioCC3S2/assets/92898224/31a325a6-dcea-4542-a1ac-5bf65f4a2e09)


 ¿Qué pasa si omite el middleware de Rack y se pasa la solicitud al enrutador directamente (Rails.application.routes.call(request))?

 al pasar la solicitud directamente al enrutador , lo que pasaria es que se perderian funcionalidades
 del middleware , como por ejemplo autenticiones,instrumentacion , agregacion de registro  .
 Recordemos que el middleware es una parte importante como se menciono en el texto proporcionado 


¿Qué pasa si se omitie el enrutador y llamar a una acción del controlador 
de inmediato (por ejemplo, PostsController.action(:index).call(request))? 

al pasar de lado el controlador se podrian perder funcionalidades (como en el caso anterior) como traduccion de rutas 
y tener encuenta que si tomas por alto el enrutador , tambien pasarias por alto el midleware 

Ahora una forma de intentarlo seria con el siguiente codigo sacado de https://github.com/yhirano55/trace_location?tab=readme-ov-file : 

![image](https://github.com/peg1163/ExamenSustitutorioCC3S2/assets/92898224/9ab5df7d-89fc-4bf7-9fed-2e128f60a572)
  
![image](https://github.com/peg1163/ExamenSustitutorioCC3S2/assets/92898224/00c824c4-cc4a-440f-9f30-d869841505da)

pero al ejecutarlo tenemos algunos errores 

 ### Pregunta 4
¿Puedes combinarlo con la calculadora de churn para mostrar los N archivos  por churn* complejidad?. 
 claro , el comando seria masomenos el siguiente :
 
 ![image](https://github.com/peg1163/ExamenSustitutorioCC3S2/assets/92898224/a84ba4b1-a28c-4dad-9772-032791852a42)

al ejecutarlo saldria lo siguiente :

![image](https://github.com/peg1163/ExamenSustitutorioCC3S2/assets/92898224/4d3de922-25dc-47ad-8985-78965959ae40)

Ahora ,hay una forma mas facil de haccer esta comparacion de complejidad y de cambios : 
con ayuda de la gema attracttor podemos saber , los cambios y compararlos con la complejidad , si ejecutamos "attractor report -p app/models " nos despliega la siguiente html :

![image](https://github.com/peg1163/ExamenSustitutorioCC3S2/assets/92898224/7ba31ece-4ba3-4033-8240-c3cbb5d63eac)



## Parte 3


