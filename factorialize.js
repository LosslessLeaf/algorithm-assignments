// const factorialize = num => num === 0 || num === 1 ? 1 : num = num * factorialize(num - 1);

function factorialize(num) {
    let factorial = num;
    let updater = num;
    if (num === 0 || num === 1) {
        console.log(1);
        return 1;
    }
    else {
        for (let i = 1; i < num; i++) {
            updater -= 1;
            factorial *= updater;
        }

        console.log(factorial);
        return factorial;
    }

}

factorialize(12);