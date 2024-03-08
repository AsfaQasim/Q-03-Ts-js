var personName = "Asifa Qasim";
console.log("LowerCase:", personName.toLowerCase());
console.log("UpperCase:", personName.toUpperCase());
console.log("TitleCase:", personName.replace(/\bw/g, function (c) { return c.toUpperCase(); }));
