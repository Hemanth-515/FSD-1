import fs from 'fs';
const data='Hello,this is a sample text to demonstrate file operation in node.js';
fs.writeFileSync("sample2.txt",data,"utf-8");
const readData=fs.readFileSync("sample2.txt","utf-8");
console.log(readData);
const data1='\nhello world';
fs.appendFileSync("sample2.txt",data1,"utf-8");
