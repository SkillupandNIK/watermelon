if (true) {
    console.log("condition executed");
}

let hour = 13;

if (hour > 12) {
    console.log("It is the pm");
}

var object = {};
console.log(typeof object);

var character = {
    name : "john doe",
    age : 25,
    display_info : function() {
        console.log(this.name);
        console.log(this.age);
    }
};

function character() {
        this.name = console.readLine();
        this.age = console.readLine();
    }

character.display_info();

//let c = new character();
//c.display_info();
console.log(character.age);

let tab = {
    test : "yo",
    test2 : "ahaha",
    test3 : "pour",
};

let tableau = [2, 56, 3939];

for (let index in tab) {
    console.log(index, tab[index]);
}

for (let value of    tableau) {
    console.log(value);
}