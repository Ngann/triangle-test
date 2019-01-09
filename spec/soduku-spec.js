import { Game } from './../src/sudoku.js';

describe('Game', function() {
  var Board = [[6,3,9,5,7,4,1,8,2],[5,4,1,8,2,9,3,7,6],[7,8,2,6,1,3,9,5,4],[1,9,8,4,6,7,5,2,3],[3,6,5,9,8,2,4,1,7],[4,2,7,1,3,5,8,6,9],[9,5,6,7,4,8,2,3,1],[8,1,3,2,9,6,7,4,5],[2,7,4,3,5,1,6,9,8]];

  it('Board was created', function() {
    expect(Board).toEqual(Board);
  });

  it('Check for first row', function() {
    expect(Board.checkRows).toEqual();
  });

  it('row was created', function() {
    var testRow = [6,3,9,5,7,4,1,8,2]
    expect(testRow).toEqual([6,3,9,5,7,4,1,8,2]);
  });

  it('index 0 of row returns value', function() {
    var testRow = [6,3,9,5,7,4,1,8,2]
    expect(testRow[0]).toEqual(6);
  });

  it('checkRows', function() {
    var testRow = [6,3,9,5,7,4,1,8,2]
    expect(testRow.checkRows()).toEqual([6,3,9,5,7,4,1,8,2]);
  });

});
