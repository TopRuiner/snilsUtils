function parseSnils(snilsString) {
    regex1 = /^\d{3}[-]\d{3}[-]\d{3}\s\d{2}$/g;
    regex2 = /^\d{11}$/g;
    if (regex1.test(snilsString)) {
        return snilsString;
    }
    else if (regex2.test(snilsString)) {
        parsedSnilsString = snilsString.substring(0, 3) + "-" + snilsString.substring(3, 6) + "-" + snilsString.substring(6, 9) + " " + snilsString.substring(9, 11);
        return parsedSnilsString;
    }
    else {
        return false;
    }

}

module.exports = parseSnils 