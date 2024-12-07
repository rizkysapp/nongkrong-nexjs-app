import React from "react";

const Input = ({ label, isDisabled, className, value, onChange }) => {
  return (
    <div className="grid grid-cols-3 space-x-4">
      <label className="font-semibold col-span-1 capitalize" htmlFor="">
        {label}
      </label>
      <input onChange={onChange} value={value} disabled={isDisabled} className={`col-span-2 p-[2px] rounded-sm border-none bg-slate-400 ${className}`} type="text" />
    </div>
  );
};

export default Input;
