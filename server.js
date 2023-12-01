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

    popularity: "High",
  },
  {
    id: 1,
    title: "Sabratha",
    description:
      "Another UNESCO World Heritage site, Sabratha is renowned for its well-preserved Roman ruins. Among the highlights is an ancient theater that once accommodated thousands of spectators, showcasing remarkable Roman architectural prowess.",

    popularity: "High",
  },
  {
    id: 2,
    title: "Cyrene",
    description:
      "Cyrene, an ancient Greek city and UNESCO World Heritage site, is famous for its archaeological treasures. Explore the well-preserved Greek ruins, including temples, agora, and impressive city walls that offer a captivating window into antiquity.",

    popularity: "High",
  },
  {
    id: 3,
    title: "Ghadames",
    description:
      "Ghadames is a traditional Berber town with a well-preserved old town. Its labyrinthine alleys, unique architecture, and distinctive mud-brick buildings showcase the exceptional desert urban planning of the Berber people.",

    popularity: "Medium",
  },
  {
    id: 4,
    title: "The Sahara Desert",
    description:
      "The Libyan Sahara Desert is a vast, otherworldly landscape that beckons adventurers. Marvel at the towering sand dunes of the Ubari Sand Sea and experience the solitude and breathtaking beauty of one of the world's most iconic deserts.",

    popularity: "High",
  },
  {
    id: 5,
    title: "Akakus Mountains",
    description:
      "The Akakus Mountains are a rugged range adorned with prehistoric cave paintings and rock art. Explore these ancient artistic expressions and the unique geological formations that have captivated explorers for centuries.",

    popularity: "Medium",
  },
  {
    id: 6,
    title: "Benghazi",
    description:
      "Benghazi, Libya's second-largest city, offers a vibrant atmosphere and a blend of history and modernity. Explore historical sites, relax on beautiful beaches, and immerse yourself in the local culture.",

    popularity: "Medium",
  },
  {
    id: 7,
    title: "Tripoli",
    description:
      "The capital city, Tripoli, is a treasure trove of history and culture. Wander through the historic medina quarters, admire ancient architecture, and lose yourself in the bustling bazaars where the past meets the present.",

    popularity: "High",
  },
  {
    id: 8,
    title: "Qasr al-Haj",
    description:
      "Qasr al-Haj is a well-preserved desert fortress with a unique design. Explore its ancient architecture, sturdy walls, and historical significance in the Libyan desert landscape.",

    popularity: "Low",
  },
  {
    id: 9,
    title: "Waw an Namus",
    description:
      "Waw an Namus is a volcanic crater located in the Sahara Desert, known for its unique landscape. This remote and lunar-like environment is a geological marvel, providing an unforgettable adventure for intrepid travelers.",

    popularity: "Low",
  },
  {
    id: 10,
    title: "Mausoleum of Bes",
    description:
      "The Mausoleum of Bes is the ancient tomb of a Berber tribal leader, situated in the Nafusa Mountains. It holds historical significance and is a testament to the region's cultural heritage.",

    popularity: "Low",
  },
  {
    id: 11,
    title: "The Arch of Septimius Severus",
    description:
      "The Arch of Septimius Severus is an impressive ancient Roman triumphal arch located in Leptis Magna. This architectural marvel commemorates the achievements of Emperor Septimius Severus and stands as a symbol of Roman grandeur.",

    popularity: "Medium",
  },
  {
    id: 12,
    title: "The Temple of Zeus",
    description:
      "The Temple of Zeus is another remarkable Roman-era ruin, nestled in the ancient city of Cyrene. This temple, dedicated to the king of the gods, Zeus, exemplifies the architectural finesse of the era.",

    popularity: "Medium",
  },
  {
    id: 13,
    title: "The Red Castle, Saraya Hamra",
    description:
      "The Red Castle, also known as Assai al-Hamra, is a historic fortress in Tripoli known for its distinctive red color. This well-preserved structure offers a glimpse into the city's past and offers panoramic views of the surrounding area.",

    popularity: "Medium",
  },
  {
    id: 14,
    title: "Al-Kufrah Oasis",
    description:
      "Al-Kufrah Oasis is a remote desert oasis offering unique landscapes and cultural experiences. The lush palm groves, clear springs, and tranquil ambiance make it a hidden gem in the Libyan desert.",
    popularity: "Low",
  },
];

app.use(cors());

app.use("/", express.static(path.join(__dirname, "/public")));

app.get("^/$|/index(.html)?", (req, res) => {
  res.sendFile(path.join(__dirname,'views','index.html'));
});

app.get("/places", (req, res) => {
  res.json(data);
});

app.get("/places/:placeNum", (req, res) => {
  const placeNum = req.params.placeNum;
  res.json(data[placeNum]);
});

app.listen(PORT, () => {
  console.log("listening on port 3500");
});
