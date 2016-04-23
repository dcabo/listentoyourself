console.log("Setting up 'listen to yourself'...");

var lastText = '';

var intros = {
  'en': 'Oh, listen to yourself: ',
  'es': 'Oh, escúchate: '
}

var ok_fine = {
  'en': 'Up to you',
  'es': 'Tú verás'
}


var div = $('div.modal-tweet-form-container')
var form = div.find('form');
var button = form.find('.tweet-action');

button.on("click", function(event) {
  // Get the tweet text
  var text = form.find('.tweet-box').text();
  console.log("Oh, listen to yourself: "+text);

  // Are we trying to tweet the same text?
  if ( text === lastText ) {
    detectLanguageAndSayIt(text, function(text, language) {
      say(ok_fine[language], language);
    });

  } else {
    detectLanguageAndSayIt(text, function(text, language) {
      say(intros[language]+text, language);
    });

    // Don't let them tweet...
    event.stopImmediatePropagation()

    // ...but keep track of the message, in case the user insists.
    lastText = text;
  }
});


function detectLanguageAndSayIt(text, f) {
  // We try to detect the text language.
  // It only seems to detect english, maybe I'm doing something wrong, so
  // let's do this: if no language is detected let's assume it's Spanish
  var language = 'es';
  console.log("Detecting "+text);
  chrome.i18n.detectLanguage(text, function(result) {
    if ( result.languages.length > 0 ) {
      language = result.languages[0].language;
      console.log("Detected language "+language);
    }

    f(text, language);
  });
}

function say(text, language) {
  var msg = new SpeechSynthesisUtterance(text);
  msg.lang=language;  // Seems to pick Diego for Spanish
  window.speechSynthesis.speak(msg);
}
