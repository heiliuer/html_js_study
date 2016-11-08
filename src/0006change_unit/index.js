var program = require('commander');

program
    .version('0.0.1')
    .option('-p, --pr <>', '将设计稿的px换算为原型的rem')
    .parse(process.argv);

if (program.pr) {
    console.log((parseFloat(program.pr) * 0.05036).toFixed(2));
}