// Following program is a Javascript implementation
// of Rabin Karp Algorithm given in the CLRS book

// d is the number of characters in
// the input alphabet
let d = 4;

/* pat -> pattern
    txt -> text
    q -> A prime number
*/

function search(pat, txt) {
  let M = pat.length;

  let N = txt.length;

  // Hash value for pattern
  let hashPat = 0;
  let hashText = 0;

  let powM = M;
  // calculate hash for pattern
  for (let i = 0; i < M; i++) {
    hashPat += Math.pow(d, powM - 1) * pat[i].charCodeAt();
    hashText += Math.pow(d, powM - 1) * txt[i].charCodeAt();
    powM = powM - 1;
  }
  console.log("hashPat:", hashPat);

  //   Next step is to calculate the hash of given string, slide it if
  //   it does not match with the given hash

  let i = 0;
  while (i < N - 1) {
    // Check text hash is equal to pattern hash
    if (hashPat === hashText) {
      // Step1:
      //   console.log("Hash found at index:", i);
      //Next step is to compare each character
      let tempText = "";
      let count = 0;
      let j = i;
      while (count < M) {
        tempText += txt[j++];
        count++;
      }

      if (tempText === pat) {
        console.log("Text found at index:", i);
      }
    }

    // Step2: Slide window and then generate the next hash
    let preCharCode = Math.pow(d, M - 1) * txt[i].charCodeAt();
    hashText = (hashText - preCharCode) * d;
    if (hashText === 0) {
      hashText = preCharCode;
    }

    if (M + i < N) {
      hashText += txt[M + i].charCodeAt();
    }
    i++;
  }
}

// Driver code
let txt = "GEEKS FOR GEEKS";
let pat = "FOR";

// Function Call
search(pat, txt);
