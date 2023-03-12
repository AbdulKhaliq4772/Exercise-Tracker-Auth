import React, { useState } from "react";
import AddExerciseForm from "./addExerciseForm";

const SmallForm = () => {
  const [form, setForm] = useState(false);
  return (
    <div>
      <div className="flex justify-center">
        <button
          className="text-white shadow-md text-right bg-emerald-400 hover:bg-emerald-600 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 "
          onClick={() => {
            setForm(!form);
          }}
        >
          Add Exercise
        </button>
      </div>
      {form ? <AddExerciseForm /> : ""}
    </div>
  );
};

export default SmallForm;
