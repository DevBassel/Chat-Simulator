const msg = document.querySelector('#msg');
const send = document.querySelector('[type=submit]');
const area = document.querySelector('article section:first-child')
let map = new Map();


send.addEventListener('click', (event) => {

  if (msg.value !== '') {
    sendMsg();
    reply('a7a', 'fuck you ;)');
    reply('do you love me', 'I love you');
    reply('fuck you', 'Fuck You Too');
    reply('really', 'really My Dear :)');
    reply('are you relationship', 'With You ;-)');
    reply('thank you', 'Take My Heart')
  }
  // unknown msgs rep 
  un(msg.value);
  event.preventDefault();
  msg.value = '';
  send.style.width = '0';
  scroll_Bottom();
});