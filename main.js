// all selections 
const form2 = document.querySelector('#form');
const input1 = form2[0];
const input2 = form2[1];
const int1 = form2[0].value;
const int2 = form2[1].value;
let val1 = parseFloat(int1);
let val2 = parseFloat(int2);
const plusOpe = document.getElementById('plus');
const minusOpe = document.getElementById('minus');
const multiOpe = document.getElementById('multi');
const divideOpe = document.getElementById('divide');
const remainOpe = document.getElementById('remain');
const result = document.querySelector('#val');
// all selections 

// functions 
const sumation = () => {
    let valLen1 = int1.length;
    let valLen2 = int2.length;

    if (valLen1 > 12 || valLen2 > 12) {
        alert("Number of operands length must be below 12 character.");
    }
    else if (isNaN(val1)) {
        input1.style.border = "2px solid red";
        alert("Invalid Input!");
    }
    else if (isNaN(val2)) {
        input2.style.border = "2px solid red";
        alert("Invalid Input!");
    }
    else {
        setTimeout(() => {
            let sum = val1 + val2;
            result.innerHTML = "Results: " + sum;
        }, 600)
    }
}
const substraction = () => {
    let valLen1 = int1.length;
    let valLen2 = int2.length;

    if (valLen1 > 12 || valLen2 > 12) {
        alert("Number of operands length must be below 12 character.");
    }
    else if (isNaN(val1)) {
        input1.style.border = "2px solid red";
        alert("Invalid Input!");
    }
    else if (isNaN(val2)) {
        input2.style.border = "2px solid red";
        alert("Invalid Input!");
    }
    else {
        setTimeout(() => {
            if (val1 > val2) {
                let sub1 = val1 - val2;
                result.innerHTML = "Results: " + sub1;
            } else if (val2 > val1) {
                let sub2 = val2 - val1;
                result.innerHTML = "Results: " + sub2;
            } else {
                let equal = val1 - val2;
                result.innerHTML = "Results: " + equal;
            }
        }, 600)
    }
}
const multiplication = () => {
    let valLen1 = int1.length;
    let valLen2 = int2.length;

    if (valLen1 > 12 || valLen2 > 12) {
        alert("Number of operands length must be below 12 character.");
    }
    else if (isNaN(val1)) {
        input1.style.border = "2px solid red";
        alert("Invalid Input!");
    }
    else if (isNaN(val2)) {
        input2.style.border = "2px solid red";
        alert("Invalid Input!");
    }
    else {
        setTimeout(() => {
            let multus = val1 * val2;
            result.innerHTML = "Results: " + multus;
        }, 600)
    }
}
const division = () => {
    let valLen1 = int1.length;
    let valLen2 = int2.length;

    if (valLen1 > 12 || valLen2 > 12) {
        alert("Number of operands length must be below 12 character.");
    }
    else if (isNaN(val1)) {
        input1.style.border = "2px solid red";
        alert("Invalid Input!");
    }
    else if (isNaN(val2)) {
        input2.style.border = "2px solid red";
        alert("Invalid Input!");
    }
    else {
        setTimeout(() => {
            let vag = parseFloat(val1 / val2).toFixed(4);
            result.innerHTML = "Results: " + vag;
        }, 600)
    }
}
const remainder = () => {
    let valLen1 = int1.length;
    let valLen2 = int2.length;

    if (valLen1 > 12 || valLen2 > 12) {
        alert("Number of operands length must be below 12 character.");
    }
    else if (isNaN(val1)) {
        input1.style.border = "2px solid red";
        alert("Invalid Input!");
    }
    else if (isNaN(val2)) {
        input2.style.border = "2px solid red";
        alert("Invalid Input!");
    }
    else {
        setTimeout(() => {
            let vagses = val1 % val2;
            result.innerHTML = "Results: " + vagses;
        }, 600)
    }
}
plusOpe.addEventListener('click', (event) => {
    event.preventDefault();
    sumation();
})
minusOpe.addEventListener('click', (event) => {
    event.preventDefault();
    substraction();
})
multiOpe.addEventListener('click', (event) => {
    event.preventDefault();
    multiplication();
})
divideOpe.addEventListener('click', (event) => {
    event.preventDefault();
   division();
})
remainOpe.addEventListener('click', (event) => {
    event.preventDefault();
   remainder();
})
// functions 
