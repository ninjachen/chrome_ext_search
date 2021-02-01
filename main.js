/**
 * params:
    word is what you selected in chrome
 */
deeplTranslate = function(word){
  var query = word.selectionText;
  chrome.tabs.create({url: "https://www.deepl.com/translator#en/zh/" + query});
};

chrome.contextMenus.create({
  title: "Search in Deepl",
  contexts:["selection"],
  onclick: deeplTranslate
});

// searchWikipedia = function(word){
//   var query = word.selectionText;
//   chrome.tabs.create({url: "https://en.wikipedia.org/w/index.php?search=" + query + "&title=Special%3ASearch&go=Go"});
// };

// chrome.contextMenus.create({
//   title: "Search in Wikipedia",
//   contexts:["selection"],
//   onclick: searchWikipedia
// });
