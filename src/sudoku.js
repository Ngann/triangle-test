export

function Game(board) {
  this.board = board
}

Game.prototype.checkRows = function() {
  var duplicate = function(a) {
      for(var i = 0; i <= a.length; i++) {
          for(var j = i; j <= a.length; j++) {
              if(i != j && a[i] == a[j]) {
                  return true;
              };
          };
      };
      return false;
  };
};

// Game.prototype.checkColumns = function() {
//
// };
// testRow = new Game([6,3,9,5,7,4,1,8,2])
//
// https://www.thepolyglotdeveloper.com/2015/02/calculate-duplicates-exist-array-using-javascript/
