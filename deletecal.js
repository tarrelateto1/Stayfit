class addcal {
    constructor(tdee,calfood,quantity){
        this.tdee = tdee
        this.calfood = calfood
        this.quantity = quantity
    }
    getCalTDEE(){
        //    console.log(this.quantity+"+and"+this.calfood)
           var realcal= this.quantity*this.calfood
           this.tdee = this.tdee + realcal
           return this.tdee;
    }
}
    
