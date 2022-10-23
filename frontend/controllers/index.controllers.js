window.onload = function() {

getData();

}

function getData(){
   
    var nombreFiltro = document.getElementById("Nombre").value;

    if(nombreFiltro == ""){

        servicio = "http://localhost/ntec/Clientes-App/backend/servicios/clientes-obtener.php?Nombre=";
    
        }
    
        else {
    
            servicio = "http://localhost/ntec/Clientes-App/backend/servicios/clientes-obtener.php?Nombre=" + nombreFiltro;
        }
    var grdDatos = document.getElementById("grdDatos");
    grdDatos.innerHTML = "";

    /*var servicio = "http://localhost/ntec/Clientes-App/backend/servicios/clientes-obtener.php";*/

    

    fetch(servicio).then(respuesta => respuesta.json()).then(datos => {
        datos.forEach(element => {
            
           grdDatos.insertRow().innerHTML = `
             
                <td>${element.id}</td>
                <td>${element.Nombre}</td>
                <td>${element.Apellido}</td>
                <td>${element.Telefono}</td>
                <td>${element.Dni}</td>
                <td>${element.Email}</td>
                <td>
                <button class="btn btn-danger" onclick="delDato(${element.id},'${element.Nombre}');"><i class="" aria-hidden="true"></i>Eliminar</button>
            </td>
              
        `; });
             
        });

    }

        
function saveData(){

    var Nombre = document.getElementById("Nuevo_Nombre").value;
    var Apellido = document.getElementById("Apellido").value;
    var Telefono = document.getElementById("Telefono").value;
    var Dni = document.getElementById("Dni").value;
    var Email = document.getElementById("Email").value;


    if(!Email.includes('@')){
        
        swal({
            title: "Atención!",
            text: "Ingresar un Email Valido",
            icon: "warning",
            button: "Continuar"
            });

            return;
    }



    var myobjeto = {};
    myobjeto.Nombre = Nombre;
    myobjeto.Apellido = Apellido;
    myobjeto.Telefono = Telefono;
    myobjeto.Dni = Dni;
    myobjeto.Email = Email;

    var jsonData = JSON.stringify(myobjeto);

    var servicio = "http://localhost/netc/Clientes-App/backend/servicios/clientes-crear.php";
    let request = new XMLHttpRequest();
    request.open('POST',servicio,true);
    request.setRequestHeader('Content-Type','aplication/json; charset=UTF-8');
    request.send(jsonData);

    request.onload = function (){
        if(request.status === 200){
            getData();
        }
    }

}

function delDato(Id,Nombre){

    swal({
        title: "ATENCIÓN",
        text: "Esta a punto de eliminar el cliente: " + Nombre + " de la base de datos.",
        icon: "warning",
        buttons: true,
        dangerMode: true,
        })
        .then((willDelete) => {
        if (willDelete) {
 
            var myobjeto = {};
            myobjeto.Id = Id;
            var jsonData = JSON.stringify(myobjeto);
            var servicio = "http://localhost/netc/Clientes-App/backend/servicios/clientes-eliminar.php";
            let request = new XMLHttpRequest();
            request.open('POST',servicio,true);
            request.setRequestHeader('Content-Type','aplication/json; charset=UTF-8');
            request.send(jsonData);
        
            request.onload = function (){
                if(request.status === 200){
                    getData();
                }
            }

        } else {
            swal("Operación Cancelada");
        }
        });



    
}
