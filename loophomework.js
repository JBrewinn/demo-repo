// Create a while loop that will print all the numbers from 1 to 250, console logging "ESKETIT" every 7 digits and "OOH" every 5 digits. Every multiple that is the same between 7 and 5, log "GUCCI GANG" 


// var i = 1;

// while (i <= 250) {
//     if (i%35 == 0) {
//         console.log("GUCCI GANG");
//     } else if (i%5 == 0) {
//         console.log("OOH");
//     } else if (i%7 == 0) {
//         console.log("ESKETIT");
//     } else console.log(i);
//     i++;
// }

// Create a Do While loop that will have two fighters battle to see who wins (both start at 100 health and damage is randomized from 1 to 25 every iteration)

var goblinHealth = 100;
var dwarfHealth = 100;

do {
    var goblinDamage = Math.floor(Math.random() * 25) + 1;
    var dwarfDamage = Math.floor(Math.random() * 25) + 1;
    if (goblinDamage > dwarfHealth) {
        dwarfHealth = 0;
        console.log("Goblin did " + goblinDamage + " damage. " + "Dwarf has " + dwarfHealth + " health left.");
        console.log("Overkill!! Goblin Wins!");
        break;
    } else if (goblinDamage < dwarfHealth) {
        dwarfHealth -= goblinDamage;
        console.log("Goblin did " + goblinDamage + " damage. " + "Dwarf has " + dwarfHealth + " health left.");
    } else if (goblinDamage == dwarfHealth) {
        dwarfHealth -= goblinDamage;
        console.log("Goblin did " + goblinDamage + " damage. " + "Dwarf has " + dwarfHealth + " health left.");
        console.log("Goblin Wins!");
        break;
    };
    if (dwarfDamage > goblinHealth) {
        goblinHealth = 0;
        console.log("Dwarf did " + dwarfDamage + " damage. " + "Goblin has " + goblinHealth + " health left.")
        console.log("Overkill!! Dwarf Wins!");
        break;
    } else if (dwarfDamage < goblinHealth) {
        goblinHealth -= dwarfDamage;
        console.log("Dwarf did " + dwarfDamage + " damage. " + "Goblin has " + goblinHealth + " health left.");
    } else if (dwarfDamage == goblinHealth) {
        goblinHealth -= dwarfDamage;
        console.log("Dwarf did " + dwarfDamage + " damage. " + "Goblin has " + goblinHealth + " health left.")
        console.log("Dwarf Wins!");
        break;
    };
} while (goblinHealth > 0 || dwarfHealth > 0);