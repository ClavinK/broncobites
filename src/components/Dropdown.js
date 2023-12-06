import React from 'react';

const Dropdown = ({ label, options, selectedValue, onSelect, id }) => {
    return (
        <div className="dropdown mb-3">
            <label htmlFor={id} className="form-label">{label}</label>
            <button className="btn btn-secondary dropdown-toggle mx-2" type="button" id={id} data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                {options.find(option => option.value === selectedValue)?.label || 'Select'}
            </button>
            <div className="dropdown-menu" aria-labelledby={id}>
                {options.map((option) => (
                    <button
                        key={option.value}
                        className={`dropdown-item ${selectedValue === option.value ? 'active' : ''}`}
                        type="button"
                        onClick={() => onSelect(option.value)}
                    >
                        {option.label}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default Dropdown;
