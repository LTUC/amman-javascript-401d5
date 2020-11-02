const inquirer = require('inquirer'); // library to get user input

const net = require('net'); // TCP library built into node

const client = new net.Socket();
const HOST = process.env.HOST || 'localhost';
const PORT = process.env.PORT || 4000;
let name = '';
const messages = [];
client.connect(PORT, HOST, () => {
  console.log('Client Connected');
  // 6
  client.on('data', (bufferData) => {
    console.log('THIS IS WHAT WE GET FROM THE SERVER', bufferData);
    const dataObj = JSON.parse(bufferData);
    messages.push(dataObj.payload);
    if (dataObj.event === 'message') {
      console.log(dataObj.payload);
      console.log('');
    }
  });

  function sendMessage(text) {
    const message = `[${name}]: ${text}`; // [mahmoud]: hi
    const event = JSON.stringify({ event: 'message', payload: message });
    client.write(event); // 4
  }

  async function getName() {
    const input = await inquirer.prompt([
      { name: 'name', message: 'What is your name?' },
    ]);
    name = input.name;
  }
  async function getInput() {
    const input = await inquirer.prompt([{ name: 'text', message: ' ' }]);
    sendMessage(input.text);
    getInput();
  }
  getName(); // 2
  getInput(); // 3
  client.on('error', (err) => console.log('Client Error', err.message));
});
