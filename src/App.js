import React, { useState } from "react";
import "./App.css";
import Category from "./Category";
import Menu from "./Menu";
import items from "./data";
import rose from "../src/assests/rose.png";

const allCategories = [
  "منوی کافه رز",
  ...new Set(items.map((item) => item.category)),
];

function App() {
  const [menuItems, setMenuItems] = useState(items);
  const [categories, setCategories] = useState(allCategories);

  const filterItems = (category) => {
    if (category === "منوی کافه رز") {
      setMenuItems(items);
      return;
    }
    const newItems = items.filter((item) => item.category === category);
    setMenuItems(newItems);
  };

  return (
    <main>
      <section className="menu-section">
        <div className="title">
          <h2>
            <img src={rose} alt="/" /> کافه رز <img src={rose} alt="/" />
          </h2>
          <div className="underLine"></div>
        </div>

        <Category categories={categories} filterItems={filterItems} />
        <Menu items={menuItems} />
      </section>
    </main>
  );
}

export default App;
