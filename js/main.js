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
        btnIniciarSesion(){
            if(this.inputName == "plerdo" && this.inputPass == "pwst1234"){
                alert("Bienvenido\n"+this.inputName);
            }else{
                alert("Usuario o contraseña incorrectos");
            }

        }

    }


});