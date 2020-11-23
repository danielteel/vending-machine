class Machine {
  constructor() {
    this.snacks = []
    this._deposited=0;
  }

  selectItem(selection) {
    let selectedSnack = this.snacks.find(item => item.name===selection);
    if (selectedSnack!==undefined){
      if (selectedSnack.price > this._deposited){
        return `Your deposit is insufficient.  Please add Rs ${selectedSnack.price-this._deposited} for this item`;
      }
    }else{
      return 'The item you selected is unavailable';
    }
  }

  seeSelections() {
    return this.snacks
  }

  stock(inventory) {
    if(inventory == undefined) {
      throw Error("please do not troll. you cannot stock nothing.")
    }
    if (!Array.isArray(inventory)){
      inventory=[inventory];
    }
    this.snacks = inventory;
  }

  deposit(rupees){
    let validDenoms=[10, 20, 50, 100, 500]
    if(validDenoms.includes(rupees)){
      this._deposited+=rupees;
      return `You have deposited Rs ${this._deposited}`;
    }else{
      throw Error(`INVALID BILL`);
    }
  }

}

module.exports = Machine