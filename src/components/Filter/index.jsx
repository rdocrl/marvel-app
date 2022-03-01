import { forwardRef } from 'react';
import search from '../../assets/search.png';
import './Filter.scss';

const Filter = forwardRef(({ options, onTypeChange, onTextChange, selected, text }, ref) => {
  const handleTypeChange = (e) => {
    const { value } = e.target;
    onTypeChange(value);
  };

  const handleTextChange = (e) => {
    const { value } = e.target;
    onTextChange(value);
  };

  return (
    <section className="filter">
      <div className="filter__types">
        {options.map(({ id, label }) => (
          <div key={id}>
            <input
              type="radio"
              value={id}
              checked={selected === id}
              onChange={handleTypeChange}
              id={id}
            />
            <label htmlFor={id}>{label}</label>
          </div>
        ))}
      </div>
      <div className="filter__text">
        <img src={search} />
        <input value={text} placeholder="Search" onChange={handleTextChange} ref={ref} />
      </div>
    </section>
  );
});

Filter.displayName = 'Filter';

export default Filter;
