chrome.contextMenus.create({
    title: chrome.i18n.getMessage("contextMenuTitle") + ' "%s"',
    contexts: ["selection"],
    onclick: function(e) {
        var searchTerm = e.selectionText;
        chrome.tabs.create({
            url: "https://www.youtube.com/results?search_query=" + searchTerm
        });
    }
});
