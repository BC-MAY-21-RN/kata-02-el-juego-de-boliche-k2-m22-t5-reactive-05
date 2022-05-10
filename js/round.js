export default class Round {
    constructor () {
        this.tiroUno = 0;
        this.tiroDos = 0;
        this.score = this.tiroUno + this.tiroDos;
    }

    get_tiroUno(){
        return this.tiroUno;
    }
    
    get_tiroDos(){
        return this.tiroDos;
    }

    is_spray(){
        return  this.tiroUno + this.tiroDos === 10;
    }
    
    is_strike(){
        return this.tiroUno === 10;
    }

    get_Round1() {
        return Math.floor(Math.random() * 11);
        
      }
    
    get_Round2() {
        const maxPinos = 10 -  this.tiroUno;
        return Math.floor(Math.random() * maxPinos);

      }
      
      run(){
        const bonificacion1=10;
        const bonificacion2=10;
        this.tiroUno = this.get_Round1();
        if(this.is_strike())
        {
          this.score += bonificacion1;
        }else{
            this.tiroDos = this.get_Round2();
            if(this.is_spray()){
                this.score += bonificacion2;
            }
        }
      }
}