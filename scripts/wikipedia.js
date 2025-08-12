function renderReadingTime(titleElement, articleElement) {
    const text = articleElement.textContent;
    console.log(JSON.stringify(text));
    // so this is the length of the TITLE, not the article contents.
    // That's why the word count only ever seems to be 1 or 2. --gmf
    console.log(text.length)
    const wordMatchRegExp = /[^\s]+/g; // Regular expression
    const words = text.matchAll(wordMatchRegExp);
    console.log(words.length)
    // matchAll returns an iterator, convert to array to get word count
    const wordCount = [...words].length;
    console.log(wordCount)
    const readingTime = Math.round(wordCount / 200);
    const badge = document.createElement("p");
    // Use the same styling as the publish information in an article's header
    badge.classList.add("color-secondary-text", "type--caption");
    badge.textContent = `⏱️ ${readingTime} min read`;

    titleElement.insertAdjacentElement("afterend", badge);
}

renderReadingTime(document.querySelector("#firstHeading"), document.querySelector("#mw-content-text"));
console.log("Hello world!")