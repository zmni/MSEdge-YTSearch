chrome.contextMenus.create({
    title: chrome.i18n.getMessage("contextMenuTitle") + ' "%s"',
    contexts: ["selection"],
    onclick: (e) => {
        const term = decodeURIComponent(e.selectionText).replace(/\s+/g, "+");
        chrome.tabs.create({
            url: "https://www.youtube.com/results?search_query=" + term,
        });
    },
});
