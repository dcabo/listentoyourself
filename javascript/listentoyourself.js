console.log("Setting up 'listen to yourself'...");

var div = $('div.modal-tweet-form-container')
var form = div.find('form');
var button = form.find('.tweet-action');

button.on("click", function(event) {
  console.log("Oh, listen to yourself...");

  // Try to detect the text language
  var inputText = "Listen to yourself...";
  chrome.i18n.detectLanguage(inputText, function(result) {
    var outputLang = "Detected Language: ";
    var outputPercent = "Language Percentage: ";
    for(i = 0; i < result.languages.length; i++) {
      outputLang += result.languages[i].language + " ";
      outputPercent +=result.languages[i].percentage + " ";
    }
    console.log(outputLang + "\n" + outputPercent + "\nReliable: " + result.isReliable);
  });

  // Say something
  // var msg = new SpeechSynthesisUtterance('Oh, listen to yourself...');
  // msg.lang='en-US';
  var msg = new SpeechSynthesisUtterance('Oh, escúchate...');
  msg.lang='es';  // Seems to pick Diego

  window.speechSynthesis.speak(msg);

  // Don't let them tweet
  event.stopImmediatePropagation()
});