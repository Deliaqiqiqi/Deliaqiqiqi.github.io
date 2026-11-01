export const asset = (path: string) => `${import.meta.env.BASE_URL}${path}`;
export const photo = (name: string) => asset(`images/${name}.webp`);
export const cv = asset("documents/Yaqi_Jiang_CV.pdf");
export const navigation = [
  ["about", "About me"],
  ["experience", "Experience"],
  ["education", "Education"],
  ["design", "Design"],
  ["social", "Social media"],
  ["photography", "Photography"],
] as const;
export const projects = [
  {
    title: "Hazard Hunters",
    kind: "A game",
    image: "hazard-hunters",
    description:
      "A game I created to help participants learn about the impacts of PFAS chemicals.",
    detail:
      "Learning through play, with a visual world that makes an environmental issue more approachable.",
  },
  {
    title: "Render Me Real",
    kind: "A short film",
    image: "render-me-real",
    description:
      "A short film about an artist caught between authenticity and hallucination.",
    detail:
      "An exploration of image-making, perception, and what it means to feel real.",
  },
  {
    title: "The male gaze in otome games",
    kind: "My thesis",
    image: "male-gaze",
    description:
      "Exploring Laura Mulvey’s male gaze in heterosexual romance games.",
    detail:
      "Even when female players are the protagonists and autonomous actors, the experience can still be shaped by a male gaze built into the game’s design.",
  },
];
export const socialPosts = [
  {
    image: "social-viral",
    title: "Celebrity moments",
    description:
      "Capturing encounters and sharing the moments that connect fans.",
    category: "Short-form content",
  },
  {
    image: "social-travel",
    title: "Travel notes",
    description:
      "Sharing practical discoveries and recommendations from my travels.",
    category: "Travel guides",
  },
  {
    image: "social-learning",
    title: "Life abroad",
    description:
      "Personal learning experiences and insights from living across cultures.",
    category: "Experience sharing",
  },
  {
    image: "social-celebrity",
    title: "Cultural encounters",
    description:
      "A personal record of people and moments in the world of entertainment.",
    category: "Photo stories",
  },
  {
    image: "social-fashion",
    title: "Around fashion",
    description:
      "Documenting fashion encounters and sharing them with an engaged audience.",
    category: "Visual storytelling",
  },
];
export const galleries = {
  concerts: Array.from({ length: 5 }, (_, i) => ({
    image: `concert-${i + 1}`,
    alt: [
      "A performer under a fan of purple concert lights",
      "A singer reaching into violet stage light",
      "A musician singing into a microphone",
      "A performer in a green-lit stage setting",
      "A keyboard player on a red-lit stage",
    ][i],
  })),
  fashion: Array.from({ length: 5 }, (_, i) => ({
    image: `fashion-${i + 1}`,
    alt: [
      "A fashion week guest in a white shirt outside a venue",
      "Guests and photographers gathering outside a Paris fashion show",
      "Fashion week arrivals on the steps of a venue",
      "A fashion week guest greeting the crowd",
      "A guest holding flowers outside a fashion venue",
    ][i],
  })),
};
