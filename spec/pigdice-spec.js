import { Players } from './../src/pigdice.js';

describe('Players', function() {
  var playerOne;

  beforeEach(function() {
    playerOne = new Players("Devin");
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
    playerOne.total = 23;
    playerOne.hold();
    spyOn(window, 'alert');
    expect(window.alert).toHaveBeenCalledWith('You Win!')
  });

  it('create two Players', function(){
    var playerTwo = new Players("Tavish");
    expect(playerOne.user).toEqual("Devin");
    expect(playerTwo.user).toEqual("Tavish");
  });

  it('will start game', function(){
    var playerTwo = new Players("Tavish");
    expect(playerOne.user).toEqual("Devin");
    expect(playerTwo.user).toEqual("Tavish");
  });
});
