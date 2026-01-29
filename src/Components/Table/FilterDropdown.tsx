interface FilterDropdownProps {
  value: string;
  onChange: (value: string) => void;
  onReset: () => void;
}

const FilterDropdown = ({
  value,
  onChange,
  onReset,
}: FilterDropdownProps) => {
  return (
    <div className="filter-dropdown">
      <input
        type="text"
        placeholder="Search"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />

      <div className="filter-actions">
        <button className="reset" onClick={onReset}>
          Reset
        </button>
        <button className="apply">
          Filter
        </button>
      </div>
    </div>
  );
};

export default FilterDropdown;
