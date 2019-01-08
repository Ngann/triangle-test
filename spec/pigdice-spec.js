import { Players } from './../src/pigdice.js';

describe('Players', function() {

  it('It should grab user input as player name', function () {
    var playerOne = new Players("Devin");
    expect(playerOne.checkType()).toEqual("Devin");
  });
});
