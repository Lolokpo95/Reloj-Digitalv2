function cargarReloj() {
    let fechahora = new Date ();
    let minuto = fechahora.getMinutes()
    let hora = fechahora.getHours()
    let segundo = fechahora.getSeconds()
    let meridiano = 'AM';
    const day = fechahora.toLocaleString('en',{weekday:'long'})

    if(hora == 0){
        hora = 12;
    }


    if(hora > 12) {
        hora = hora -12;

        meridiano = 'PM';
     }
        hora = (hora < 10) ? '0' + hora : hora ;
        minuto = (minuto < 10) ? '0' + minuto : minuto ;
        segundo = (segundo < 10) ? '0' + segundo : segundo ;
        let tiempo = hora + ':' + minuto + ':' + segundo + meridiano ;
        document.getElementById('relojnumerico').innerText = tiempo;
        document.getElementById('Dia').innerText = day;
        setTimeout(cargarReloj, 500);
   
 }

 cargarReloj();
