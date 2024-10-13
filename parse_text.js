/** Determine how many round and geometric characters are within a word */
function roundAndSharpCount(word) {
    let roundedCount = 0;
    let geometricCount = 0;
    for (let i = 0; i < word.length; i++) {
        if (/[abcdegjmnopqrsuCDGJOQSU36890()@&~]/i.test(word[i])) {
            roundedCount++;
        } else {
            geometricCount++;
        }
    }
    return [roundedCount, geometricCount];
}

function testRoundAndSharpCount() {
    console.log(roundAndSharpCount("ooo"));
    console.log(roundAndSharpCount("Hello World!@#$%^&*()"));
    console.log(roundAndSharpCount("Hello World!@#$%^&*()ABCDEF"));
}

testRoundAndSharpCount();

function numUpperCaseAndLowerCase(word) {
    let upperCaseCount = 0;
    let lowerCaseCount = 0;
    for (let i = 0; i < word.length; i++) {
        if (word[i] === word[i].toUpperCase()) {
            upperCaseCount++;
        } else {
            lowerCaseCount++;
        }
    }
    return [upperCaseCount, lowerCaseCount];
}