const fruits = () => {
    if (true) {
        var fruits1 = 'apple';
        let fruits2 = 'banana';
        const fruits3 = 'kiwi';
        console.log(fruits2);
        console.log(fruits3);
    }
    console.log(fruits1);
}

fruits();

var x = 1;
let y = 3;
const z = 5;
{
    var x = 2;
    let y = 4;
    const z = 6;
    console.log(x);
    console.log(y);
    console.log(z);
}
console.log(x);
console.log(y);
console.log(z);

const anotherFunction = () => {
    for (let i = 0; i < 10; i++) {
        setTimeout(() => {
            console.log(i);
        }, 1000);
    }
}

anotherFunction();