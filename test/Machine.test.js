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
  
  it('When user inserts money running total is displayed', () =>{
    //SEAT
    let denoms=[10, 20, 50, 100, 500]
    denoms.forEach(item =>{
      expect(() => testMachine.deposit(item).toEqual(`You have deposited Rs ${item}`))
    })
  })

  it('Display error if user inputs anything but 10/20/50/100/500 bills', () =>{
    //SEAT
    let denoms=[5, 15, 25, 5000];
    denoms.forEach(item =>{
      expect(() => testMachine.deposit(item)).toThrow(`INVALID BILL`);
    });
  })


})