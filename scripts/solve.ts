const [solutionDir] = process.argv.slice(2);

if (!solutionDir) {
    console.log('Please provide the solution directory. Example: yarn solve day2');
    process.kill(0);
}

const cwd = process.cwd();
const dailyPuzzle = require(`${cwd}/src/${solutionDir}`);

console.log(`Solving puzzle: ${solutionDir}`);

// Uncomment this is you want to log your input. It might be huge.
// console.log('Your input:\n', dailyPuzzle.puzzleInput || `<NO INPUT! Did you forget to copy it?>`)

console.log('Solution:\n');
console.log(dailyPuzzle.solve(dailyPuzzle.puzzleInput) || `<EMPTY SOLUTION>`);
