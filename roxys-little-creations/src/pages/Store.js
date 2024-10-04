import React from "react";

function Store() {
  const sticker = [
    {
      id: 1,
      name: "Book Ghoul",
      price: 5,
      image: "/images/book_ghoul.jpeg",
      description: "A ghost reading a book",
      type: "sticker",
    },
    {
      id: 2,
      name: "Cofee Ghoul",
      price: 5,
      image: "/images/coffee_ghoul.jpeg",
      description: "A ghost in a coffee cup",
      type: "sticker",
    },
    {
      id: 3,
      name: "Plant Ghoul",
      price: 5,
      image: "/images/plant_ghoul2.jpeg",
      description: "A ghost watering plants",
      type: "sticker",
    },
    {
      id: 4,
      name: "Boo-store",
      price: 5,
      image: "/images/boostore2.jpeg",
      description: "A book store for ghosts",
      type: "sticker",
    },
  ];

  const print = [
    {
      id: 1,
      name: "bat",
      price: 5,
      image: "/images/bat_rlc.jpeg",
      description: "a cute bat",
      type: "print",
    },
    {
      id: 2,
      name: "candlelight",
      price: 5,
      image: "/images/candlelight_rlc.jpeg",
      description: "an old fashioned candle",
      type: "print",
    },
    {
      id: 3,
      name: "cauldron",
      price: 5,
      image: "/images/cauldron_rlc.jpeg",
      description: "a cauldron brewing potions",
      type: "print",
    },
    {
      id: 4,
      name: "jellyfish",
      price: 5,
      image: "/images/jellyfish.jpeg",
      description: "a school of jellyfish",
      type: "print",
    },
    {
      id: 5,
      name: "Coffee Cup",
      price: 5,
      image: "/images/coffeecup_rlc.jpeg",
      description: "A coffee cup",
      type: "print",
    },
    {
      id: 6,
      name: "Potions Wall",
      price: 5,
      image: "/images/potions_wall_rlc.jpeg",
      description: "A wall full of potions",
      type: "print",
    },
  ];
  return (
    <div>
      <h2>Store</h2>
      <h3>Stickers</h3>
      <div style={{ display: "flex", justifyContent: "center", gap: "20px" }}>
        {sticker.map((sticker) => (
          <div
            key={sticker.id}
            style={{
              border: "1px solid #ccc",
              padding: "10px",
              width: "200px",
            }}
          >
            <img
              src={sticker.image}
              alt={sticker.name}
              style={{ width: "100%" }}
            />
            <h3>{sticker.name}</h3>
            <p>{sticker.description}</p>
            <p>${sticker.price}</p>
          </div>
        ))}
      </div>
      <h3>Prints</h3>
      <div style={{ display: "flex", justifyContent: "center", gap: "20px" }}>
        {print.map((print) => (
          <div
            key={print.id}
            style={{
              border: "1px solid #ccc",
              padding: "10px",
              width: "200px",
            }}
          >
            <img src={print.image} alt={print.name} style={{ width: "100%" }} />
            <h3>{print.name}</h3>
            <p>{print.description}</p>
            <p>${print.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Store;
