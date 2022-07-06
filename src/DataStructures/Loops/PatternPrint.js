function printNumbers() {
  /** Pattern1
     *  1
        12
        123
        1234
        12345
     */
  for (let i = 1; i < 6; i++) {
    for (let j = 1; j <= i; j++) {
      document.write(j);
    }
    document.write("<br>");
  }
  /** Pattern2
   *
   ******
   *****
   ****
   ***
   **
   *
   
   */
  for (let i = 6; i > 0; i--) {
    for (let j = i; j > 0; j--) {
      document.write("*");
    }
    document.write("<br>");
  }

  /***Pattern3
   * 
    _ _ _ _ *
    _ _ _ **
    _ _ ***
    _ ****
    *****

   */
  let n = 6;

  for (let i = 1; i < n; i++) {
    for (let j = 1; j < n - i; j++) {
      document.write("_ ");
    }
    for (let j = 1; j <= i; j++) {
      document.write("*");
    }
    document.write("<br>");
  }

  /**
   *
          *
        * * *
      * * * * *
    * * * * * * *
  * * * * * * * * *
   
  */
  //  let n = 5;
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n - i; j++) {
      document.write("&nbsp; ");
    }

    for (let k = 1; k <= 2 * i - 1; k++) {
      document.write("* ");
    }
    document.write("<br/>");
  }

  /**
   *
   *
   *
   *
   */

  //  let n = 5;//print diamond
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n - i; j++) {
      document.write("&nbsp; ");
    }

    for (let k = 1; k <= 2 * i - 1; k++) {
      document.write("*");
    }
    document.write("<br/>");
  }
  for (let i = n - 1; i >= 1; i--) {
    for (let j = 1; j <= n - i; j++) {
      document.write("&nbsp; ");
    }

    for (let k = 1; k <= 2 * i - 1; k++) {
      document.write("*");
    }

    document.write("<br/>");
  }
}
