document.getElementById("btn--registro").addEventListener("click", registro);

var login_registro=document.querySelector(".login-registro");
var formulario_login=document.querySelector(".Inicio-sesion");
var formulario_registro=document.querySelector(".Registro");
var cajatrasera_login=document.querySelector(".cajatrasera-login");
var cajatrasera_registro=document.querySelector(".cajatrasera-registro");


function registro(){
    formulario_registro.style.display="block";
    login_registro.style.left="410px";
    formulario_login.style.display="none";
    cajatrasera_registro.style.opacity="0";
    cajatrasera_login.style.opacity="1";
}

document.getElementById("btn--iniciarsesion").addEventListener("click", inicio);


function inicio(){
    if(window.innerWidth>850){
        formulario_registro.style.display="none";
        login_registro.style.left="10px";
        formulario_login.style.display="block";
        cajatrasera_registro.style.opacity="1";
        cajatrasera_login.style.opacity="0";
    }else{
        formulario_registro.style.display="none";
    login_registro.style.left="0px";
    formulario_login.style.display="block";
    cajatrasera_registro.style.display="block";
    cajatrasera_login.style.display="none";
    }

}
function validar(){
    var nombre, apellido, correo, contrasena, confirmaContrasena;
    nombre= document.getElementsByid("nombre").values;
    apellido= document.getElementsByid("apellido").values;
    correo= document.getElementsByid("correo").values;
    telefono = document.getElementsByid("telefono").values;
    contrasena= document.getElementsByid("contrasena").values;
if (nombre === "" || apellido === "" || correo === "" || telefono === "" || contrasena=== ""  ){
    alert ('Todos los campos son obligatorios');
    return false;
}else{
    alert('el Correo es invalido');
}
}