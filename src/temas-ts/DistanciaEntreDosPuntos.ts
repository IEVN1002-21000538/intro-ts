export class CalcularDistancia {
    x1: number;
    y1: number;
    x2: number;
    y2: number;

    constructor(x1: number, y1: number, x2: number, y2: number) {
        this.x1 = x1;
        this.y1 = y1;
        this.x2 = x2;
        this.y2 = y2;
    }

    public static calcularDis(x1: number, y1: number, x2: number, y2: number): number {
        const dx = x2 - x1;
        const dy = y2 - y1;
        return Math.sqrt(dx * dx + dy * dy);
    }
    
}

const puntoA = { x: -1, y: 0 };
const puntoB = { x: 1, y: 0 };

console.log(`La distancia entre los dos puntos es: ${CalcularDistancia.calcularDis(puntoA.x, puntoA.y, puntoB.x, puntoB.y)}`);
