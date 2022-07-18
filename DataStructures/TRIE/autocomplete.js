//TODO::

class TrieNode {
  constructor(key) {
    this.isEndOfWord = false; //For Searching purpose
    this.data = key;
    this.children = new Array(ALPHABET_SIZE).fill(null);
    this.pc = 0; //it will be used to store the count of string with prefix in the TRIE
  }
}

let root;

// If not present, insert key into TRIE
// If the key is prefix of TRIE node,
// just marks leaf node
// Assuming all characters will be in small case
function insert(key) {
  let level;
  let length = key.length;
  let index;

  let pCrawl = root;

  for (level = 0; level < length; level++) {
    index = key[level].charCodeAt(0) - "a".charCodeAt(0);

    if (pCrawl.children[index] == null) {
      //Here are we creating this size of struct for each key.we can optimize this
      //if we can store the same level children in the same note array
      pCrawl.children[index] = new TrieNode(key[level]);
      pCrawl.children[index].pc = 1;
    } else {
      let count = pCrawl.children[index].pc + 1;
      pCrawl.children[index].pc = count;
    }

    pCrawl = pCrawl.children[index];
  }

  // mark last node as leaf
  pCrawl.isEndOfWord = true;
}
