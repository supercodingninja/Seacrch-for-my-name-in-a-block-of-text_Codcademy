/*jshint multistr:true */
var text = "Once upon a time, a man named, 'Frederick,' travelled from a distant land.\  Frederick did not like the lot in life, that he was living; so, he joined his nation's military force.  He journeyed through distant lands, across the globe he lived on.\  Frederick was still not happy; and he began to cry out to GOD, in Heaven; and GOD heard and answered Frederick.";

var myName = "Frederick";
var hits = [];

// Look for "F" in the text
for(var i = 0; i < text.length; i++) {
	if (text[i] === "F") {
		// If we find it, add characters up to
		// the length of my name to the array
		for(var j = i; j < (myName.length + i); j++) {
			hits.push(text[j]);
		}
	}
}

if (hits.length === 0) {
	console.log("Your name wasn't found!");
} else {
	console.log(hits);
}