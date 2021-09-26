    let nc = parseInt(prompt("Que numero de cita es esta"));
    let pc = 0;
    let ct = 0;
    let primerasCitas = 0;
    let segundasCitas = 0;
    let tercerasCitas = 0;
    let cuartasCitas = 0;

function calcularCostoTratamiento(){
    for (let i = 1; i <= nc; i++) {
        
        if(i < 4){
            pc = 200;
            primerasCitas ++;
        }
        else if(i > 3 && i < 6){
            pc = 150;
            segundasCitas ++;
        }
        else if(i < 9){
            pc = 100;
            tercerasCitas ++;
        }
        else{
            pc = 50;
            cuartasCitas ++;
        }

    ct += pc;
}

    alert(`Hasta ahora van primeras citas: ${primerasCitas},
                           Segundas citas: ${segundasCitas},
                           terceras citas: ${tercerasCitas}. 
    El costo del tratamiento va siendo: ${ct} reales y le toca pagar: ${pc}`);
    

}

calcularCostoTratamiento();

