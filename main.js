import inquirer from "inquirer";
class Player {
    name;
    fuel = 100;
    constructor(name) {
        this.name = name;
    }
    fuelDecrease() {
        let fuel = this.fuel - 25;
        this.fuel = fuel;
    }
    fuelIncrease() {
        this.fuel = 100;
    }
}
class Opponent {
    name;
    fuel = 100;
    constructor(name) {
        this.name = name;
    }
    fuelDecrease() {
        let fuel = this.fuel - 25;
        this.fuel = fuel;
    }
}
let player = await inquirer.prompt([{
        name: "name",
        type: "input",
        message: "Please Enter Your Name:"
    }
]);
let opponent = await inquirer.prompt([{
        name: "select",
        type: "list",
        message: "Select Your Opponent",
        choices: ["Ghoul", "Alien", "Zombie"]
    }]);
let p1 = new Player(player.name);
let o1 = new Opponent(opponent.select);
do {
    //ghoul
    if (opponent.select == "Ghoul") {
        let ask = await inquirer.prompt([{
                name: "opt",
                type: "list",
                message: "What would you like to do?",
                choices: ["Attack", "Drink potion", "Run for your life.."]
            }]);
        if (ask.opt == "Attack") {
            let num = Math.floor(Math.random() * 2);
            if (num > 0) {
                p1.fuelDecrease();
                console.log(`${p1.name} fuel is ${p1.fuel}`);
                console.log(`${o1.name} fuel is ${o1.fuel}`);
                if (p1.fuel <= 0) {
                    console.log("You Loose, Better Luck Next Time");
                    process.exit();
                }
            }
            if (num <= 0) {
                o1.fuelDecrease();
                console.log(`${p1.name} fuel is ${p1.fuel}`);
                console.log(`${o1.name} fuel is ${o1.fuel}`);
                if (o1.fuel <= 0) {
                    console.log("You Win");
                    process.exit();
                }
            }
        }
        if (ask.opt == "Drink potion") {
            p1.fuelIncrease();
            console.log(`You Drank Health potion Your Fuel is ${p1.fuel}`);
        }
        if (ask.opt == "Run for your life..") {
            console.log("You Ran Away,You've Lost!!");
            process.exit;
        }
    }
    //alien
    if (opponent.select == "Alien") {
        let ask = await inquirer.prompt([{
                name: "opt",
                type: "list",
                message: "What would you like to do?",
                choices: ["Attack", "Drink potion", "Run for your life.."]
            }]);
        if (ask.opt == "Attack") {
            let num = Math.floor(Math.random() * 2);
            if (num > 0) {
                p1.fuelDecrease();
                console.log(`${p1.name} fuel is ${p1.fuel}`);
                console.log(`${o1.name} fuel is ${o1.fuel}`);
                if (p1.fuel <= 0) {
                    console.log("You Loose, Better Luck Next Time");
                    process.exit();
                }
            }
            if (num <= 0) {
                o1.fuelDecrease();
                console.log(`${p1.name} fuel is ${p1.fuel}`);
                console.log(`${o1.name} fuel is ${o1.fuel}`);
                if (o1.fuel <= 0) {
                    console.log("You Win");
                    process.exit();
                }
            }
        }
        if (ask.opt == "Drink potion") {
            p1.fuelIncrease();
            console.log(`You Drank Health potion Your Fuel is ${p1.fuel}`);
        }
        if (ask.opt == "Run for your life..") {
            console.log("You Ran Away,You've Lost!!");
            process.exit;
        }
    }
    //zombie
    if (opponent.select == "Zombie") {
        let ask = await inquirer.prompt([{
                name: "opt",
                type: "list",
                message: "What would you like to do?",
                choices: ["Attack", "Drink potion", "Run for your life.."]
            }]);
        if (ask.opt == "Attack") {
            let num = Math.floor(Math.random() * 2);
            if (num > 0) {
                p1.fuelDecrease();
                console.log(`${p1.name} fuel is ${p1.fuel}`);
                console.log(`${o1.name} fuel is ${o1.fuel}`);
                if (p1.fuel <= 0) {
                    console.log("You Loose, Better Luck Next Time");
                    process.exit();
                }
            }
            if (num <= 0) {
                o1.fuelDecrease();
                console.log(`${p1.name} fuel is ${p1.fuel}`);
                console.log(`${o1.name} fuel is ${o1.fuel}`);
                if (o1.fuel <= 0) {
                    console.log("You Win");
                    process.exit();
                }
            }
        }
        if (ask.opt == "Drink potion") {
            p1.fuelIncrease();
            console.log(`You Drank Health potion Your Fuel is ${p1.fuel}`);
        }
        if (ask.opt == "Run for your life..") {
            console.log("You Ran Away,You've Lost!!");
            process.exit;
        }
    }
} while (true);
