// FUNCTIONS
msg.addEventListener('input', () => {
  msg.value.split('').length > 0 ? send.style.width = '18%' : send.style.width = '0';
});

// send massage fun
function sendMsg() {
  const text = document.createElement('pre');
  let span = document.createElement('span');
  text.innerHTML = msg.value.trim();
  span.innerHTML = time();
  text.appendChild(span)
  area.appendChild(text);

}
// Reply Massages

function reply(massage, reply) {
  let span = document.createElement('span');
  const rep = document.querySelector('pre.reply').cloneNode(true);
  map.set(massage, reply);
  span.innerHTML = time();
  if (msg.value.toLowerCase().trim() == massage) {
    rep.textContent = map.get(massage);
    rep.appendChild(span)
    area.appendChild(rep);
  }

}

function un(massage) {
  const rep = document.querySelector('pre.reply').cloneNode(true);
  if (!map.has(massage.toLowerCase().trim())) {
    rep.innerHTML = `I'm Not Understand You?`;
    area.appendChild(rep);
    console.log(1)
  }
}

// Create Time In Massage
function time() {
  let h = new Date().getHours();
  let m = new Date().getMinutes();
  m = m < 10 ? `0${m}` : m;
  return h >= 12 ? `0${h - 12} : ${m} PM` : `${h} : ${m} AM`;
}
// Always Scroll Bottom To simulator Chat
function scroll_Bottom() {
  return area.scrollTop = area.scrollHeight;
}