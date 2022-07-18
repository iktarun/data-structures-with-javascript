class TicTacToe {
  constructor(n) {
    // this.matrix = [];
    // for (var i = 0; i < n; i++) {
    //   this.matrix[i] = [];
    //   for (var j = 0; j < n; j++) {
    //     this.matrix[i][j] = "-";
    //   }
    // }
    this.n = n;
    this.initBoard(n);
    this.players = {
      p1: "x",
      p2: "0",
    };
  }

  initBoard(n) {
    // let n = this.n;
    this.matrix = [];
    for (var i = 0; i < n; i++) {
      this.matrix[i] = [];
      for (var j = 0; j < n; j++) {
        this.matrix[i][j] = "-";
      }
    }
  }

  checkForWinner(x, y, p) {
    // check for same row
    var i = 0;
    for (i = 0; i < this.matrix.length; i++) {
      if (this.matrix[x][i] !== this.players[p]) {
        break;
      }
    }

    if (i === this.matrix.length) {
      return true;
    }
    // check for same column
    for (i = 0; i < this.matrix.length; i++) {
      if (this.matrix[i][y] !== this.players[p]) {
        break;
      }
    }
    if (i === this.matrix.length) {
      return true;
    }

    // check for diagnals

    for (i = 0; i < this.matrix.length; i++) {
      if (this.matrix[i][i] !== this.players[p]) {
        break;
      }
    }
    if (i === this.matrix.length) {
      return true;
    }

    // check for diagnals reverse

    for (i = 0; i < this.matrix.length; i++) {
      if (this.matrix[i][this.matrix.length - 1 - i] !== this.players[p]) {
        break;
      }
    }
    if (i === this.matrix.length) {
      return true;
    }

    return false;
  }

  validToken(token) {
    if (token == "X" || token == "x" || token == "0" || token == "-") {
      return true;
    }
    console.log("Token is invalid");
    return false;
  }

  addToken(x, y, token) {
    // Check valid positions
    if (this.validToken(token)) {
      this.matrix[x][y] = token;
      return true;
    }
    return false;
  }

  printBoard() {
    console.log("-------");
    for (var row = 0; row < 3; row++) {
      console.log(
        this.matrix[row][0] +
          "|" +
          this.matrix[row][1] +
          "|" +
          this.matrix[row][2]
      ); // Check new line;
    }
    console.log("------- \n");
  }

  isBoardFull() {
    for (var row = 0; row < 3; row++) {
      for (var col = 0; col < 3; col++) {
        if (this.matrix[row][col] === "-") {
          console.log("Is not full");
          return false;
        }
      }
    }
    console.log("Is full");
    return true;
  }

  makeMove(x, y, p) {
    if (this.isBoardFull()) {
      throw "Error Board is Full";
    }

    if (this.matrix[x][y] === "-") {
      if (this.addToken(x, y, this.players[p])) {
        // Check wether we have winner here or not after the move
        if (this.checkForWinner(x, y, p)) {
          console.log("Player ", p, "has wond the game");
        }
      }
    } else {
      console.log("Please try some other box, this is already marked");
    }
  }

  reset() {
    this.initBoard(this.n);
  }
}

let obj = new TicTacToe(3);

obj.printBoard();
obj.makeMove(1, 2, "p1");
obj.printBoard();
obj.makeMove(0, 2, "p2");
obj.printBoard();
obj.makeMove(1, 1, "p2");
obj.printBoard();
obj.makeMove(2, 0, "p2");
obj.printBoard();
// RESET
obj.reset();
obj.printBoard();
