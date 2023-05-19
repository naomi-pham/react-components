import React from "react";
import cup from "/public/images/starbucks/cup.png";
import Image from "next/image";

const Count = () => {
  return (
    <div className="mx-auto flex aspect-square w-[236px] items-center justify-center rounded-full border-2 border-light-success-500 bg-light-neutral-50 drop-shadow-md">
      <div className="flex aspect-square w-[200px] flex-col items-center justify-center rounded-full bg-light-neutral-50 shadow-custom-md">
        <Image src={cup} alt="starbucks-cup" width={70} height={100} />

        <p className="inline-flex space-x-1">
          <span className="font-semibold text-light-success-500">7</span>
          <span>/</span>
          <span>12</span>
        </p>
      </div>
    </div>
  );
};

export default Count;
