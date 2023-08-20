'use strict';

const ignoreConfig = [];

function SetIgnoreConfig(ignoreLines) {
        ignoreLines.forEach((s) => {
        ignoreConfig.push(new RegExp(s, "i"));
    });
}

function IgnoreLine(line) {
    let hasMatch = false;
    ignoreConfig.forEach((regex) => {
        if (regex.test(line)) {
            hasMatch = true;
        }
    });
    return hasMatch;
}
module.exports = { IgnoreLine, SetIgnoreConfig };