let personName: string ="Asifa Qasim"
console.log("LowerCase:", personName.toLowerCase());
console.log("UpperCase:", personName.toUpperCase());
console.log("TitleCase:",personName.replace(/\bw/g,c => c.toUpperCase()));