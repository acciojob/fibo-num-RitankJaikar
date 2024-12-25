function isPerfectSquare(x) {
    return x >= 0 && Math.sqrt(x) % 1 === 0;
}

function isFibonacci(num) {
    if (num < 0) return false;
    // Check if 5*n^2 + 4 or 5*n^2 - 4 is a perfect square
    return isPerfectSquare(5 * num * num + 4) || isPerfectSquare(5 * num * num - 4);
}

const input = parseInt(prompt("Enter a number"));
alert(isFibonacci(input)); 
