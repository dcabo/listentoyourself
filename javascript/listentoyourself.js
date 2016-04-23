console.log("Setting up 'listen to yourself'...");

var intros = {
  'en': 'Oh, listen to yourself: ',
  'es': 'Oh, escúchate: '
}

var div = $('div.modal-tweet-form-container')
var form = div.find('form');
var button = form.find('.tweet-action');

button.on("click", function(event) {
  // Get the tweet text
  var text = form.find('.tweet-box').text();
  console.log("Oh, listen to yourself: "+text);

  // We try to detect the text language.
  // It only seems to detect english, maybe I'm doing something wrong, so
  // let's do this: if no language is detected let's assume it's Spanish
  var language = 'es';
  chrome.i18n.detectLanguage(text, function(result) {
    if ( result.languages.length > 0 ) {
      language = result.languages[0].language;
      console.log("Detected language "+language);
    }

    // Say something
    var msg = new SpeechSynthesisUtterance(intros[language]+text);
    msg.lang=language;  // Seems to pick Diego for Spanish
    window.speechSynthesis.speak(msg);
  });

  // Don't let them tweet
  event.stopImmediatePropagation()
});