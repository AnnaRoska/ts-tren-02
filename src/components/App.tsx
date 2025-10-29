/* import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
 */

// src/App.tsx

import Product from "./Product";
import Button from "./Button";
import UserMenu from "./UserMenu";
import ClickCounter from "./ClickCounter";
import { useState } from "react";

export default function App() {
  const [clicks, setClicks] = useState(0);
  const handleClick = () => {setClicks(clicks + 1)};   
  return (
    <>
          <ClickCounter value={clicks} onUpdate={handleClick} />
          <ClickCounter value={clicks} onUpdate={handleClick} />
    
      <Button variant="primary" text="Login" />
      <Button variant="secondary" text="Follow" />
      <Button variant="trecondary" text="Ku-Ka-Re-Ku" />

      <UserMenu name="123456789"/>

      <h1>Best selling</h1>
      <Product
        name="Tacos With Lime"
        imgUrl="https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?w=640"
        price={10.99}
      />
      <Product
        name="Fries and Burger"
        imgUrl="https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?w=640"
        price={14.29}
      />
    </>
  );
}

