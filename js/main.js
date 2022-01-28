
const app = Vue.createApp({

    data(){
        return{
            loggin:{
                mensaje: "INICIO SESION",
                usuario: "Usuario",
                contrasena: "Contraseña",
                boton: "INICIO",
                inputName: "",
                inputPass: "",
            }
            
        }
    },
    

    methods:{
/*        async btnIniciarSesion(){
            let resultado = await axios.post("http://prueba.pwstasp.net/api/conexion_login/login", {
                usuario: this.loggin.inputName,
                contrasenia: this.loggin.inputPass
            });

            if(resultado.status == 201){
                localStorage.setItem("user-info", JSON.stringify(resultado.data));
                this.$router.push("/home");
            }else{
                alert("Datos incorrectos");
            }            
            }
        }*/

        btnIniciarSesion(){
            /* Async: Espera a que una promesa nos resuelva y de una data, para usarla */
            const peticion = async () => {
                /* Await: Espera a que una promesa nos resuelva */
                const respuesta = await fetch("http://prueba.pwstasp.net/api/conexion_login/login") 
                const data = await respuesta.json();                
                return data;
            }

            if (data[0].usuario == this.loggin.inputName && data[0].contrasenia == this.loggin.inputPass){
                console.log("Datos correctos");
            }

        },

        btnIniciarSesion2(){
            const peticion = async () => {
                const respuesta = await axios.post("http://prueba.pwstasp.net/api/conexion_login/login")
                
            }
        }


    }


    


});