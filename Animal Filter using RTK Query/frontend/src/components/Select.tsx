export type SelectType = {
  label: string;
  options: string[];
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
};

const Select = ({ options, label, onChange }: SelectType) => {
  return (
    <label className="label">
      {label}
      <select
        className="label__select"
        onChange={onChange}
      >
        {options.map((value) => (
          <option key={value} value={value}>
            {value}
          </option>
        ))}
      </select>
    </label>
  );
};

export default Select;
