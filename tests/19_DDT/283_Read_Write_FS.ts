import fs from 'fs';
import path from 'path';

const filepath =path.join(__dirname,'280_Users.json');
console.log('file path:',filepath);

const fileData=fs.readFileSync(filepath,'utf-8');
const userDataJSObject = JSON.parse(fileData);
console.log(userDataJSObject);

console.log(userDataJSObject.username);
console.log(userDataJSObject.password);
// Writing Data to a JSON File

const user ={
    name:"pramod",
  role: "QA Trainer"
};

const jsonData = JSON.stringify(user);

fs.writeFileSync("output.json",jsonData);

console.log("JSON file created successfully");