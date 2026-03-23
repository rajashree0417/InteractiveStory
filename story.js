export default function handler(req, res) {

  const genre = req.query.genre || "Adventure";

  const elements = ["mysterious object","strange sound","hidden door","glowing light","shadow figure"];
  const actions = ["appears suddenly","starts moving","glows brightly","whispers softly","vanishes quickly"];
  const tones = ["This is exciting!", "Something feels wrong...", "You laugh 😂", "Things are intense!", "You are curious!"];

  function random(arr){
    return arr[Math.floor(Math.random()*arr.length)];
  }

  const story = `You are in a ${genre.toLowerCase()} story. 
A ${random(elements)} ${random(actions)}. 

${random(tones)} 

What will you do next?`;

  const choices = ["Investigate 🔍","Run 🏃","Touch ✋","Ignore 😎","Follow 👣"];

  res.status(200).json({
    story: story,
    choices: choices.sort(() => 0.5 - Math.random()).slice(0,3)
  });
}