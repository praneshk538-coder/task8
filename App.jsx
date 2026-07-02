import { useState } from "react";
import UserCard from "./components";
import withBackgroundColor from "./components";

const ColoredUserCard = withBackgroundColor(UserCard);

const App = () => {

  const [color, setColor] = useState("");

  return (
    <div style={{ padding: "20px" }}>

      <h1>withBackgroundColor HOC</h1>

      <input
        type="text"
        placeholder="Enter Background Color"
        value={color}
        onChange={(e) => setColor(e.target.value)}
      />

      <ColoredUserCard
        color={color}
        name="Pranesh"
        role="React Developer"
      />

    </div>
  );
};

export default App;