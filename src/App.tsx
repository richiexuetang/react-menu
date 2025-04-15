import { useRef } from "react";
import "./App.css";
import { MenuNav } from "./MenuNav";
import { Card, CardContent } from "./components/ui/card";

const mealOfferings = {
  Breakfast: [
    {
      name: "Pancakes",
      description: "Fluffy pancakes served with syrup and butter.",
      price: 5.99,
    },
    {
      name: "Omelette",
      description: "Three-egg omelette with your choice of fillings.",
      price: 7.99,
    },
  ],
  Lunch: [
    {
      name: "Caesar Salad",
      description: "Fresh romaine lettuce with Caesar dressing.",
      price: 8.99,
    },
    {
      name: "Grilled Chicken Sandwich",
      description: "Juicy grilled chicken on a toasted bun.",
      price: 10.99,
    },
  ],
  Dinner: [
    {
      name: "Steak",
      description: "Grilled steak served with mashed potatoes.",
      price: 19.99,
    },
    {
      name: "Salmon",
      description: "Pan-seared salmon with asparagus.",
      price: 17.99,
    },
  ],
};

function App() {
  const breakfastRef = useRef(null);
  const lunchRef = useRef(null);
  const dinnerRef = useRef(null);

  const getRef = (meal: string) => {
    if (meal === "Breakfast") {
      return breakfastRef;
    } else if (meal === "Lunch") {
      return lunchRef;
    } else {
      return dinnerRef;
    }
  };

  return (
    <div className="min-h-full h-auto">
      <div className="flex flex-col gap-5">
        <h1>React Menu</h1>
        <hr />
        <MenuNav
          breakfastRef={breakfastRef}
          lunchRef={lunchRef}
          dinnerRef={dinnerRef}
        />
        <hr />
        {Object.entries(mealOfferings).map(([meal, items]) => (
          <div
            className="h-[500px] p-4 flex flex-col items-start"
            key={meal}
            ref={getRef(meal)}
          >
            <h2 className="items-start">{meal}</h2>
            <div className="flex gap-10 m-2">
              {items.map((item) => (
                <Card key={item.name}>
                  <CardContent>
                    <div className="flex flex-col">
                      <h3>{item.name}</h3>
                      <p>{item.description}</p>
                      <p>${item.price.toFixed(2)}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
