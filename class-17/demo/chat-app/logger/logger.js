const net = require('net');
const client = new net.Socket();
const HOST = process.env.HOST || 'localhost';
const PORT = process.env.PORT || 4000;
client.connect(PORT, HOST, () => {
  console.log('LOGGER CONNECTED');
  client.on('data', (data) => {
    //6
    const dataObj = JSON.parse(data);
    console.log(new Date().toLocaleString(), dataObj.event, dataObj.payload);
  });

  client.on('close', () => console.log('Connection closed!'));
  client.on('error', (err) => console.log('Logger Error', err.message));
});
