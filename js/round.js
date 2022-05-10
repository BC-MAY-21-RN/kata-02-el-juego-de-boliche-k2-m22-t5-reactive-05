export default class Round {
    constructor () {
        this.tiroUno = null;
        this.tiroDos = null;
        this.score = 0;
    }

    get_tiroUno(){
        return this.tiroUno;
    }
    
    get_tiroDos(){
        return this.tiroDos;
    }

    is_spray(){
        return this.tiroUno + this.tiroDos===10;
    }
    
    is_strike(){
        return this.tiroUno === 10;
    }

    set_score(){
        this.tiroUno = this.get_Round1();
        this.ttiroDos = this.getR();
        this.score = this.this.tiroUno + this.ttiroDos;
    }

    get_Round1() {
        return Math.floor(Math.random() * 11);
      }
    
    get_Round2() {
        const maxPinos = 10 - this.tiroUno;
        return Math.floor(Math.random() * maxPinos);
      }
}