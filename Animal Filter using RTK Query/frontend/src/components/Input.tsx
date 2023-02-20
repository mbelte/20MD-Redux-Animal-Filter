import Separator from "./Separator";

export type InputType = {
  label: string;
  placeholder: string;
  required: boolean;
  separator?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const Input = ({
  label,
  placeholder,
  required,
  onChange,
  separator = "",
}: InputType) => {
  return (
    <label className="label">
      {separator ? <Separator value={separator} /> : `${label}:`}
      <input
        type="text"
        className="label__input"
        placeholder={placeholder}
        required={required}
        onChange={onChange}
      />
    </label>
  );
};

export default Input;
