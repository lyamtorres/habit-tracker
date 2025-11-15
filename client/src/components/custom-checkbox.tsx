import React from "react";

const CustomCheckbox: React.FC = () => {
  const [checked, setChecked] = React.useState(false);
  return (
    <label style={{ display: 'inline-flex', alignItems: 'center', cursor: 'pointer' }}>
      <input
        type="checkbox"
        checked={checked}
        onChange={() => setChecked((v: boolean) => !v)}
        style={{ display: 'none' }}
      />
      <span
        style={{
          width: 20,
          height: 20,
          border: '2px solid #888',
          borderRadius: 4,
          display: 'inline-block',
          background: checked ? '#4f46e5' : '#fff',
          transition: 'background 0.15s',
          position: 'relative',
        }}
      >
        {checked && (
          <svg
            viewBox="0 0 20 20"
            fill="none"
            stroke="white"
            strokeWidth="2.5"
            style={{ position: 'absolute', top: 2, left: 2, width: 16, height: 16 }}
          >
            <polyline points="4,10 8,15 16,5" />
          </svg>
        )}
      </span>
    </label>
  );
};

export default CustomCheckbox;
