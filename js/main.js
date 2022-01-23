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
            }else if(this.inputName == null || this.inputPass == null){
                alert("Complete los campos");
            }else{
                alert("Usuario o contraseña incorrectos");
            }

        }

    }


});