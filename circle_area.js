function circleArea(radius) {
    return Math.PI * Math.pow(radius, 2)
}
const args = process.argv.slice(2);
const radius = parseFloat(args[0]);
if (!isNaN(radius)) {
    const area = circleArea(radius);
    console.log(`Yarıçapı ${radius} olan dairenin alanı: ${area}`);
} else {
    console.log("Lütfen geçerli bir yarıçap değeri girin.");
}
