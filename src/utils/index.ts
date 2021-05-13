export const getRandomEmoticons = (count: number = 10) => {
  return shuffleArray(_EmoticonSVGs).slice(0, count);
}

export const shuffleArray = (array: string[]) => {
  array.forEach((_, index) => {
    const randomIndex = Math.floor(Math.random() * array.length);
    const interim = array[index];
    array[index] = array[randomIndex];
    array[randomIndex] = interim;
  });
  return array;
}

export const getEmoticonImage = (emotion: string) => {
  return require(`../assets/images/${emotion}.svg`).default;
}

const _EmoticonSVGs = [
  "angry",
  "bad",
  "cat",
  "confused",
  "cool",
  "crazy",
  "crying",
  "cyclops",
  "dead",
  "eyebrows",
  "girl",
  "greed",
  "happy",
  "hypnotized",
  "laughing",
  "muted",
  "nerd",
  "nervous",
  "pressure",
  "sad",
  "shocked",
  "sick",
  "singing",
  "sleeping",
  "smile",
  "surprised",
  "suspicious",
  "sweating",
  "thinking",
  "tired",
  "tongue",
  "ugly",
  "vampire",
  "vomiting",
  "whistle",
  "wink"
];
