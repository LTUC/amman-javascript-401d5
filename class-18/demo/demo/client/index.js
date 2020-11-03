const inquirer = require('inquirer');
const io = require('socket.io-client');
const slick = io.connect('http://localhost:4000/slick'); //2 connect to the slick namespace that was created in the slick file in the server

slick.on('connect', () => {
  // 3
  const messages = [];
  let name = '';
  let channel = 'general';
  let activeInput = true;
  slick.emit('join', channel); //4
  slick.on('joined', (joinedChannel) => {
    //7
    channel = joinedChannel;
    getInput();
  });
  slick.on('message', (payload) => {
    console.clear();
    messages.push(payload);
    messages.forEach((message) => {
      console.log(message);
    });
    console.log(' ');
    getInput();
  });
  async function getInput() {
    if (activeInput) {
      return;
    }
    activeInput = true;
    const response = await inquirer.prompt([
      { name: 'name', message: `%%%%%% ${channel}>` },
    ]);
    // join 401d5 ==> ['join','401d5]
    console.log('name');
    const command = response.name.toLowerCase().split(' ')[0];
    switch (command) {
      case 'quit':
        process.exit();
      case 'join':
        const room = response.name.split(' ')[1];
        activeInput = false;
        slick.emit('join', room);
        break;
      default:
        activeInput = false;
        slick.emit('message', `[${name}]: ${response.name}`);
        getInput();
      // break;
    }
  }
  async function getName() {
    console.clear();
    const input = await inquirer.prompt([
      { name: 'name', message: 'What is your name?' },
    ]);
    name = input.name;
    activeInput = false;
    getInput();
  }
  getName();
});
