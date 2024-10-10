import Cl_Cuadrado from "./Cl_Cuadrado.js";
export default class Cl_Juguete extends Cl_Cuadrado{
    constructor(base, altura){
        super(base);
        this.altura = altura;
    }
    area(){
        return this.base * this.altura;
    }
    perimetro(){
        return 2 * this.base + 2 * this.altura;
    }
}