module.exports = function check(str, bracketsConfig) {
    // your solution
    const splitedStr = str.split("");
    const stack = [];
    let same = 0;

    if (str.length % 2 != 0) return false;

    for (let i = 0; i < splitedStr.length; i++) {
        for (let j = 0; j < bracketsConfig.length; j++) {
            if (
                splitedStr[i] == bracketsConfig[j][0] &&
                splitedStr[i] == bracketsConfig[j][1]
            ) {
                if (
                    !stack.length ||
                    stack[stack.length - 1] !== splitedStr[i]
                ) {
                    stack.push(splitedStr[i]);
                } else {
                    stack.pop();
                }
            } else if (splitedStr[i] == bracketsConfig[j][0]) {
                stack.push(splitedStr[i]);
            } else if (splitedStr[i] == bracketsConfig[j][1]) {
                if (
                    !stack.length ||
                    stack[stack.length - 1] != bracketsConfig[j][0]
                ) {
                    return false;
                } else {
                    stack.pop();
                }
            }
        }
    }

    return !stack.length ? true : false;
};
