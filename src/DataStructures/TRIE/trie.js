/** Use cases.....
 *  1. Store word in TRIE
    2. Search a word, check wether a string is present in the TRIE or not
    3. Word starts with some given prefix
    NOTE: Root will not store any data it will store the reference to its children node which will contain the data
*/

// Javascript implementation of search and insert operations
// on Trie

// Alphabet size (# of symbols), considering lowercase characters only
let ALPHABET_SIZE = 26;

// trie node
class TrieNode {
  constructor(key) {
    this.isEndOfWord = false;
    this.data = key;
    this.children = new Array(ALPHABET_SIZE).fill(null);
  }
}

let root;

// If not present, insert key into TRIE
// If the key is prefix of TRIE node,
// just marks leaf node
// Assuming all characters will be in small case
function insert(key) {
  //   Step1: Take vairables that are needed
  let pCrawl = root;
  let level = 0;
  let index;

  for (level = 0; level < key.length; level++) {
    index = key[level].charCodeAt(0) - "a".charCodeAt(0);
    if (pCrawl.children[index] === null) {
      pCrawl.children[index] = new TrieNode(key[level]);
    }

    pCrawl = pCrawl.children[index];

    // mark last node as leaf
    pCrawl.isEndOfWord = true;
  }
}

// Returns true if key presents in TRIE, else false
function search(key) {
  let level;
  let length = key.length;
  let index;
  let pCrawl = root;

  for (level = 0; level < length; level++) {
    index = key[level].charCodeAt(0) - "a".charCodeAt(0);

    if (pCrawl.children[index] == null) return false;

    pCrawl = pCrawl.children[index];
  }

  return pCrawl.isEndOfWord;
}

// Driver
// Input keys (use only 'a' through 'z' and lower case)
// let keys = ["the", "a", "there", "answer", "any", "by", "bye", "their"];
let keys = ["aba", "abc"];

let output = ["Not present in trie", "Present in trie"];

root = new TrieNode();

// Construct trie
let i;
for (i = 0; i < keys.length; i++) insert(keys[i]);

// Search for different keys
if (search("aba") == true) console.log("the --- " + output[1] + "<br>");
else console.log("the --- " + output[0] + "<br>");

if (search("these") == true) console.log("these --- " + output[1] + "<br>");
else console.log("these --- " + output[0] + "<br>");

// console.log("Root data is:", root);
// console.log("Root children data is:", root.children);
// console.log("Root children data is:", root.children[0].children);
