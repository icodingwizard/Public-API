const express = require("express");
const PORT = process.env.PORT | 3500;
const app = express();
const cors = require("cors");
const path = require("path");

const data = [
  {
    id: 0,
    title: "Leptis Magna",
    description:
      "Leptis Magna is a UNESCO World Heritage site and one of the best-preserved ancient Roman cities in the world. This archaeological wonder boasts stunning ruins of grand temples, theaters, marketplaces, and baths, offering a glimpse into the opulence of the Roman Empire.",
    Image: "https://libyantourismapi.vercel.app/places/images/0",
    popularity: "High",
  },
  {
    id: 1,
    title: "Sabratha",
    description:
      "Another UNESCO World Heritage site, Sabratha is renowned for its well-preserved Roman ruins. Among the highlights is an ancient theater that once accommodated thousands of spectators, showcasing remarkable Roman architectural prowess.",
    Image: "https://libyantourismapi.vercel.app/places/images/1",
    popularity: "High",
  },
  {
    id: 2,
    title: "Cyrene",
    description:
      "Cyrene, an ancient Greek city and UNESCO World Heritage site, is famous for its archaeological treasures. Explore the well-preserved Greek ruins, including temples, agora, and impressive city walls that offer a captivating window into antiquity.",
    Image: "https://libyantourismapi.vercel.app/places/images/2",
    popularity: "High",
  },
  {
    id: 3,
    title: "Ghadames",
    description:
      "Ghadames is a traditional Berber town with a well-preserved old town. Its labyrinthine alleys, unique architecture, and distinctive mud-brick buildings showcase the exceptional desert urban planning of the Berber people.",
    Image: "https://libyantourismapi.vercel.app/places/images/3",
    popularity: "Medium",
  },
  {
    id: 4,
    title: "The Sahara Desert",
    description:
      "The Libyan Sahara Desert is a vast, otherworldly landscape that beckons adventurers. Marvel at the towering sand dunes of the Ubari Sand Sea and experience the solitude and breathtaking beauty of one of the world's most iconic deserts.",
    Image: "https://libyantourismapi.vercel.app/places/images/4",
    popularity: "High",
  },
  {
    id: 5,
    title: "Akakus Mountains",
    description:
      "The Akakus Mountains are a rugged range adorned with prehistoric cave paintings and rock art. Explore these ancient artistic expressions and the unique geological formations that have captivated explorers for centuries.",
    Image: "https://libyantourismapi.vercel.app/places/images/5",
    popularity: "Medium",
  },
  {
    id: 6,
    title: "Benghazi",
    description:
      "Benghazi, Libya's second-largest city, offers a vibrant atmosphere and a blend of history and modernity. Explore historical sites, relax on beautiful beaches, and immerse yourself in the local culture.",
    Image: "https://libyantourismapi.vercel.app/places/images/6",
    popularity: "Medium",
  },
  {
    id: 7,
    title: "Tripoli",
    description:
      "The capital city, Tripoli, is a treasure trove of history and culture. Wander through the historic medina quarters, admire ancient architecture, and lose yourself in the bustling bazaars where the past meets the present.",
    Image: "https://libyantourismapi.vercel.app/places/images/7",
    popularity: "High",
  },
  {
    id: 8,
    title: "Qasr al-Haj",
    description:
      "Qasr al-Haj is a well-preserved desert fortress with a unique design. Explore its ancient architecture, sturdy walls, and historical significance in the Libyan desert landscape.",
    Image: "https://libyantourismapi.vercel.app/places/images/8",
    popularity: "Low",
  },
  {
    id: 9,
    title: "Waw an Namus",
    description:
      "Waw an Namus is a volcanic crater located in the Sahara Desert, known for its unique landscape. This remote and lunar-like environment is a geological marvel, providing an unforgettable adventure for intrepid travelers.",
    Image: "https://libyantourismapi.vercel.app/places/images/9",
    popularity: "Low",
  },
  {
    id: 10,
    title: "The Arch of Septimius Severus",
    description:
      "The Arch of Septimius Severus is an impressive ancient Roman triumphal arch located in Leptis Magna. This architectural marvel commemorates the achievements of Emperor Septimius Severus and stands as a symbol of Roman grandeur.",
    Image: "https://libyantourismapi.vercel.app/places/images/10",
    popularity: "Medium",
  },
];

app.use(cors());

app.use("/", express.static(path.join(__dirname, "/public")));

app.get("^/$|/index(.html)?", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "index.html"));
});

app.get("/places", (req, res) => {
  res.json(data);
});

app.get("/places/images/:num", (req, res) => {
  const idNum = req.params.num ;
  res.sendFile(path.join(__dirname,'public','images',`${idNum}.jpg`)) ;
});

app.get("/places/:placeNum", (req, res) => {
  const placeNum = req.params.placeNum;
  res.json(data[placeNum]);
});

app.listen(PORT, () => {
  console.log("listening on port 3500");
});
