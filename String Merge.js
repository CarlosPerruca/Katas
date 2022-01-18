// Given two words and a letter, return a single word that's a combination of both words, merged at the point where the given letter first appears in each word. The returned word should have the beginning of the first word and the ending of the second, with the dividing letter in the middle. You can assume both words will contain the dividing letter.

// Examples
// ("hello", "world", "l")       ==>  "held"

function stringMerge(string1, string2, letter) {
    let merge1 = string1.replace(letter,'')
    let merge2 = string2.replace(letter,'')
    return merge1.concat(merge2)
}
//TODO: RESOLVER