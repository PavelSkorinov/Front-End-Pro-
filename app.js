const num = +prompt('How many levels high should be the tree?');
let result = '';
    for (let i = 0; i < num; i++) {
        let star = '*'.repeat(2 * i + 1);
        let spaceBefore = ' '.repeat(num - i - 1);
        result += spaceBefore + star + `\n`;
    };
    alert(result);