/* import css from "./UserMenu.module.css"; */

/* interface UserMenuProps {
  name: string;
} */
import { useState } from "react";
export default function EventMe() {
  const [clicks, setClicks] = useState(0);

  //const items = ['1-Яблоко', '2-Банан', '3-Апельсин'];
  const handleClick1 = (nnn: string) => {
    console.log(`Im a button! ${nnn}` , nnn);
          // 3. Використовуємо setClicks для зміни стану clicks
    setClicks(clicks + 1);
    console.log(clicks);
    console.log(useState);

  };
  
  const handleClick2 = (event: React.MouseEvent<HTMLButtonElement>) => {
    console.log(event.type); // Об'єкт події
  };
    
  const handleClick3 = (event: React.MouseEvent<HTMLButtonElement>) => {
    console.log("Clicked!", event);
    console.log("Target:", event.target); // сам <button>
  };

  return (
    <>
      <div>
        <button onClick={() => handleClick1("123")}>Click me! Current: {clicks} </button>
      </div>
      <div>
        <button onClick={handleClick2}>First button</button>
      </div>
      
      <button onClick={(event) => console.log(event.pageX)}>Second button</button>
      <button onClick={handleClick3}>Click me!</button>;
    </>
  );
}
