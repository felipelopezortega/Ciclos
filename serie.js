export default class Serie{

    constructor(value, limit){

        this._value = value;
        this._limit = limit;
        this._serieList = new Array ();
    }

    getValue(){

        return "El valor del cual inicia la serie es " + this._value;
    }

    getLimit(){

        return "El límite para la serie es " + this._limit;
    }

    serie(){
        
        let coco = new Array ();

        let result = this._value

        let der = 2

        this._serieList.push(this._value)

        for(let i=2; i<=this._limit; i++){

            if(!(i%2==0)){

                coco.push(this._value + "/" + i);

                if(der < 1 ){
                    
                    this._serieList.push("+ " + this._value/i);
                    result = result + (this._value/i);
                    der = 2;

                }else{

                    this._serieList.push("- " + this._value/i);
                    result = result - (this._value/i);
                    der = 0;
                }
            }

            
            
        }

        return [result, coco, this._serieList];


    }



}