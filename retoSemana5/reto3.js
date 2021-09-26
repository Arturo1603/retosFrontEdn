let nc = parseInt(prompt("Que numero de cita es esta"));
    let pc = 0;
    let ct = 0;

function calcularCostoTratamiento(){
    for (let i = 1; i <= nc; i++) {
        
        if(i < 4){
            pc = 200;
        }
        else if(i > 3 && i < 6){
            pc = 150;
        }
        else if(i < 9){
            pc = 100;
        }
        else{
            pc = 50;
        }

    ct += pc;
}

    alert(`el costo del tratamiento va siendo: ${ct} reales`);

}

calcularCostoTratamiento();

