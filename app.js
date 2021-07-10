const { createReadStream, utimes } = require(`fs`);

const stream = createReadStream(`./content/big2.txt`, { highWaterMark:90000 });

stream.on('data', (result)=>{
  console.log(result)
})

stream.on('error', (err) => console.log(error))