// Topic: Just an example of a Class

class Account {
  // #txn = []; // private property
  constructor(owner, currency, pin) {
    // public property
    this.owner = owner;
    this.currency = currency;
    this.pin = pin;
    // protected property / internal property
    this._txn = [];
  }

  //   public method
  diposite(amt) {
    this._txn.push(amt);
    return this;
  }

  withdraw(amt) {
    this._txn.push(-amt);
    return this;
  }

  statement() {
    console.log(this._txn);
  }

  balance() {
    const bal = this._txn.reduce((pre, cur) => pre + cur, 0);
    console.log("Balance", bal);
  }

  requestLoan(amt) {
    if (this._approveLoan()) this.diposite(amt);
    else console.log("you are not eligible");
  }

  //   internal method
  _approveLoan() {
    return true;
  }
}

const acc1 = new Account("raj", "Rs", 89898);
acc1.diposite(100);
acc1.withdraw(50);
acc1.diposite(300);
acc1.diposite(200);
acc1.withdraw(200);

acc1.diposite(100).diposite(30000).withdraw(1);

acc1.requestLoan(2000);

acc1.statement();
acc1.balance();
