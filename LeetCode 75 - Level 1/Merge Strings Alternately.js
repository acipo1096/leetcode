/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function(word1, word2) {
   let output = '';
   if (word1.length == word2.length){
       for (let i = 0; i < word1.length; i++){
        output += word1[i] + word2[i]
        }
   }
    else if (word1.length < word2.length) {
        for (let i = 0; i < word1.length; i++){
            output += (word1[i] + word2[i])
        }
        for (let i = word1.length; i < word2.length; i++){
            output += word2[i]
        }
    }
    else if (word1.length > word2.length) {
        for (let i = 0; i < word2.length; i++){
            output += (word1[i] + word2[i])
        }
        for (let i = word2.length; i < word1.length; i++){
            output += word1[i]
        }
    }
   return output;

};