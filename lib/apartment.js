class Apartment {
  constructor(unit, num_beds, num_baths, tenants) {
    this.unit = unit;
    this.num_beds = num_beds;
    this.num_baths = num_baths;
    this.tenants = [];
  }
  get price() {
    return `${this.num_beds * 1000 + this.num_baths * 500}`;
  }

  isStudio() {
    return this.num_beds <= 1 ? true : false;
  }

  moveIn(tenant) {
    var status = this.isFull();
    if (!status) {
      this.tenants.push(tenant);
    }
    else {
      throw new Error(`Full! ${tenant.full_name} can't move in`);
    }
  }

  isEmpty() {
    return this.tenants.length > 0 ? false : true;
  }

  isFull() {
    return this.tenants.length === this.num_beds
  }
}

module.exports = Apartment;
