module.exports = function toReadable(number) {
    const a0_19 = ["zero", "one", "two", "three", "four", "five", 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    const aTen = ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
    const a100 = ['hundred', 'thousand'];

    if (number < 20)
        return a0_19[number];

    // let sn = (number + "").split('');
    // let arrN = sn.map((str, index, arr) => parseInt(str));
    let len = (number + "").length;
    let ret = "";

    let dxx = (number - number % 100) / 100;
    number = number % 100;
    if (dxx != 0) {
        ret = a0_19[dxx] + " " + a100[0];
        // ret = a0_19[arrN[0]] + " " + a100[0];
        // arrN.shift();
    }
    if (number == 0)
        return ret;

    if (number < 20)
        return ret + " " + a0_19[number];
    else {
        let dx = (number - number % 10) / 10;
        let d = number % 10;
        if (ret.length > 0)
            ret += " ";
        // ret += aTen[arrN[0] - 2];
        ret += aTen[dx - 2];
        // if (arrN[1] != 0) {
        //     ret += " " + a0_19[arrN[1]];
        // }
        if (d != 0) {
            ret += " " + a0_19[d];
        }
        return ret;
    }

}

