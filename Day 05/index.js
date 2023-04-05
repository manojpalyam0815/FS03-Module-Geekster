var sentence = "This is a Javascript sentence.";
console.log(sentence.length);

var index = sentence.indexOf("e");
console.log(index);

var firstWord = sentence.slice(0, sentence.indexOf(" "));
console.log(firstWord);

var lastWord = sentence.substring(sentence.lastIndexOf(" ") + 1);
console.log(lastWord);

var includesJavaScript = sentence.includes("JavaScript");
console.log(includesJavaScript);

var replacedString = sentence.replace("JavaScript", "AWS");
console.log(replacedString);

var words = sentence.split(" ");
console.log(words);

var newSentence = words.map(function(word) {
return word.charAt(0).toUpperCase() + word.slice(1);
}).join(" ");
console.log(newSentence);
