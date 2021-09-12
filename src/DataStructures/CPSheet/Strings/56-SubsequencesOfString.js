function subSequences(input, output) {
  if (input.length === 0) {
    return;
  }

  subSequences(input.substr(1), output);

  subSequences(input.substr(1), output + input.charAt(0));
}

subSequences("xy", "");
