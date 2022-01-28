
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
            
        };
    },
    
    created(){
        //this.btnIniciarSesion();
    },

    methods:{
        async btnIniciarSesion(){
            const data = await axios.post("http://prueba.pwstasp.net/api/conexion_login/login",{
                usuario: this.loggin.inputName,
                contrasenia: this.loggin.inputPass
            });                
            console.log(data);
        },
    }

});