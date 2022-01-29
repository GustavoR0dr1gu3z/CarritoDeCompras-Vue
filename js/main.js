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
        },

        btnCerrarSesion(e){
            e.preventDefault();
            localStorage.removeItem("usuario");
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

    },

    created(){
        this.btnSearch();
    }



});