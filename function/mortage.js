function mortage(transactions){
  const total = transactions.reduce((acc, cur) => acc + parseInt(cur.payment), 0);
  console.log(total)
  return String(total);
}

module.exports = mortage;