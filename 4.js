// Functional Proof that axios or any promise is an Object
function PP()
{
    let axe = {
        get : () => {
            console.log("UFFFF\n");
        }
    }
    return axe;
}

console.log(PP()); // Prints whole object "axe"
PP().get(); // Prints "UFFFF\n" since axe is an object getting returned but it has a arrow function in it which is
            // a key value pair