class Punto{
    x:number;
    y:number;
    constructor(x:number,y:number){
        this.x=x;
        this.y=y;
    }
}
//cada que se ingresen los datos de punto 1 o punto 2 lleva (x,y)
 //d=√((x 2 – x 1 )² + (y 2 – y 1 )²)
class Calcular {
    static calcularDistancia(punto1: Punto, punto2: Punto): number {
        const dx = punto2.x - punto1.x;
        const dy = punto2.y - punto1.y;
        return Math.sqrt(dx * dx + dy * dy);
    }
}

//aqui se ingresan
const punto1 = new Punto(1, 2);
const punto2 = new Punto(4, 6);

const distancia = Calcular.calcularDistancia(punto1, punto2);
console.log(`La distancia entre los puntos es: ${distancia}`);