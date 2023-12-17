import React from "react";
import { add, multiply } from "../../utilities/calculate";

const Shoes = () => {
  const first = 10;
  const second = 20;
  const total = multiply(first, second);
  const sum = add(first, second);
  return (
    <div>
      <h3>This is Shoes compo</h3>
      <p>
        Total: {total} and result: {sum}
      </p>
    </div>
  );
};

export default Shoes;
