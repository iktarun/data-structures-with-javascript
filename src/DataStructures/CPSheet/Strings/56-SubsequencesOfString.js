function subSequences(input, output) {
  console.log("1st:", input, output);
  if (input.length === 0) {
    console.log("output<<", output);
    return;
  }

  subSequences(input.substr(1), output);
  console.log("2nd:", input, output);

  subSequences(input.substr(1), output + input.charAt(0));
}

subSequences("xy", "");
