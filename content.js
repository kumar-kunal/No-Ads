function ad_blocker() {
    if (ads_queries = document.querySelectorAll('[id^="google"]'), ads_queries_class = document.querySelectorAll('[class^="Google"]'), counter = 0, ads_queries.length > 0)
        for (ad of ads_queries) counter++, ad.style.display = "none";
    if (ads_queries_class.length > 0)
        for (ad of ads_queries_class) counter++, ad.style.display = "none";
    return counter
}
ads_count = 0, setInterval(function() {
    ads_count = ad_blocker();
    try {
        chrome.runtime.sendMessage({
            from: "content",
            subject: "show_ads_count",
            data: ads_count
        })
    } catch (e) {}
}, 1e3);