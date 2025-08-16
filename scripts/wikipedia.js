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
    const wordMatchRegExp = /[^\s]+/g;
    const words = [...article_text.matchAll(wordMatchRegExp)]
        .filter(match => /[a-zA-Z0-9]/.test(match[0]));
    // Only keep words with at least one letter or number
    // console.log("Words:", words);
    
    // Calculate the average characters per word
    const totalCharacters = words.reduce((sum, word) => sum + word[0].length, 0);
    const averageWordLength = totalCharacters / words.length;
    // console.log("Average word length:", averageWordLength);
    const baseWordLength = 5; // 5 letters
    const baseReadingSpeed = 200; // 200 words per minute
    
    // Adjust speed: longer words = slower reading, shorter words = faster reading
    const speedAdjustmentFactor = Math.pow(baseWordLength / averageWordLength, 0.3);
    const adjustedReadingSpeed = baseReadingSpeed * speedAdjustmentFactor;
    
    // console.log("Reading time (mins):", words.length / adjustedReadingSpeed)
    return Math.ceil(words.length / adjustedReadingSpeed);
})();

const heading_element = document.querySelector("h1");
const title_element = document.querySelector(".mw-page-title-main");
// title_element.textContent = "Boustrophedon abc def ghi jkl mno pqr stu vwx yz 123 456 789 0"

const badge_element = document.createElement("span");
badge_element.classList.add("reading-time-badge");
badge_element.textContent = `🕒 ${reading_time} min read`;
heading_element.appendChild(badge_element);

// Apply layout styles
heading_element.style.display = "flex";
heading_element.style.alignItems = "baseline"; // vertical centering
heading_element.style.gap = "0.5em";

// Constrain title text width
title_element.style.maxWidth = "70%"; // adjust % as desired

// Ensure badge keeps its own look
badge_element.style.flexShrink = "0";
badge_element.style.fontSize = "1.2rem";
badge_element.style.fontWeight = "normal";
badge_element.style.fontFamily = "Segoe UI Light, Helvetica Neue, Helvetica, Arial, sans-serif";
badge_element.style.fontWeight = "300"; // light

// title_element.insertAdjacentElement("afterend", badge);