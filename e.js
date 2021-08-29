export default class E{

    constructor(limit){

        this._limit = limit;
        this._factorial = new Array();
    }

    getLimit(){

        return "El límite para los valores de e es " + this._limit;
    }

    operation(){

        this._factorial.push(1);
        
        let total = 1;
        let res = 1;

        for(let i=1; i<=this._limit; i++){

            total = (total * i);
            res = res + (1/(total));
            this._factorial.push(1/(total));

        }


        return [res, this._factorial];

    }






}