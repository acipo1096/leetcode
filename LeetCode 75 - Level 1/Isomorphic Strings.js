/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
 
  // Base case: for different length of two strings

  if (s.length != t.length){
    return false;
  }
  // This stops the problem right away and doesn't bother moving on if the strings are different lengths

  // Create two maps for each string
  // Good - I had thought of creating a map using

  // const a = Array.from(Array(26)).map((e,i) => i + 97);
  // const alphabet = a.map((x)=>String.fromCharCode(x));

  const map1 = [];
  const map2 = [];

  // Why use 256?
  // Seems to be an arbitrary value - I get the same results even if I initalize each map to "[]"

  // Traverse the loop's elements
  // Q: What does idx mean?
  // A: idx means "index"
  // So I just used "i"

  for (let i = 0; i < s.length; i++){
    // Compare the maps, if not equal, return false
    // console.log("The character of s at index " + i + " is " + s.charAt(i))
    // console.log("The character of t at index " + i + " is " + t.charAt(i))
  
    if (map1[s.charAt(i)] != map2[t.charAt(i)]){
      return false;
    }

    // Insert each character of s and t into a separate map
    map1[s.charAt(i)] = i + 1;
    map2[t.charAt(i)] = i + 1;
    // So it doesn't start at zero

    // console.log(map1)
    // console.log(map2)
  }

  return true;


};


