// Highlight all of thw words over 8 characters long in the paragraph text (with a yellow background for example)

// source HTML = hightlight.html;

const paragraph = document.querySelector('p');
paragraph.innerHTML = paragraph.innerHTML.split(" ").map(word => {
    return word.length > 8 ? `<span style="background-color:yellow">${word}</span>` : word;
}).join(' ');