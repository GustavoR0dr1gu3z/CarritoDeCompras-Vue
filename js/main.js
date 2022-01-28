
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
                username: "Nombre",
                cSesion: "Cerrar Sesion",

            }
            
        };
    },
    
    created(){
        //this.btnIniciarSesion();
    },

    methods:{
     /*   btnIniciarSesion(){
            //const peticion = await axios.post("http://prueba.pwstasp.net/api/conexion_login/productos");        
            console.log("hola");        
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

                
            }).catch( error => {
                console.log("no entro");
                alert("Usuario o contraseña incorrectos");
            })                                
        },*/

        btnIniciarSesion(e){
            e.preventDefault();
            console.log("hola desde el main");
        }

    }

});