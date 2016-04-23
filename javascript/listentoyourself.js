console.log("Setting up 'listen to yourself'...");

var div = $('div.modal-tweet-form-container')
var form = div.find('form');
var button = form.find('.tweet-action');

button.on("click", function(event) {
  console.log("Oh, listen to yourself...");

  // Say something
  // var msg = new SpeechSynthesisUtterance('Oh, listen to yourself...');
  // msg.lang='en-US';
  var msg = new SpeechSynthesisUtterance('Oh, escúchate...');
  msg.lang='es';

  window.speechSynthesis.speak(msg);

  // Don't let them tweet
  event.stopImmediatePropagation()
});