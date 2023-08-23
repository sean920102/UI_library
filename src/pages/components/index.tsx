// import React, { useState } from 'react'

import Dropdown from "../../components/dropdown";
import Button from "../../components/button";
import "./style.scss";
const Components: React.FC = () => {
  // const [count, setCount] = useState(0)

  return (
    <>
    <div className="container">
      <article>
        <div className="title">
          <span>Button</span>
        </div>
        <main>
          <Button />
        </main>
      </article>
      <article>
        <div className="title">
        Dropdown
        </div>
        <main>
          <Dropdown />
        </main>
      </article>
      </div>
    </>
  );
};

export default Components;
