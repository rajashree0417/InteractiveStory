// GENRES
const genres = [
  "Adventure","Horror","SciFi","Fantasy","Mystery","Comedy",
  "Romance","Superhero","Detective","Magical","Pirate","TimeTravel"
];

// STATE
let currentGenre = "";
let iteration = 0;
const maxIterations = 5;

const storyText = document.getElementById("story-text");
const choicesDiv = document.getElementById("choices");

// BACKGROUNDS
const genreBackgrounds = {
  Adventure: "linear-gradient(to right,#a8e6cf,#dcedc1)",
  Horror: "linear-gradient(to right,#232526,#414345)",
  SciFi: "linear-gradient(to right,#0f0c29,#302b63,#24243e)",
  Fantasy: "linear-gradient(to right,#ffecd2,#fcb69f)",
  Mystery: "linear-gradient(to right,#3a1c71,#d76d77,#ffaf7b)",
  Comedy: "linear-gradient(to right,#f7971e,#ffd200)",
  Romance: "linear-gradient(to right,#ff9a9e,#fad0c4)",
  Superhero: "linear-gradient(to right,#56ab2f,#a8e063)",
  Detective: "linear-gradient(to right,#000428,#004e92)",
  Magical: "linear-gradient(to right,#c9ffbf,#ffafbd)",
  Pirate: "linear-gradient(to right,#1a2a6c,#b21f1f,#fdbb2d)",
  TimeTravel: "linear-gradient(to right,#0f2027,#203a43,#2c5364)"
};

// TYPING EFFECT (FIXED)
function typeText(text) {
  storyText.innerHTML = "";
  let i = 0;

  const interval = setInterval(() => {
    storyText.innerHTML += text.charAt(i);
    i++;
    if (i >= text.length) clearInterval(interval);
  }, 20);
}

// RANDOM
function random(arr){
  return arr[Math.floor(Math.random()*arr.length)];
}

// STORY GENERATOR
function generateStory(genre){

  const elements = {
    Adventure: ["jungle","river","cave","treasure","map","animal","ruins"],
    Horror: ["ghost","shadow","door","whisper","dark room","mirror","footsteps"],
    SciFi: ["robot","AI","portal","spaceship","laser","code","planet"],
    Fantasy: ["dragon","magic","castle","spell","fairy","wizard","crystal"],
    Mystery: ["clue","letter","secret","key","shadow","detective","map"],
    Comedy: ["banana","pie","cat","laugh","weird hat","confusion","dance"],
    Romance: ["letter","flower","music","smile","secret admirer","sunset"],
    Superhero: ["power","villain","city","rescue","mask","mission"],
    Detective: ["case","suspect","evidence","clue","crime","interrogation"],
    Magical: ["spell","portal","cat","wand","sparkle","potion"],
    Pirate: ["ship","treasure","map","island","captain","parrot"],
    TimeTravel: ["portal","future","past","clock","timeline","machine"]
  };

  const actions = [
    "suddenly appears",
    "starts glowing",
    "makes a strange sound",
    "moves on its own",
    "begins to shake",
    "whispers something weird",
    "does something unexpected"
  ];

  const tone = [
    "You feel excited!",
    "This feels suspicious...",
    "Something funny just happened 😂",
    "This is getting intense!",
    "You can't believe this!",
    "Things just got interesting!"
  ];

  const object = random(elements[genre]);
  const action = random(actions);

  return `You are in a ${genre.toLowerCase()} situation. 
A ${object} ${action}. 

${random(tone)} 

What will you do next?`;
}

// CHOICES
function generateChoices(){
  const choicesPool = [
    "Investigate 🔍",
    "Run away 🏃",
    "Touch it ✋",
    "Talk to it 🗣️",
    "Ignore it 😎",
    "Take it 🎒",
    "Follow it 👣",
    "Hide 😶",
    "Use your brain 🧠",
    "Do something crazy 🤪"
  ];

  return choicesPool.sort(() => 0.5 - Math.random()).slice(0,3);
}

// SHOW GENRES
function showGenres(){
  storyText.innerText = "Choose your story genre and start your adventure!";
  choicesDiv.innerHTML = "";
  iteration = 0;

  document.body.style.background = "linear-gradient(to right,#ffecd2,#fcb69f)";

  genres.forEach(genre=>{
    const btn = document.createElement("button");
    btn.className = "choice-btn";
    btn.innerText = genre;

    btn.onclick = ()=>{
      currentGenre = genre;
      iteration = 1;
      document.body.style.background = genreBackgrounds[genre];
      nextStep();
    };

    choicesDiv.appendChild(btn);
  });
}

// NEXT STEP
function nextStep(){

  if(iteration > maxIterations){
    typeText("🎉 The story ends here! Try another genre for a new adventure!");
    choicesDiv.innerHTML = "";

    const btn = document.createElement("button");
    btn.className = "choice-btn";
    btn.innerText = "Play Again 🔄";
    btn.onclick = showGenres;

    choicesDiv.appendChild(btn);
    return;
  }

  const story = generateStory(currentGenre);
  typeText(story);

  const choices = generateChoices();
  choicesDiv.innerHTML = "";

  choices.forEach(choice=>{
    const btn = document.createElement("button");
    btn.className = "choice-btn";
    btn.innerText = choice;

    btn.onclick = ()=>{
      iteration++;
      nextStep();
    };

    choicesDiv.appendChild(btn);
  });
}

// START
showGenres();