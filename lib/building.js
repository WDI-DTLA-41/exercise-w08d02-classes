class Building {
  constructor(address, floorNum) {
    this.address = address;
    this.floorNum = floorNum;
    this.apartments = {};
  }

  add(floor, apartment) {
    this.apartments[floor] = this.apartments[floor] || [];
    this.apartments[floor].push(apartment);
  }

  floor(num) {
    return this.apartments[num];
  }

  collectRents() {
    var totalRent = 0;
    for (var key in this.apartments) {
      for (var i = 0; i < this.apartments[key].length; i++) {
        var curApt = this.apartments[key][i]
        totalRent += +curApt.price;
      }
    }
    return totalRent
  }

  hasVacancies() {
    var heldArr = [];
    for (var key in this.apartments) {
      for (var i = 0; i < this.apartments[key].length; i++) {
        var curApt = this.apartments[key][i]
        heldArr.push( curApt.isFull() );
      }
    }
    if (heldArr.includes( false )) {
      return true;
    }
  }

}

module.exports = Building;
