import React, { Fragment, useState } from 'react';
import { CirclePlus, Filter } from 'lucide-react';

const DEFAULT_VALUE = 3000;

const CardPopup = ({feature, setRadiusFilter}) => {
  const [radius, setRadius] = useState(DEFAULT_VALUE);
  const {name, adm0name, pop_max } = feature.properties;
  return (
    <Fragment>
      <div className="modern-card">
        <div className="modern-card-header">
          <h3>City of {name}</h3>
        </div>
        <div className="modern-card-body">
          <h2>{name}, from {adm0name}</h2>
          <p>Population: {pop_max}</p>
          <div className="input-group">
            <input
              type="number"
              className="modern-input"
              defaultValue={DEFAULT_VALUE}
              min={0}
              onChange={(e) => setRadius(parseInt(e.target.value))}
            />
            <button 
              className="modern-button"
              onClick={() => setRadiusFilter((prevState) => {
                const newFilter = radius !== 0
                  ? {feature, radius}
                  : prevState && (radius === 0 || (prevState.feature === feature && prevState.radius === radius))
                  ? prevState
                  : undefined;
                return newFilter;
              })}
            >
              <Filter size={16} className="mr-2" />
              Filter by Km
            </button>
          </div>
        </div>
      </div>
    </Fragment>
  )
}

export default CardPopup;