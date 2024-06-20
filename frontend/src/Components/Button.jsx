import React from "react";

function Button({ txt }) {
  return (
    // create a button using tailwindcss in react

    <button className="px-4 py-2 font-bold text-white bg-blue-500 rounded-lg">
      {txt}
    </button>
  );
}

export default Button;
