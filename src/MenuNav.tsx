import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "./components/ui/navigation-menu";

interface MenuNavProps {
  breakfastRef: React.RefObject<HTMLDivElement | null>;
  lunchRef: React.RefObject<HTMLDivElement | null>;
  dinnerRef: React.RefObject<HTMLDivElement | null>;
}
export const MenuNav = ({
  breakfastRef,
  lunchRef,
  dinnerRef,
}: MenuNavProps) => {
  const meals = ["Breakfast", "Lunch", "Dinner"];

  const executeScroll = (meal: string) => {
    if (meal === "Breakfast") {
      breakfastRef.current?.scrollIntoView({ behavior: "smooth" });
    } else if (meal === "Lunch") {
      lunchRef.current?.scrollIntoView({ behavior: "smooth" });
    } else {
      dinnerRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <NavigationMenu>
      <NavigationMenuList>
        {meals.map((meal) => (
          <NavigationMenuItem key={meal}>
            <NavigationMenuLink
              className={navigationMenuTriggerStyle()}
              onClick={() => executeScroll(meal)}
            >
              {meal}
            </NavigationMenuLink>
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
};
