// WHILE LOOP EXAMPLE

// SAMPLE OUTPUT:

// 2
// 4
// 8
// 16
// 32
// 64
// 128
// 256
// 512
// 1024
// 2048
// 4096
// 8192
// 16384
// 32768
// 65536

i = 2;

while (i <= 65536) {
    console.log(i);
    i += i;
}

// DO WHILE EXAMPLE (Ice Cream)

var allCones = Math.floor(Math.random() * 50) + 50;

do {
    var soldCones = Math.floor(Math.random() * 5) + 1;
    if (soldCones > allCones) {
        console.log("Cannot sell you " + soldCones + " I only have " + allCones);
    } else if (soldCones < allCones) {
        allCones -= soldCones;
        console.log(soldCones + " cones sold");
    } else if (allCones == soldCones) {
        allCones -= soldCones;
        console.log("Yay! I sold them all!");
    }
} while (allCones > 0);