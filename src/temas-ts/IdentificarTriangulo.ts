import { CalcularDistancia } from './DistanciaEntreDosPuntos.ts';

class Triangulo {
    // Método estático para verificar si los puntos forman un triángulo en 2D mediante el área.
    static formanTriangulo(puntoA: { x: number, y: number }, puntoB: { x: number, y: number }, puntoC: { x: number, y: number }): boolean {
        const area = puntoA.x * (puntoB.y - puntoC.y) +
                     puntoB.x * (puntoC.y - puntoA.y) +
                     puntoC.x * (puntoA.y - puntoB.y);

        // Si el área es 0, los puntos son colineales y no forman un triángulo.
        return area !== 0;
    }

    // Método para imprimir las distancias entre los puntos
    static imprimirDistancias(puntoA: { x: number, y: number }, puntoB: { x: number, y: number }, puntoC: { x: number, y: number }) {
        const distanciaAB = CalcularDistancia.calcularDis(puntoA.x, puntoA.y, puntoB.x, puntoB.y);
        const distanciaBC = CalcularDistancia.calcularDis(puntoB.x, puntoB.y, puntoC.x, puntoC.y);
        const distanciaAC = CalcularDistancia.calcularDis(puntoA.x, puntoA.y, puntoC.x, puntoC.y);

        // Imprimir resultados
        console.log(`La distancia entre punto A y punto B es: ${distanciaAB}`);
        console.log(`La distancia entre punto B y punto C es: ${distanciaBC}`);
        console.log(`La distancia entre punto A y punto C es: ${distanciaAC}`);
    }
}

// Definir los puntos como objetos simples
const puntoA = { x: 2, y: 3 };
const puntoB = { x: 3, y: 3 };
const puntoC = { x: 4, y: 4 };

// Imprimir distancias entre los puntos
Triangulo.imprimirDistancias(puntoA, puntoB, puntoC);

// Verificar si los puntos forman un triángulo
const esTriangulo = Triangulo.formanTriangulo(puntoA, puntoB, puntoC);
console.log(`¿Los puntos forman un triángulo?: ${esTriangulo ? 'Sí' : 'No'}`);
