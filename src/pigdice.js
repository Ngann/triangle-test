export function Players (user) {
  this.user = user,
  this.total = 0,
  this.turn = 0
}

Players.prototype.rollDi = function() {
  var roll = Math.floor(Math.random()*(6) + 1);
  if (roll !== 1){
  this.turn += roll;
  console.log(roll)
} else if (roll === 1){
  alert("Oh no! You rolled a 1")
  this.turn = 0;
  console.log(this.turn);
}
  return this.turn;
}

Players.prototype.hold = function() {
  this.total += this.turn;
  console.log(this.total);
  this.turn = 0;
  return this.total;
}
