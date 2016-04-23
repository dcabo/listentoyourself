A stupid hackathon implementation of [XKCD 481](https://xkcd.com/481/).

[Direct download of crx file](release/listentoyourself.crx)

Installation: in Chrome, choose Window > Extensions. Drag listentoyourself.crx into the page that appears.

###Implementation

Development based on [Chrome guide](https://developer.chrome.com/extensions/getstarted), using [content scripts](https://developer.chrome.com/extensions/content_scripts). See also [how to make your own text-replacing extension](http://9to5google.com/2015/06/14/how-to-make-a-chrome-extensions/).

Uses [Chrome i18n API](https://developer.chrome.com/extensions/i18n) to detect the tweet language.

###TODO

* Improve language detection (only seems to pick English now)
* Extend to other sites: Youtube, newspapers...
