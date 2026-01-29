import "./Tabs.scss";

export interface TabItem {
  label: string;
  value: string;
}

interface TabsProps {
  tabs: TabItem[];
  activeTab: string;
  onChange: (value: string) => void;
}

const Tabs = ({ tabs, activeTab, onChange }: TabsProps) => {
  return (
    <div className="tabs-wrapper">
      <div className="tabs">
        {tabs.map(tab => (
          <button
            key={tab.value}
            className={`tabs_item ${
              activeTab === tab.value ? "tabs_item--active" : ""
            }`}
            onClick={() => onChange(tab.value)}
          >
            {tab.label}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Tabs;
