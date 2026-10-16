const balance = document.getElementById("balance");
const income = document.getElementById("income");
const expenses = document.getElementById("expenses");

const form = document.getElementById("transaction-form");
const text = document.getElementById("text");
const amount = document.getElementById("amount");
const type = document.getElementById("type");

const transactionList = document.getElementById("transaction-list");

const transactions = [];
let totalBalance = 0;
let totalIncome = 0;
let totalExpenses = 0;

form.addEventListener("submit", function (e) {
  e.preventDefault();
  const description = text.value;
  const transactionAmount = amount.value;
  const transactionType = type.value;
  const transaction = {
    text: description,
    amount: parseFloat(transactionAmount),
    type: transactionType,
  };
  transactions.push(transaction);
  form.reset();
  displayTransactions();
});

function displayTransactions() {
  transactionList.innerHTML = "";
  totalBalance = 0;
  totalIncome = 0;
  totalExpenses = 0;
  for (const transaction of transactions) {
    const li = document.createElement("li");
    li.innerText = `${transaction.text}: ₹${transaction.amount} (${transaction.type})`;
    const btn = document.createElement("button");
    btn.innerText = "Delete";
    btn.addEventListener("click", function () {
      transactions.splice(transactions.indexOf(transaction), 1);
      displayTransactions();
    });
    li.appendChild(btn);
    transactionList.appendChild(li);
    if (transaction.type === "income") {
      totalBalance += transaction.amount;
      totalIncome += transaction.amount;
    } else if (transaction.type === "expense") {
      totalBalance -= transaction.amount;
      totalExpenses += transaction.amount;
    }
  }
  balance.innerText = `₹${totalBalance}`;
  income.innerText = `₹${totalIncome}`;
  expenses.innerText = `₹${totalExpenses}`;
}

