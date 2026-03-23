export default function handler(req, res) {

  const genre = req.query.genre || "Adventure";

  // Helper
  function random(arr){
    return arr[Math.floor(Math.random() * arr.length)];
  }

  // Genre-based elements
  const data = {
    Adventure: {
      objects: ["ancient map","hidden treasure","lost temple","mysterious cave","jungle trail"],
      actions: ["appears suddenly","leads you forward","glows faintly","calls your name","reveals a secret"],
      tones: ["Your heart races with excitement!", "Adventure is calling!", "This could change everything!", "You feel fearless!", "Something big is about to happen!"]
    },

    Horror: {
      objects: ["shadow figure","creaking door","dark hallway","whispering voice","broken mirror"],
      actions: ["moves slowly","stares at you","whispers softly","vanishes suddenly","gets closer"],
      tones: ["Something feels wrong...", "You feel chills down your spine!", "This is terrifying!", "Your hands start shaking!", "You are not alone..."]
    },

    SciFi: {
      objects: ["alien device","flying drone","glitching robot","neon portal","AI hologram"],
      actions: ["activates instantly","scans you","malfunctions","emits bright light","starts speaking"],
      tones: ["Technology feels alive!", "This is beyond science!", "Your mind is blown!", "The future is here!", "Reality feels different!"]
    },

    Fantasy: {
      objects: ["magic wand","dragon egg","enchanted forest","glowing crystal","ancient spellbook"],
      actions: ["shines brightly","floats in air","whispers magic","opens slowly","casts a spell"],
      tones: ["Magic fills the air!", "You feel powerful!", "A legend begins!", "Destiny awaits!", "This feels magical!"]
    },

    Mystery: {
      objects: ["strange letter","hidden clue","locked box","secret passage","unknown symbol"],
      actions: ["appears mysteriously","reveals clues","confuses you","leads somewhere","changes meaning"],
      tones: ["Something is off...", "You must solve this!", "The mystery deepens!", "Clues are everywhere!", "Think carefully!"]
    },

    Comedy: {
      objects: ["flying banana","talking dog","giant pie","dancing chair","weird hat"],
      actions: ["starts dancing","talks loudly","explodes in confetti","runs away","laughs"],
      tones: ["This is hilarious 😂", "You can’t stop laughing!", "What is happening?! 😂", "Pure chaos!", "This makes no sense!"]
    },

    Romance: {
      objects: ["love letter","red rose","secret note","heart-shaped charm","soft melody"],
      actions: ["appears gently","falls near you","glows softly","makes you smile","feels warm"],
      tones: ["Your heart flutters 💖", "This feels special!", "Love is in the air!", "You blush slightly!", "A sweet moment!"]
    },

    Superhero: {
      objects: ["energy blast","villain signal","power suit","flying car","city alarm"],
      actions: ["activates suddenly","calls for help","glows with power","rises quickly","alerts you"],
      tones: ["Time to save the day!", "You feel powerful!", "Hero mode ON!", "The city needs you!", "No fear!"]
    },

    Detective: {
      objects: ["footprint","evidence file","broken glass","secret note","suspect photo"],
      actions: ["reveals clues","points somewhere","raises suspicion","connects dots","creates tension"],
      tones: ["Think like a detective!", "Every clue matters!", "The case is heating up!", "Stay sharp!", "Truth is near!"]
    },

    Magical: {
      objects: ["talking cat","sparkling potion","magic portal","floating book","glowing orb"],
      actions: ["floats gently","shimmers brightly","opens magically","spins around","speaks softly"],
      tones: ["Magic surrounds you!", "This is enchanting!", "Anything is possible!", "You feel amazed!", "Pure wonder!"]
    },

    Pirate: {
      objects: ["treasure chest","pirate map","gold coins","mysterious island","ship wheel"],
      actions: ["appears on deck","shines brightly","leads to treasure","rolls away","points direction"],
      tones: ["Ahoy matey!", "Treasure awaits!", "Adventure on the seas!", "You feel like a pirate!", "Gold is near!"]
    },

    TimeTravel: {
      objects: ["time portal","ancient clock","future device","time machine","glowing watch"],
      actions: ["opens suddenly","ticks loudly","pulls you in","glows strangely","warps reality"],
      tones: ["Time is bending!", "This feels unreal!", "Past and future collide!", "You feel dizzy!", "Where are you now?"]
    }
  };

  const genreData = data[genre] || data["Adventure"];

  const story = `You are in a ${genre.toLowerCase()} story. 
A ${random(genreData.objects)} ${random(genreData.actions)}. 

${random(genreData.tones)} 

What will you do next?`;

  const choices = [
    "Investigate 🔍",
    "Run away 🏃",
    "Touch it ✋",
    "Ignore it 😎",
    "Follow it 👣"
  ];

  res.status(200).json({
    story: story,
    choices: choices.sort(() => 0.5 - Math.random()).slice(0,3)
  });
}