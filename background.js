total_ads = 0, flag = 0, prev = 0, next = 0, chrome.runtime.onMessage.addListener((t, a) => {
    0 == flag ? (prev = t.data, flag = 1) : (next = t.data, flag = 0), prev != next && (total_ads += t.data), show_count = "", total_ads > 100 ? (show_count = "100+", total_ads = 101) : show_count = "" + total_ads, "content" === t.from && "show_ads_count" === t.subject && chrome.browserAction.setBadgeText({
        text: show_count
    }, function(t) {})
});

var enabled = true;
chrome.webRequest.onBeforeRequest.addListener(
	function(details) {
		if(enabled) {
			console.log("blocking:", details.url);
		}
		return {cancel: enabled };
	},
	{urls: blocked_domains},
	["blocking"]
);