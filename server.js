const express = require("express");
const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.static(__dirname));

// Random helper
function random(arr){
  return arr[Math.floor(Math.random()*arr.length)];
}

// Story generator (backend)
app.get("/api/story", (req, res) => {

  const genre = req.query.genre || "Adventure";

  const elements = ["mysterious object","strange sound","hidden door","glowing light","shadow figure"];
  const actions = ["appears suddenly","starts moving","glows brightly","whispers softly","vanishes quickly"];
  const tones = ["This is exciting!", "Something feels wrong...", "You laugh at the situation 😂", "Things are getting intense!", "You are confused but curious!"];

  const story = `You are in a ${genre.toLowerCase()} story. 
A ${random(elements)} ${random(actions)}. 

${random(tones)} 

What will you do next?`;

  const choices = ["Investigate 🔍","Run away 🏃","Touch it ✋","Ignore it 😎","Follow it 👣"];

  res.json({
    story: story,
    choices: choices.sort(() => 0.5 - 0.5).slice(0,3)
  });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});