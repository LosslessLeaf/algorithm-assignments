const factorialize = num => num === 0 || num === 1 ? 1 : num = num * factorialize(num - 1);


factorialize(5);