var Promise = require("bluebird");
const fs = require('fs')
const chalk = require('chalk');

function drawCoin  ()  {
    let res = (Math.floor(Math.random() * Math.floor(2))) 
    if (!res)
    {   if(res % 2 ==0)
        {console.log(chalk.greenBright.bgMagentaBright( '   _  ',`\n`,`/_\u03C8_\u005C`,`\n`,'\u005C _ /',`\n`,'      '))} else {
          console.log(chalk.magentaBright.bgYellowBright( '   _  ',`\n`,`/_\u03C8_\u005C`,`\n`,'\u005C _ /',`\n`,'      '))  
        }
    }
    
    else{
        if(res % 2 ==0)
        {console.log(chalk.greenBright.bgMagentaBright('   _  ','\n',`/_1_\u005C`,`\n`,'\u005C _ /',`\n`,'      '))} else {
          console.log(chalk.magentaBright.bgYellowBright('   _  ','\n',`/_1_\u005C`,`\n`,'\u005C _ /',`\n`,'      '))
        }
   }
    return res
};

 var readline = require('readline');
 var rl = readline.createInterface({
 input: process.stdin, // РІРІРѕРґ РёР· СЃС‚Р°РЅРґР°СЂС‚РЅРѕРіРѕ РїРѕС‚РѕРєР°
 output: process.stdout // РІС‹РІРѕРґ РІ СЃС‚Р°РЅРґР°СЂС‚РЅС‹Р№ РїРѕС‚РѕРє
 });
//let res; 



async function party(answer,i) {
    return new Promise(resolve => {
        //rl.question(str, answer => {
            let res=0;
            let str='';
            let answerStr=(answer>1)?'решка':'орел'
            setTimeout(()=>{console.log('Ваш выбор ' + answerStr)},1000+i*5500);
            setTimeout(()=>{drawCoin()},1100+i*5500)
            setTimeout(()=>{
                console.clear()},2000+i*5500)
            setTimeout(()=>{
                console.log('Ваш выбор ' + answerStr);
                drawCoin()},2100+i*5500)
            setTimeout(()=>{
                console.clear()},3000+i*5500)
            setTimeout(()=>{
                console.log('Ваш выбор ' + answerStr);
                res = drawCoin()},3100+i*5500)
            setTimeout(()=>{ let resOfGame = ((res+1) == answer)?'Вы        победили!!!':'Вы проиграли...'
                console.log(resOfGame)},4200+i*5500)
            setTimeout(()=>{ fs.readFile("log.txt",                         "utf8",(error,data) => {
                    if(error)console.log('ERROR = ',error)
                    str = data
                });
                },4210+i*5500)
            setTimeout(()=>{
                if((res+1) == answer){str=str+'1'} else {str=str+'0'};
                
                fs.writeFile('log.txt',str, (error) => {
                    if(error)console.log('ERROR = ',error)
                })},4220+i*5500)
            resolve(res);// });
            
    });
}
async function main(i) {
    let answer = await party(strI[i],i);
    return answer
};
let strI=[]
let strRes = '';
fs.writeFile('log.txt','', (error) => {
    if(error)console.log('ERROR = ',error)
});
(async () => await rl.question('Введите результаты серии бросков желаемой длины ( 1 - орел, 2 - решка ) : ', answer => {
    strRes=answer;
    strI = strRes.split('')
    let i=0
    Promise.each(strI,async function(item) {
////for (i of arrI){
        let answer = await main(i);
        i++
        
        })
    rl.close()
})
)();






            


