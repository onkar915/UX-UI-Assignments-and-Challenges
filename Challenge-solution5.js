function binary(inputString) {
    let binaryString = "";
    for (let i = 0; i < inputString.length; i++) {
        if (Number(inputString[i]) < 5) {
            binaryString = binaryString.concat("0");
        } else if (Number(inputString[i]) > 4) {
            binaryString = binaryString.concat("1");
        }
    }
    console.log(binaryString);
}
