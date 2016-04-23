console.log("Setting up 'listen to yourself'...");

var div = $('div.modal-tweet-form-container')
var form = div.find('form');

$('div.modal-tweet-form-container .tweet-action').on("click", function() {
  console.log("Oh, listen to yourself...");
  console.log(form.attr("action"));
  form.attr("action", "");
  console.log(form.attr("action"));
});