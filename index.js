const emoji = require('node-emoji');

let emjAr = []
function emoji(array) {
    for (i = 0; i < 10; i++){
      emjAr.push(emoji.random());
    }
}
