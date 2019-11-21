class calculate{


  constructor(w,h,age,gender,af){
    this.w = w
    this.h = h
    this.age = age
    this.gender = gender
    this.af = af
  }
  getTDEE() {
    
    if(this.gender=="male"){
         var bmr = (10*this.w)+(6.25*this.h)-(5*this.age)+5;
        //  console.log(bmr+"male");
    }if(this.gender=="female"){
         var bmr = (10*this.w)+(6.25*this.h)-(5*this.age)-161;
        //  console.log(bmr+"female");
    }
    if(this.af==0){
      var tdee =1.2*bmr;
      // console.log(tdee);
    }
    if(this.af==1){
      var tdee =1.375*bmr;
      // console.log(tdee);
    }
    if(this.af==2){
      var tdee =1.55*bmr;
      // console.log(tdee);
    }
    if(this.af==3){
      var tdee =1.725*bmr;
      // console.log(tdee);
    }
    if(this.af==4){
      var tdee =1.9*bmr;
      // console.log(tdee);
    }
   
    
    return tdee;
      

  }
}
module.exports = calculate;
