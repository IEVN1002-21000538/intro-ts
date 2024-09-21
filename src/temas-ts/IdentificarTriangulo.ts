import { CalcularDistancia } from './DistanciaEntreDosPuntos';

class Triangulo extends CalcularDistancia {
  
    static imprimirDistancias(puntoA: { x: number, y: number }, puntoB: { x: number, y: number }, puntoC: { x: number, y: number }) {
        const distanciaAB = this.calcularDis(puntoA.x, puntoA.y, puntoB.x, puntoB.y); 
        const distanciaBC = this.calcularDis(puntoB.x, puntoB.y, puntoC.x, puntoC.y);
        const distanciaAC = this.calcularDis(puntoA.x, puntoA.y, puntoC.x, puntoC.y);

        console.log(`La distancia entre punto A y punto B es: ${distanciaAB}`);
        console.log(`La distancia entre punto B y punto C es: ${distanciaBC}`);
        console.log(`La distancia entre punto A y punto C es: ${distanciaAC}`);
    }
    
    static formanTriangulo(puntoA: { x: number, y: number }, puntoB: { x: number, y: number }, puntoC: { x: number, y: number }): boolean {
        const area = puntoA.x * (puntoB.y - puntoC.y) +
                     puntoB.x * (puntoC.y - puntoA.y) +
                     puntoC.x * (puntoA.y - puntoB.y);

        return area !== 0;
    }


    
}

const puntoA = { x: -1, y: 0 };
const puntoB = { x: 1, y: 0 };
const puntoC = { x: 0, y: 5 };


Triangulo.imprimirDistancias(puntoA, puntoB, puntoC);


const esTriangulo = Triangulo.formanTriangulo(puntoA, puntoB, puntoC);
console.log(`¿Los puntos forman un triángulo?: ${esTriangulo ? 'Sí' : 'No'}`);
