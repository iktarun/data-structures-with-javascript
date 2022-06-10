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

function deleteKey(key) {
  // Can be optimized here
  if (search(key)) {
    const pCrawl = getPosition(key);
    pCrawl.isEndOfWord = false;
  }
}

// Get the current position of string and return the index
function getPosition(key) {
  let level;
  let length = key.length;
  let index;
  let pCrawl = root;

  for (level = 0; level < length; level++) {
    index = key[level].charCodeAt(0) - "a".charCodeAt(0);

    if (pCrawl.children[index] == null) return false;

    pCrawl = pCrawl.children[index];
  }

  return pCrawl;
}

// Returns true if key presents in trie, else false
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

function countNoOfStringsWithGivenPrefix(key) {
  let level;
  let length = key.length;
  let index;
  let pCrawl = root;

  for (level = 0; level < length; level++) {
    index = key[level].charCodeAt(0) - "a".charCodeAt(0);

    if (pCrawl.children[index] == null) return 0;

    pCrawl = pCrawl.children[index];
  }

  return pCrawl.pc;
}

// Driver
// Input keys (use only 'a' through 'z' and lower case)
// let keys = ["the", "a", "there", "answer", "any", "by", "bye", "their"];
let keys = ["abc", "aba"];

let output = ["Not present in trie", "Present in trie"];

root = new TrieNode();

// Construct trie
let i;
for (i = 0; i < keys.length; i++) insert(keys[i]);

// Search for different keys
if (search("ab") == true) console.log("ab --- " + output[1] + "<br>");
else console.log("ab --- " + output[0] + "<br>");

if (search("these") == true) console.log("these --- " + output[1] + "<br>");
else console.log("these --- " + output[0] + "<br>");

// Delete "ab" here and then we will search again
deleteKey("ab");
if (search("ab") == true) console.log("ab --- " + output[1] + "<br>");
else console.log("ab --- " + output[0] + "<br>");

// Count number of strings with given prefix
let prefix = "l";
console.log(
  "String Count of prefix:",
  prefix,
  "is:",
  countNoOfStringsWithGivenPrefix(prefix)
);

// console.log("Root data is:", root);
// console.log("Root children data is:", root.children);
// console.log("Root children data is:", root.children[0].children);
