function generador(){
let num=Math.floor(Math.random()*10)
switch(num){
    case 0: return "El destino no es algo que debas temer, sino algo que debes abrazar";
    break;
    case 1: return "La creatividad es el combustible que enciende las llamas de la innovación";
    break;
    case 2: return "La felicidad no se encuentra en los destinos, sino en los viajes que emprendemos";
    break;
    case 3: return "La música es el idioma universal que conecta corazones en todas partes";
    break;
    case 4: return "El coraje es la brújula que nos guía hacia la superación personal";
    break;
    case 5: return "La amistad es un tesoro invaluable que se cultiva con el tiempo y la sinceridad";
    break;
    case 6: return "El conocimiento es la llave que abre las puertas de oportunidad en la vida";
    break;
    case 7: return "La paciencia es el puente que nos lleva de la frustración a la realización";
    break;
    case 8: return "El amor es la fuerza más poderosa que existe, capaz de transformar vidas";
    break;
    case 9: return "Los sueños son las semillas de las grandes hazañas, solo debes atreverte a sembrar";
    break;
}
}
console.log(generador())