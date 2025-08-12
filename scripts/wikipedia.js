const article_text = (() => {
    const article_element = document.querySelector("#mw-content-text");
    const exclude_element_tags = [
        "noscript",
        "style",
        ".shortdescription",
        ".side-box",
        ".external.text",
        ".reflist",
        ".reference",
        ".printfooter",
        ".noprint",
        ".mw-editsection-bracket",
        "#setindexbox",
        "[title='Edit section: References']"
    ]

    const filter = (element) => {
        if (exclude_element_tags.some(tag => element.matches(tag))) {
            return true;
        }
        return false;
    }

    return GetTextContent(article_element, false, filter)
})()

const reading_time = (() => {
    const wordMatchRegExp = /[^\s]+/g; // Regular expression
    const words = article_text.matchAll(wordMatchRegExp);
    const wordCount = [...words].length;
    return Math.round(wordCount / 200); // Assuming average reading speed of 200 words per minute
})();

const title_element = document.querySelector("h1");

const badge = document.createElement("p");
// Use the same styling as the publish information in an article's header
badge.classList.add("color-secondary-text", "type--caption");
badge.textContent = `⏱️ ${reading_time} min read`;

title_element.insertAdjacentElement("afterend", badge);