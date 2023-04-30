import React, { useState } from "react";
import { IconCheck } from "../icons/Icons";

const Stepper = () => {
  const steps = [1, 2, 3, 4];
  const [currentStep, setCurrentStep] = useState(0);

  const moveToRight = () => {
    setCurrentStep((prevCurrentStep) => prevCurrentStep + 1);
  };

  const moveToLeft = () => {
    setCurrentStep((prevCurrentStep) => prevCurrentStep - 1);
  };

  return (
    <div className="max-w-sm space-y-6">
      <div className="flex">
        {steps.map((step, index) => (
          <div key={index} className="relative flex w-[100px] justify-center">
            <Circle currentStep={currentStep} step={step} />
            {index + 1 < steps.length && (
              <Line currentStep={currentStep} step={step} />
            )}
          </div>
        ))}
      </div>
      <div className="flex justify-center gap-2">
        <button
          className="rounded border border-slate-300 bg-slate-100 py-2 px-4 hover:bg-slate-200 disabled:opacity-50"
          onClick={moveToLeft}
          disabled={currentStep === 0}
        >
          Prev
        </button>
        <button
          className="rounded border border-slate-300 bg-slate-100 py-2 px-4 hover:bg-slate-200 disabled:opacity-50"
          onClick={moveToRight}
          disabled={currentStep === steps.length}
        >
          {currentStep === steps.length - 1 ? "Finish" : "Next"}
        </button>
      </div>
    </div>
  );
};

export const Circle = ({ step, currentStep }) => {
  return (
    <div className="flex aspect-square w-8 items-center justify-center rounded-full border border-slate-300 font-medium text-slate-600 transition-all duration-300">
      {step === currentStep || step < currentStep ? <IconCheck /> : step}
    </div>
  );
};

export const Line = ({ step, currentStep }) => {
  return (
    <div>
      <div className="absolute left-[calc(50%+16px)] -right-[calc(50%-16px)] top-1/2 h-[2px] -translate-y-1/2 bg-slate-300"></div>

      <div
        className={`absolute left-[calc(50%+16px)] -right-[calc(50%-16px)] top-1/2 h-[2px] -translate-y-1/2 bg-slate-600 ${
          currentStep === step || step < currentStep
            ? "w-[calc(100%-32px)]"
            : "w-0"
        }`}
        style={{ transition: "width 0.3s" }}
      ></div>
    </div>
  );
};

export default Stepper;
