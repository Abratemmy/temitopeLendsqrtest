import './UsersFilterPanel.scss';

interface UsersFilterPanelProps {
  filters: {
    organization: string;
    username: string;
    email: string;
    phone: string;
    status: string;
    dateJoined: string;
  };
  onChange: (key: string, value: string) => void;
  onApply: () => void;
  onReset: () => void;
}

function UsersFilterPanel({
  filters,
  onChange,
  onApply,
  onReset,
}: UsersFilterPanelProps) {
  return (
    <div className="filter-panel">
      <input
        placeholder="Organization"
        value={filters.organization}
        onChange={(e) => onChange("organization", e.target.value)}
      />

      <input
        placeholder="Username"
        value={filters.username}
        onChange={(e) => onChange("username", e.target.value)}
      />

      <input
        placeholder="Email"
        value={filters.email}
        onChange={(e) => onChange("email", e.target.value)}
      />

      <input
        placeholder="Phone Number"
        value={filters.phone}
        onChange={(e) => onChange("phone", e.target.value)}
      />

      <input
        type="date"
        value={filters.dateJoined}
        onChange={(e) => onChange("dateJoined", e.target.value)}
      />

      <select
        value={filters.status}
        onChange={(e) => onChange("status", e.target.value)}
      >
        <option value="">Status</option>
        <option value="Active">Active</option>
        <option value="Inactive">Inactive</option>
        <option value="Pending">Pending</option>
        <option value="Blacklisted">Blacklisted</option>
      </select>

      <div className="filter-actions">
        <button className="reset" onClick={onReset}>
          Reset
        </button>
        <button className="apply" onClick={onApply}>
          Filter
        </button>
      </div>
    </div>
  );
}

export default UsersFilterPanel;
