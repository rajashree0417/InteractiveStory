let storyParts = [
    "Once upon a time, there was a brave hero.",
    "The hero faced many challenges on the journey.",
    "Finally, the hero achieved their goal and lived happily ever after."
];

let index = 0;

function nextPart() {
    if(index < storyParts.length) {
        document.getElementById("story-text").innerText = storyParts[index];
        index++;
    } else {
        document.getElementById("story-text").innerText = "The End.";
    }
}