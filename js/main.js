
const app = Vue.createApp({

    data(){
        return{
            loggin:{
                mensaje: "INICIO SESION",
                usuario: "Usuario",
                contrasena: "Contraseña",
                boton: "INICIO",
                inputName: "1",
                inputPass: "1",
            }
            
        };
    },
    
    created(){
        //this.btnIniciarSesion();
    },

    methods:{
        async btnIniciarSesion(){
            const peticion = await axios.post("http://prueba.pwstasp.net/api/conexion_login/productos",{
                usuario: this.loggin.inputName,
                contrasenia: this.loggin.inputPass
            });                

            

        },
    }

});