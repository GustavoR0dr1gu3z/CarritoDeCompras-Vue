const app = Vue.createApp({

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


            
        };
    },
    

    methods:{

        async btnIniciarSesion2(e){
            e.preventDefault();

            let resultado = await axios.post("http://prueba.pwstasp.net/api/conexion_login/login", {
                usuario: this.inputName,
                contrasenia: this.inputPass
            });


            if(resultado.data.exito == true){
                console.log("entro con async await");
                localStorage.setItem("usuario", this.inputName);

                us = localStorage.getItem('usuario');

                if(us === "admin" ){
                    window.location.href = "./views/crud_users.html";
                    console.log("Bienvenido Jefe")
                }
                else if( us === this.inputName){
                    window.location.href = "../views/productos.html";
                    console.log("Iniciando Sesion")
                }else{
                    console.log(this.inputName);        
                }

            }else{
                console.log("no entro con async await");
                alert(resultado.data.error)
            }
        },

        btnCerrarSesion(e){
            e.preventDefault();
            localStorage.removeItem("usuario");
            us = localStorage.getItem('usuario');

            if( us == null){
                window.location.href = "../index.html";
                console.log("Cerrando Sesion")
            }else{
                console.log(us);        
            }

        },

        async btnSearch(){
            let res = await axios.post("http://prueba.pwstasp.net/api/conexion_login/productos", {});
            datos = res.data.datos
            for(i=0; i<datos.length; i++){
                this.productos.datos.push(datos[i]);
            }
            console.log(datos);            
        },

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

            datosB = resultadoBuscar.data.datos
            for(i=0; i<datosB.length; i++){
                this.buscar.datosB.push(datosB[i]);
            }
            console.log(datosB);

            if(resultadoBuscar.data.exito == true){
                console.log(resultadoBuscar.data.exito);
                
            }
            else if(resultadoBuscar.data.exito == false){
                console.log(resultadoBuscar.data.error);
                alert("Usuario No Encontrado, Revisar Datos");
            }

        }

    },

    created(){
        this.btnSearch();
    },

});
