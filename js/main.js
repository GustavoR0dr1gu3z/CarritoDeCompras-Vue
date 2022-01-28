
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

            }
            
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
            }else{
                console.log("no entro con async await");
            }
        }

    }

});