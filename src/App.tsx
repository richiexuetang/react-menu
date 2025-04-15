import { useRef } from "react";
import { MenuNav } from "./MenuNav";
import { Card, CardContent } from "./components/ui/card";
import { Separator } from "./components/ui/separator";

const mealOfferings = {
  Breakfast: [
    {
      name: "Pancake",
      description: "Fluffy pancakes served with syrup and butter.",
      price: 5.99,
    },
    {
      name: "Omelette",
      description: "Three-egg omelette with your choice of fillings.",
      price: 7.99,
    },
    {
      name: "French Toast",
      description: "Thick slices of bread dipped in egg and cinnamon.",
      price: 6.99,
    },
    {
      name: "Fruit Salad",
      description: "A mix of seasonal fruits.",
      price: 4.99,
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
    {
      name: "Veggie Wrap",
      description: "A wrap filled with fresh vegetables and hummus.",
      price: 9.99,
    },
    {
      name: "Tomato Soup",
      description: "Creamy tomato soup served with garlic bread.",
      price: 7.99,
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
    {
      name: "Pasta Primavera",
      description: "Pasta with seasonal vegetables in a light sauce.",
      price: 14.99,
    },
    {
      name: "Vegetable Stir Fry",
      description: "Mixed vegetables stir-fried with soy sauce.",
      price: 12.99,
    },
  ],
};

// type Meal = "Breakfast" | "Lunch" | "Dinner";

function App() {
  // const [currentMeal, setCurrentMeal] = useState<Meal>("Breakfast");

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
    <div className="min-h-full h-auto p-8">
      <div className="flex flex-col gap-5">
        <div className="flex flex-col items-start">
          <h1 className="text-2xl">React Menu</h1>
          <span>1234 Fake St, Los Angeles, CA, 12345</span>
        </div>
        <div className="sticky top-0 bg-white py-4">
          <Separator />
          <MenuNav
            breakfastRef={breakfastRef}
            lunchRef={lunchRef}
            dinnerRef={dinnerRef}
          />
          <Separator />
        </div>
        {Object.entries(mealOfferings).map(([meal, items]) => (
          <div
            className="h-[500px] p-4 flex flex-col items-start gap-2"
            key={meal}
            ref={getRef(meal)}
          >
            <h2 className="items-start">{meal}</h2>
            <div className="grid grid-cols-2 gap-10">
              {items.map((item) => (
                <Card key={item.name}>
                  <CardContent>
                    <div className="flex">
                      <div className="flex flex-col items-start gap-5">
                        <h3>{item.name}</h3>
                        <p className="text-sm text-left">{item.description}</p>
                        <p className="text-xs">${item.price.toFixed(2)}</p>
                      </div>
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
