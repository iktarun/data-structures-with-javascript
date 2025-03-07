function myJSONParse(jsonString) {
    let i = 0;
  
    function parseValue() {
      skipWhitespace();
  
      if (jsonString[i] === "{") return parseObject();
      if (jsonString[i] === "[") return parseArray();
      if (jsonString[i] === '"') return parseString();
      if (jsonString[i] === "t" || jsonString[i] === "f") return parseBoolean();
      if (jsonString[i] === "n") return parseNull();
      return parseNumber();
    }
  
    function parseObject() {
      let obj = {};
      i++; // Skip '{'
      skipWhitespace();
  
      while (jsonString[i] !== "}") {
        let key = parseString();
        skipWhitespace();
        i++; // Skip ':'
        skipWhitespace();
        let value = parseValue();
        obj[key] = value;
        skipWhitespace();
        if (jsonString[i] === ",") i++; // Skip ','
        skipWhitespace();
      }
  
      i++; // Skip '}'
      return obj;
    }
  
    function parseArray() {
      let arr = [];
      i++; // Skip '['
      skipWhitespace();
  
      while (jsonString[i] !== "]") {
        let value = parseValue();
        arr.push(value);
        skipWhitespace();
        if (jsonString[i] === ",") i++; // Skip ','
        skipWhitespace();
      }
  
      i++; // Skip ']'
      return arr;
    }
  
    function parseString() {
      let str = "";
      i++; // Skip opening quote
  
      while (jsonString[i] !== '"') {
        str += jsonString[i++];
      }
  
      i++; // Skip closing quote
      return str;
    }
  
    function parseNumber() {
      let start = i;
  
      while (Boolean(/[0-9]/.test(jsonString[i]) )){
        i++;
      }
  
      return Number(jsonString.slice(start, i));
    }
  
    function parseBoolean() {
      if (jsonString.startsWith("true", i)) {
        i += 4;
        return true;
      } else if (jsonString.startsWith("false", i)) {
        i += 5;
        return false;
      }
    }
  
    function parseNull() {
      if (jsonString.startsWith("null", i)) {
        i += 4;
        return null;
      }
    }
  
    function skipWhitespace() {
      while (/\s/.test(jsonString[i])) i++;
    }
  
    return parseValue();
  }
  
  function myJSONParseEval(jsonString) {
    return eval(`(${jsonString})`);
  }

  // ✅ Testing the implementation
  console.log(myJSONParse('{"name": "Alice", "age": 25, "isStudent": false}'));
  console.log(myJSONParse('[1, 2, 3, {"a": "b"}]'));
  console.log(myJSONParse('"Hello"'));
  console.log(myJSONParse('42'));
  console.log(myJSONParse('true'));
  console.log(myJSONParse('null'));

  console.log("myJSONParseEval", myJSONParseEval('{"name": "Alice", "age": 25, "isStudent": false}'))
  