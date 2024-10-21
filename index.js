
const user = {
  name: "user",
  hobby: "sports",
  premium: true,
};
const newMood = (user) => {
  user.mood = "happy";
  return user;
};
const changeHobby = ({ hobby } = user) => {
  hobby = "eating";
  return user;
};
const changePremium = ({ premium } = user) => {
  premium = false;
  return user;
};
const allKeys = (user) => {
  const keys = Object.keys(user);
  for (const key of keys) {
    console.log(`${key}: ${user[key]}`);
  }
  return user;
};
console.log(newMood(user));
console.log(changeHobby(user));
console.log(changePremium(user));
console.log(showAllKeysAndValues(user));

const object = {
  test1: 1,
  test2: 131,
  test3: 75,
  test4: 41,
  test5: 90,
};
const countProps = ({ length } = obj) => length;
console.log(countProps(object));

const shopEmployees = {
  oleg: 13000,
  abdul: 12000,
  lucy: 20000,
  albert: 15000,
  alex: 17000,
};
const countTotalSalary = ({ oleg, abdul, lucy, albert, alex } = employees) =>
  oleg + abdul + lucy + albert + alex;
console.log(countTotalSalary(shopEmployees));

const products = [
  {
    name: "watermelon",
    price: 110,
    quantity: 12,
  },
  {
    name: "peach",
    price: 11,
    quantity: 6,
  },
  {
    name: "pear",
    price: 22,
    quantity: 17,
  },
  {
    name: "apple",
    price: 8,
    quantity: 20,
  },
  {
    name: "kiwi",
    price: 133,
    quantity: 3,
  },
  {
    name: "lime",
    price: 92,
    quantity: 2,
  },
];
const calculateTotalPrice = (allProdcuts, productName) => {
  let userPrice = 0;
  for (const product of allProdcuts) {
    const { name, price, quantity } = product;
    if (name === productName) {
      userPrice = price * quantity;
    }
  }
  return userPrice;
};
console.log(calculateTotalPrice(products, "mango"));


const account = {
balance: 0,
  UserName: "Daniil",
  years: 30,
  RegistrationIn: 2021,
  transactions: [],
  Balance() {
    alert(`Your balance is ${this.balance}$`);
  },
  seeTransactions() {
    alert(
      `You had ${this.transactions.length} transactions. See more in console`
    );
    console.log(this.transactions);
  },
  makePositiveTransaction(money, year) {
    const nMoney = Number.parseFloat(money);
    this.balance += nMoney;
    this.transactions.push({ money: nMoney, operation: "+", year });
  },
  makeNegativeTransaction(money, year) {
    const nMoney = Number.parseFloat(money);
    this.balance -= nMoney;
    this.transactions.push({ money: nMoney, operation: "-", year });
  },
};

const final = ({
  Balance,
  Transactions,
  makePositiveTransaction,
  makeNegativeTransaction,
} = account) => {
  let isAccepting = "";
  do {
    if (confirm(`Do you want to see your balance?`) === true) {
      Balance();
    }
    if (confirm(`Do you want to see your transactions?`) === true) {
      Transactions();
    }
    if (confirm(`Do you want to make positive transaction?`) === true) {
      makePositiveTransaction(
        prompt(`How many do you want to transact`),
        prompt(`Enter year`)
      );
    }
    if (confirm(`Do you want to make negative transaction?`) === true) {
      makeNegativeTransaction(
        prompt(`How many do you want to transact`),
        prompt(`Enter year`)
      );
    }
    isAccepting = confirm(`Do you want to work with account?`);
  } while (isAccepting === true);
};
final(account);