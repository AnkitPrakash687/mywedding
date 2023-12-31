import { parse } from 'csv-parse';
import fs from 'fs';
import { v4 as uuidv4 } from 'uuid';
import { stringify } from 'csv-stringify';

export default class ExcelService {
  path = './public/assets/mywedding.csv';
  
  listGuest = (data) => {
    let result = [];
    return new Promise((resolve, reject) => {
      fs.createReadStream(this.path)
        .pipe(parse({ delimiter: ',', from_line: 1 }))
        .on('data', function (row) {
          result.push(row);
        })
        .on('end', function () {
          resolve(result);
        })
        .on('error', function (error) {
          reject(error);
        });
    });
  };

  addUser = async ({ name, phoneNumber, email }) => {
    let csv = await this.listGuest();
    const id = csv.length;
    const token = uuidv4();
    console.log(token);
    csv.push([id, name, phoneNumber, email, uuidv4()]);
    const writableStream = fs.createWriteStream(this.path);
    const stringifier = stringify({ header: true, columns: csv[0] });
    csv.splice(1, id).forEach(row => {
      stringifier.write(row);
    })
    
 
    stringifier.pipe(writableStream);
  };
}
