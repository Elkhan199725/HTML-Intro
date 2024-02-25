document.addEventListener('DOMContentLoaded',function(){
    document.getElementById('calculateButton').addEventListener('click',function(){
        let x, y, z; //declare variables
        x = 5; //assign values
        y = 10;
        z = x + y; //calculate z

        document.getElementById('demo').innerHTML =
        "The value of z is " + z + "."; //display result
    });
});