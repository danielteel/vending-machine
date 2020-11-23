const Machine = require('../src/Machine')

let testMachine=null;

beforeEach(()=>{
  testMachine = new Machine();
  return testMachine;
})

describe('The vending machine', () => {


  it('is initialized with no items', () => {
    // SEAT
    // setup

    // exercise & assert
    expect(testMachine.seeSelections()).toEqual([])

    // teardown, not needed
  })

  it('can stock one snack', () => {
    // setup
    const snack = {
      name: 'macadamia nuts',
      price: 250
    }

    // exercise
    testMachine.stock([snack])

    // assert
    expect(testMachine.seeSelections()).toEqual([snack])
  })

  it('displays an error if no inventory comes with stocking', () => {
    // setup
    const displayMessage = "please do not troll. you cannot stock nothing."

    // exercise & assert
    expect(() => testMachine.stock()).toThrow(displayMessage)
  })
  
  it('When user inserts money, inserted money is displayed', () =>{
    //SEAT
    let denoms=[10, 20, 50, 100, 500];
    denoms.forEach(item =>{
      expect(testMachine.deposit(item)).toEqual(`You have deposited Rs ${item}`)
      testMachine=new Machine();
    })
  })

  it('Display error if user inputs anything but 10/20/50/100/500 bills', () =>{
    //SEAT
    let denoms=[5, 15, 25, 5000];
    denoms.forEach(item =>{
      expect(() => testMachine.deposit(item)).toThrow(`INVALID BILL`);
    });
  })

  it('When user inserts addational money running total is updated and displayed', () =>{
    //SEAT
    testMachine.deposit(100);
    expect(testMachine.deposit(50)).toEqual(`You have deposited Rs ${150}`)
  })

  it('When user selects item that is out of stock, tell him its not available', () => {
    expect(testMachine.selectItem("apple")).toEqual('The item you selected is unavailable');
  })

  it('Displays message if deposit amount is insufficient', () =>{
    //SEAT
    testMachine.deposit(50);
    testMachine.stock({name: 'soda', price:70});

    expect(testMachine.selectItem("soda")).toEqual(`Your deposit is insufficient.  Please add Rs 20 for this item`)
  })

  //`selectItem(code)` returns an object with the item and an array of bills `{item: 'mints', change: [20, 10]}`
  it('Return an object with the item name and an array of bills totaling the change the customer is expecting', ()=>{
    testMachine.deposit(100);
    testMachine.stock({name: 'soda', price: 70});

    let retObj = testMachine.selectItem("soda");//returning {item: 'mints', change: [20, 10]}
    
    expect(retObj.item).toEqual("soda");
    expect(retObj.change).toEqual([20, 10]);
  });


})