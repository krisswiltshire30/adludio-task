//Finds all permutations of a given string and returns an alphabetised array
function permutations(string) {
  var results = [];
  if (string.length === 1) {
    results.push(string);
    return results;
  }

  for (var i = 0; i < string.length; i++) {
    var firstChar = string[i];
    var charsLeft = string.substring(0, i) + string.substring(i + 1);
    var innerPermutations = permutations(charsLeft);
    for (var j = 0; j < innerPermutations.length; j++) {
      results.push(firstChar + innerPermutations[j]);
    }
  }
  return [...new Set(results)].sort()
}

// Finds the index the original string in the alphabetised array
// Output is one indexed as per Task 2 example seems to do so
function permutationIndex(string) {
  pIndex = permutations(string).indexOf(string) + 1;
  return "indexOfGivenPermutation: " + pIndex
}

// Logs the permutation index to the console
console.log(permutationIndex("ADLUDIO"))