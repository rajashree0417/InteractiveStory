// ================== GENRES ==================
const genres = [
  "Adventure","Horror","SciFi","Fantasy","Mystery","Comedy",
  "Romance","Superhero","Detective","Magical","Pirate","TimeTravel"
];

// ================== STATE ==================
let currentGenre = "";
let iteration = 0;
const maxIterations = 5;

const storyText = document.getElementById("story-text");
const choicesDiv = document.getElementById("choices");

// ================== BACKGROUNDS ==================
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

// ================== TYPING EFFECT ==================
function typeText(text) {
  storyText.innerHTML = "";
  let i = 0;

  const interval = setInterval(() => {
    storyText.innerHTML += text.charAt(i);
    i++;
    if (i >= text.length) clearInterval(interval);
  }, 20);
}

// ================== FETCH FROM VERCEL BACKEND ==================
async function getStoryFromBackend(genre){
  try {
    const res = await fetch(`/api/story?genre=${genre}`);
    const data = await res.json();
    return data;
  } catch (error) {
    return {
      story: "⚠️ Cannot connect to server. Try again.",
      choices: ["Retry 🔄"]
    };
  }
}

// ================== SHOW GENRES ==================
function showGenres(){
  storyText.innerText = "✨ Choose your story genre and begin your adventure!";
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

// ================== NEXT STEP ==================
async function nextStep(){

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

  const data = await getStoryFromBackend(currentGenre);

  typeText(data.story);

  choicesDiv.innerHTML = "";

  data.choices.forEach(choice=>{
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

// ================== START ==================
showGenres();