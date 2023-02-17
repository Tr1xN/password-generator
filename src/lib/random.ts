export function getRandomNumber(min: number, max: number) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min)
}

export function getRandomDigit() {
    return getRandomNumber(0, 9)
}

export function getRandomLowercaseLetter() {
    return 'abcdefghijklmnopqrstuvwxyz'[getRandomNumber(0, 25)]
}

export function getRandomUppercaselLetter() {
    return getRandomLowercaseLetter().toUpperCase();
}

export function getRandomSpecialChar() {
    return '!@#$%^&*'[getRandomNumber(0, 7)]
}


function shuffle(string: string) {
    var a = string.split(""),
        n = a.length;

    for (var i = n - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var tmp = a[i];
        a[i] = a[j];
        a[j] = tmp;
    }
    return a.join("");
}

type passwordOptions = {
    special: boolean;
    digit: boolean;
    uppercase: boolean;
    lowercase: boolean;
}

type OptionsLength = {
    special: number;
    digit: number;
    uppercase: number;
    lowercase: number;
}

export function generatePassword(length: number, options: passwordOptions) {
    if (options.special == false && options.digit == false && options.uppercase == false && options.lowercase == false) {
        options.lowercase = true;
    }

    let optionsLength: OptionsLength = { special: 0, digit: 0, uppercase: 0, lowercase: 0 };

    optionsLength.special = getRandomNumber(Number(options.special), Math.floor(Number(options.special) / Object.values(options).filter((e) => e == true).length * length));
    optionsLength.digit = getRandomNumber(Number(options.digit), Math.floor(Number(options.digit) / Object.values(options).filter((e) => e == true).length * length));
    optionsLength.uppercase = getRandomNumber(Number(options.uppercase), Math.floor(Number(options.uppercase) / Object.values(options).filter((e) => e == true).length * length));
    optionsLength.lowercase = getRandomNumber(Number(options.lowercase), Math.floor(Number(options.lowercase) / Object.values(options).filter((e) => e == true).length * length));

    if (Object.values(optionsLength).reduce((a, b) => a + b, 0) < length) {
        if (options.lowercase) {
            optionsLength.lowercase += length - Object.values(optionsLength).reduce((a, b) => a + b, 0);
        }
        else if (options.uppercase) {
            optionsLength.uppercase += length - Object.values(optionsLength).reduce((a, b) => a + b, 0);
        }
        else if (options.digit) {
            optionsLength.digit += length - Object.values(optionsLength).reduce((a, b) => a + b, 0);
        }
        else if (options.special) {
            optionsLength.special += length - Object.values(optionsLength).reduce((a, b) => a + b, 0);
        }
    }

    let password: string = '';

    if (options.lowercase) {
        for (let i = 0; i < optionsLength.lowercase; i++) {
            password += getRandomLowercaseLetter();
        }
    }
    if (optionsLength.uppercase) {
        for (let i = 0; i < optionsLength.uppercase; i++) {
            password += getRandomUppercaselLetter();
        }
    }
    if (optionsLength.digit) {
        for (let i = 0; i < optionsLength.digit; i++) {
            password += getRandomDigit();
        }
    }
    if (optionsLength.special) {
        for (let i = 0; i < optionsLength.special; i++) {
            password += getRandomSpecialChar();
        }
    }

    return shuffle(password)
}   