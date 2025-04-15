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
    let element = null;
    if (meal === "Breakfast") {
      element = breakfastRef?.current;
    } else if (meal === "Lunch") {
      element = lunchRef?.current;
    } else {
      element = dinnerRef?.current;
    }
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 100,
        behavior: "smooth",
      });
    }
  };

  return (
    <NavigationMenu className="h-16">
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
