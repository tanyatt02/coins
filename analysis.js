var minimist = require('minimist');
const fs = require('fs');

var argv = minimist(process.argv.slice(2), {

});

if (argv._.length == 0){console.log('Укажите название файла для анализа (возможно, log.txt)')}
else{
//console.dir(argv);
const path = require('path');
const {
    dirname
} = require('path');

let file = path.join(__dirname, argv._[0]);


let str;

(async() =>
await fs.readFile(file, "utf8", (error, data) => {
    if (error) console.log('ERROR = ', error)
    str = data;
    console.log(str);
    let arr = str.split('');
    let win = 0;
    let losing = 0;
    let serWin = 0;
    let serLos = 0;
    let tekSerWin = 0;
    let tekSerLos = 0;
    for(item of arr){
        
        if(item == '1'){
            win++;
            tekSerWin++;
            if (tekSerLos>serLos){serLos = tekSerLos};
            tekSerLos=0;
        } else {
            losing++;
            tekSerLos++;
            if (tekSerWin>serWin){serWin = tekSerWin};
            tekSerWin=0;
        }
        if (tekSerLos>serLos){serLos = tekSerLos};
        if (tekSerWin>serWin){serWin = tekSerWin};
        
    };
    
    if(losing != 0){console.log('Соотношение побед и поражений = ', win/losing)} else {
        console.log('Побед = ', win);
        console.log('Поражений = ', losing);
    }
    if(serLos != 0){console.log('Соотношение самых длинный серий побед и поражений = ', serWin/serLos)} else {
        console.log('Самая длинная серия побед = ', serWin);
        console.log('Самая длинная серия поражений = ', losing);
    }
    
}))();
}



