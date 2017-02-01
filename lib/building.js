class Building {
  constructor(address, numOfFloors){
    this._numOfFloors = numOfFloors;
    this.apartments = {};
  }
  add(floorNum, aptObj){
    if(floorNum <= this._numOfFloors){
      if(this.apartments[floorNum] == undefined){
        this.apartments[floorNum] = [];
        this.apartments[floorNum].push(aptObj);
      } else {
          this.apartments[floorNum].push(aptObj);
        }
    } else {
      console.log('Alert! Apartment is taller than Building');
    }
  }
  floor(floorlevel){
    return this.apartments[floorlevel];
  }
  collectRents(){
    var finalResult = 0;
    for (var aptKey in this.apartments) {
      for (var i = 0; i < this.apartments[aptKey].length; i++){
        finalResult += this.apartments[aptKey][i].price;
      }
    }
    return finalResult;
  }
  get hasVacancies(){
    var finalResult = [];
    if(this.appartments === {}){
      return 'No appartments currently registered in Building';
    } else {
        for (var aptKey in this.apartments) {
          for (var i = 0; i < this.apartments[aptKey].length; i++){
            finalResult.push(this.apartments[aptKey][i].isFull);
          }
        }
        console.log('My result array: ' + finalResult);
        for (var j = 0; j < finalResult.length; j++){ //fix below
          // if(finalResult[j] === false){
          //   return false;
          // } else {
          //     return true;
          //   }
        }
      }
  }
}

module.exports = Building;
