
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

            }
            
        };
    },
    
    created(){
        //this.btnIniciarSesion();
    },

    methods:{
        btnIniciarSesion(){
            //const peticion = await axios.post("http://prueba.pwstasp.net/api/conexion_login/productos");                
            axios({
                method: 'post',
                url: 'http://prueba.pwstasp.net/api/conexion_login/login',
                headers: {                    
                },
                data: {
                    usuario: this.inputName,
                    contrasenia: this.inputPass
                }
            })
            .then (respuesta => {
                console.log(respuesta);

                    console.log("entro");
                    //console.log(respuesta.data.mensaje);
                    //localStorage.setItem("usuario", respuesta.data.usuario);
                    //localStorage.setItem("id", respuesta.data.id);
                    //window.location.href = "index.html";
                    //alert("entro");

                
            }).catch( error => {
                console.log("no entro");
                alert("Usuario o contraseña incorrectos");
            })

            
            
            
        },
    }

});