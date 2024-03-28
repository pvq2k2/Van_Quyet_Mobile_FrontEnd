import PropTypes from "prop-types";

const InputRadioField = ({
  defaultChecked,
  id,
  name,
  label,
  disabled,
  defaultValue,
  form,
}) => {
  return (
    <div className="flex items-center gap-x-3">
      <input
        id={id}
        name={name}
        type="radio"
        defaultValue={defaultValue}
        defaultChecked={defaultChecked}
        disabled={disabled}
        {...form.register(name)}
        className="h-4 w-4 border-gray-300 text-indigo-600 accent-blue-500 focus:ring-indigo-600 dark:border-black"
      />
      <label
        htmlFor={id}
        className="block leading-6 text-gray-900 dark:text-gray-300"
      >
        {label}
      </label>
    </div>
  );
};

InputRadioField.propTypes = {
  defaultChecked: PropTypes.bool,
  id: PropTypes.string,
  name: PropTypes.string,
  label: PropTypes.string,
  disabled: PropTypes.bool,
  defaultValue: PropTypes.string,
  form: PropTypes.object,
};

export default InputRadioField;
