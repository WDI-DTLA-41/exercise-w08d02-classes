class Apartment {
  constructor(unit, num_beds, num_baths){
    this._unit = unit;
    this._num_beds = num_beds;
    this._num_baths = num_baths;
  }
  get price(){
    const bedResult = this._num_beds * 1000;
    const bathroomResult = this._num_baths * 500;
    return bedResult + bathroomResult;
  }
  get isStudio(){
    if(this._num_beds > 1){
      return false;
    } else {
        return true;
      }
  }
  moveIn(tenObj){
    if(this.isFull){
      return 'Alert, the apartment is full';
    } else {
        if(this.tenants == undefined){
          this.tenants = [];
          this.tenants.push(tenObj);
        } else {
            this.tenants.push(tenObj);
          }
      }
  }
  get isEmpty(){
    if(this.tenants == undefined){
      this.tenants = [];
      return true;
    } else {
        if(this.tenants.length <= 0){
          return true;
        } else {
            return false;
          }
      }
  }
  get isFull(){
    if(this.tenants == undefined){
      this.tenants = [];
      return false;

    } else if(this.tenants.length == this._num_beds) {
          return true;
      } else {
          return false;
        }
  }
}

module.exports = Apartment;
