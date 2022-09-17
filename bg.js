// Context menu create
chrome.contextMenus.create({
    id: "searchOnYouTube",
    title: chrome.i18n.getMessage("contextMenuTitle") + ' "%s"',
    contexts: ["selection"],
});

// Context menu click handler
chrome.contextMenus.onClicked.addListener((e) => {
    chrome.tabs.create({
        url: "https://www.youtube.com/results?search_query=" + decodeURIComponent(e.selectionText).replace(/\s+/g, "+"),
    });
});
