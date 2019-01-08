import { Players } from './../src/pigdice.js';

describe('Players', function() {
  var playerOne;
  var playerTwo;

  beforeEach(function() {
    playerOne = new Players("Devin");
    playerTwo = new Players("Tavish");
  });

  it('create two Players', function(){
    var playerTwo = new Players("Tavish");
    expect(playerOne.user).toEqual("Devin");
    expect(playerTwo.user).toEqual("Tavish");
  });

  it('It should grab user input as player name', function () {
    expect(playerOne.user).toEqual("Devin");
  });

  it('It should grab rollDi function', function () {
    expect(playerOne.rollDi()).toBeLessThan(7);
  });

  it('It should hold the players score', function () {
    var turn = playerOne.rollDi();
    playerOne.hold();
    expect(playerOne.total).toEqual(turn);
  });

  it('Should test if a player has won', function(){
    playerOne.total = 19;
    playerOne.win()
    expect(playerOne.win()).toEqual(true);

  });
});
