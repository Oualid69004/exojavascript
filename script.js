console.log("coucou depuis la console");
let data1 = "variable en let définie dans le bloc principal";

{ //début du sous-bloc

  data1 = "variable en let modifiée dans le sous-bloc";
  var data2 = "variable en var définie dans le sous-bloc";
  let data3 = "variable en let définie dans le sous-bloc";

} //fin du sous-bloc
console.log(data1);
console.log(data2);
console.log(date3);


//array
 var statusDeTHP = ["Moussaillon", "Corsaire", "Renégat"];
console.log(statusDeTHP[0]);