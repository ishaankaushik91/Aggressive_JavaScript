// Object Traversal (LOOP)
let Person = {
    "Fname" : "Johnny",
    "Lname" : "Sins",
    "Age" : 25
}

let Test = "";

for (let x in Person)
{
    Test += Person[x];
}
console.log(Test);