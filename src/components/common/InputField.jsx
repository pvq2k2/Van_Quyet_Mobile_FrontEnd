import React from "react";
import { Controller } from "react-hook-form";

const InputField = ({ label, type, name, form, disabled }) => {
  const { formState } = form;
  return (
    <div className="form-group pb-4">
      <label htmlFor={name} className="py-2 dark:text-gray-300">
        {label}
      </label>
      <Controller
        name={name}
        disabled={disabled}
        control={form.control}
        render={({ field }) => (
          <input
            id={name}
            type={type}
            {...field}
            className={`${
              formState.errors[name] ? "border-red-500 dark:border-red-500" : ""
            } relative mt-1 block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 duration-300 ease-in-out hover:border-main-dark focus:z-10 focus:border-main-dark focus:outline-none focus:ring-main-dark dark:border-gray-600 dark:bg-black dark:text-gray-300 sm:text-sm`}
            placeholder={label}
          />
        )}
      />
      <div className="error-message ml-1 mt-1 text-sm text-red-500">
        {formState.errors[name] ? formState.errors[name]?.message : ""}
      </div>
    </div>
  );
};

export default InputField;
