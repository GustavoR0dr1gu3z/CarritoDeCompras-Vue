const app = Vue.createApp({

    /* Archivo que se usa para los metodos (con API) y mensajes con VueJS*/
    data(){
        return{
            loggin:{
                mensaje: "INICIO SESION",
                usuarioo: "Usuario",
                contrasena: "Contraseña",
                boton: "INICIO",
                inputName: "",
                inputPass: "",
            },

            productos:{
                mensaje: "PRODUCTOS",
                signo: ">",
                username: localStorage.getItem('usuario'),
                cSesion: "Cerrar Sesion",
                datos: [],
                counts: 0,
            },

            guardar:{
                dateG: "",
                nameG: "",
                userG: "",
                passG: "",
                telG: "",
                emailG: "",
            },

            buscar:{
                busquedaB: "",
                limiteB: "",
                paginaB: "",
                datosB : [],
            },

            editar:{
                dateE: "",
                nameE: "",
                userE: "",
                passE: "",
                telE: "",
                emailE: "",
            },

            eliminar:{
                usuarioD: "",
            }


            
        };
    },
    

    methods:{

        /* Funciones asincronas para el consumo de la API  */
        async btnIniciarSesion2(e){
            e.preventDefault();

            /* Consumo del api con await por la funcion asincrona */
            let resultado = await axios.post("http://prueba.pwstasp.net/api/conexion_login/login", {
                /* Al valor que coloquen en los input se reemplazan en los valores retornados del API */
                usuario: this.inputName,
                contrasenia: this.inputPass
            });

            /* Accedemos a los atributos del API, si es verdadera la consulta, fue exitosa la consulta */
            if(resultado.data.exito == true){
                console.log("entro con async await");
                /* Guardamos el usuario en el localStorage para saber si hay usuarios loggeados o no */
                localStorage.setItem("usuario", this.inputName);

                /* Traemos los datos del local storage para ver si alguien tiene sesion activa */
                us = localStorage.getItem('usuario');

                if(us === "admin" ){
                    /* Si el usuario es el admin, tiene otra pantalla diferente a los demás: CRUD de los usuarios*/
                    window.location.href = "./views/crud_users.html";
                    console.log("Bienvenido Jefe")
                }
                /* Si es usuario normal, le aparece el catalogo de los productos para su compra */
                else if( us === this.inputName){
                    window.location.href = "../views/productos.html";
                    console.log("Iniciando Sesion")
                }else{
                    console.log(this.inputName);        
                }

            }else{
                /* Fallo del logeo, datos incorrectos o faltantes */
                console.log("no entro con async await");
                alert(resultado.data.error)
            }
        },

        btnCerrarSesion(e){
            e.preventDefault();
            localStorage.removeItem("usuario");
            
            /* Se traen datos del localStorage */
            us = localStorage.getItem('usuario');

            /*Si no hay ningun dato*/            
            if( us == null){
                /* Se regresa al index para que se loggen */
                window.location.href = "../index.html";
                console.log("Cerrando Sesion")
            }else{
                /* Solo imprime quien esta logeado en la consola */
                console.log(us);        
            }

        },

        async btnSearch(){
            /*Consulta del API */
            let res = await axios.post("http://prueba.pwstasp.net/api/conexion_login/productos", {});
            datos = res.data.datos
            for(i=0; i<datos.length; i++){
                /* Guarda los datos en un arreglo */
                this.productos.datos.push(datos[i]);
            }
            console.log(datos);            
        },

        /* Funcion para aumentar o disminuir en el boton de agregar/quitar */
        modCount(instruccion = "add", limit = 10){
            if(instruccion == "dis" && this.productos.counts > 0){
                this.productos.counts -= 1;
                //console.log(typeof(this.productos.counts));
            }else{
                this.productos.counts += 1;
                //console.log(typeof(this.productos.counts));
                //console.log(this.productos.counts);
            }

        },

        async btnGuardarUser(e){
            e.preventDefault();
            /* Consulta del API y sustitucion de los datos */
            let resultadoGuardar = await axios.post("http://prueba.pwstasp.net/api/conexion_login/guardar_usuario", {
            fecha: this.dateG,
            nombre: this.nameG,
            usuario: this.userG,
            contrasenia: this.passG,
            telefono: this.telG,
            email: this.emailG,
        });


        console.log(resultadoGuardar);

            if(resultadoGuardar.data.exito == true){                
                console.log(resultadoGuardar.data.exito);            
                alert("Usuario Guardado");    
            }
            else{
                console.log(resultadoGuardar.data.error);            
                alert("Usuario No Guardado, Revisar Datos");
            }

        },

        async btnBuscarUser(e){
            e.preventDefault();
            let resultadoBuscar = await axios.post(" http://prueba.pwstasp.net/api/conexion_login/buscar_usuario", {
                busqueda: this.busquedaB,
                limite: this.limiteB,
                pagina: this.paginaB,
            });

            console.log(resultadoBuscar);


            if(resultadoBuscar.data.exito == true){
                console.log(resultadoBuscar.data.exito);
                
            }
            else if(resultadoBuscar.data.exito == false){
                console.log(resultadoBuscar.data.error);
                alert("Usuario No Encontrado, Revisar Datos");
            }

            datosB = resultadoBuscar.data.datos
            for(i=0; i<datosB.length; i++){
                this.buscar.datosB.push(datosB[i]);
            }
            console.log(datosB);            

        },

        async btnEditarUser(e){
            e.preventDefault();
            let resultadoEditar = await axios.post("http://prueba.pwstasp.net/api/conexion_login/editar_usuario", {
            fecha: this.dateE,
            nombre: this.nameE,
            usuario: this.userE,
            contrasenia: this.passE,
            telefono: this.telE,
            email: this.emailE,
        });


        console.log(resultadoEditar);

            if(resultadoEditar.data.exito == true){                
                console.log(resultadoEditar.data.exito);            
                alert("Usuario Editado");    
            }
            else{
                console.log(resultadoEditar.data.error);            
                alert("Usuario No Editado, Revisar Datos");
            }

        },

        async btnEliminarUser(e){
            e.preventDefault();
            let resultadoEliminar = await axios.post("http://prueba.pwstasp.net/api/conexion_login/eliminar_usuario", {
            usuario: this.usuarioD,
        });

        console.log(resultadoEliminar);

            if(resultadoEliminar.data.exito == true){
                console.log(resultadoEliminar.data.exito);
                alert("Usuario Eliminado");
            }else{
                console.log(resultadoEliminar.data.error);
                alert("Usuario No Eliminado, Revisar Datos");
            }
        }

    },

    created(){
        /* Constantemente se busca si hay alguien logeado o no para que se regrese automaticamente al login*/
        this.btnSearch();
    },

});
