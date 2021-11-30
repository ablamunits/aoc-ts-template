import * as fs from 'fs';
import * as fsExtra from 'fs-extra';

const [newSolutionDir] = process.argv.slice(2);

if (!newSolutionDir) {
    console.log('Please provide a directory name for the new puzzle. Example: yarn clone day2')
    process.kill(0);
}

const cwd = process.cwd();

const newPath = `${cwd}/src/${newSolutionDir}`;
const TEMPLATES_SRC = `${cwd}/src/template`;

if (!fs.existsSync(newPath)) {
    fs.mkdirSync(newPath);
    fsExtra.copy(TEMPLATES_SRC, newPath);
    console.log(`Copied template into ${newPath}`)
} else {
    console.log(`Directory ${newPath} already exists.`);
}
