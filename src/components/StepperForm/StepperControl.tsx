import React from "react";

interface Props {
  handleClick: (direction: "back" | "next") => void;
  currentStep: number;
  steps: Array<string>;
}

const StepperControl: React.FC<Props> = ({
  handleClick,
  currentStep,
  steps,
}) => {
  return (
    <div className="container flex justify-around mt-4 mb-8">
      {/*  back button */}
      <button
        className={`bg-white text-slate-400 uppercase py-2 px-4 rounded-xl font-semibold cursor-pointer border-2 border-slate-300 hover:bg-slate-700 hover:text-white transition duration-200 ease-in-out ${
          currentStep === 1 ? "opacity-50 cursor-not-allowed" : ""
        }`}
        onClick={() => handleClick("back")}
      >
        Back
      </button>

      {/* next button */}

      <button
        className="bg-green-500 text-white uppercase py-2 px-4 rounded-xl font-semibold cursor-pointer  hover:bg-slate-700 hover:text-white transition duration-200 ease-in-out"
        onClick={() => handleClick("next")}
      >
        {currentStep === steps.length - 1 ? "Confirm" : "Next"}
      </button>
    </div>
  );
};

export default StepperControl;
