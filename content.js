function renderReadingTime(article) {
    // If we weren't provided an article, we don't need to render anything.
    if (!article) {
        console.log("Failed to find article element.");
        return;
    }

    const text = article.textContent;
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

    // // Support for API reference docs
    // const heading = article.querySelector("h1");
    // // Support for article docs with date
    // const date = article.querySelector("time")?.parentNode;

//   (date ?? heading).insertAdjacentElement("afterend", badge);
    article.insertAdjacentElement("afterend", badge);
}

renderReadingTime(document.querySelector("h1"));
console.log("Hello world!")