class Machine {
  constructor() {
    this.snacks = []
  }

  seeSelections() {
    return this.snacks
  }

  stock(inventory) {
    if(inventory == undefined) {
      throw Error("please do not troll. you cannot stock nothing.")
    }
    this.snacks = inventory
  }

  deposit(rupees){
    let validDenoms=[10, 20, 50, 100, 500]
    if(validDenoms.includes(rupees)){
      return `You have deposited Rs ${rupees}`;
    }else{
      throw Error(`INVALID BILL`);
    }

    
    
  }
}

module.exports = Machine