import React, { useCallback, useEffect, useState, useRef } from 'react';
import PropTypes from 'prop-types';
import './multiRangeSlider.css';
import Inputs from './Inputs';
import { useDispatch, useSelector } from 'react-redux';
import { getProductsByCategory } from 'redux/actions/product';
import { setPriceRange } from 'redux/reducers/filterOptionsReducer';

const MultiRangeSlider = ({ min, max, onChange }) => {
  const [minVal, setMinVal] = useState(min);
  const [maxVal, setMaxVal] = useState(max);
  const minValRef = useRef(min);
  const maxValRef = useRef(max);
  const range = useRef(null);
  const dispatch = useDispatch();
  const priceRange = useSelector((state) => state.filterOptions.priceRange);
  // Convert to percentage
  const getPercent = useCallback((value) => Math.round(((value - min) / (max - min)) * 100), [min, max]);

  // Set width of the range to decrease from the left side
  useEffect(() => {
    const minPercent = getPercent(minVal);
    const maxPercent = getPercent(maxValRef.current);

    if (range.current) {
      range.current.style.left = `${minPercent}%`;
      range.current.style.width = `${maxPercent - minPercent}%`;
    }
  }, [minVal, getPercent]);

  // Set width of the range to decrease from the right side
  useEffect(() => {
    const minPercent = getPercent(minValRef.current);
    const maxPercent = getPercent(maxVal);

    if (range.current) {
      range.current.style.width = `${maxPercent - minPercent}%`;
    }
  }, [maxVal, getPercent]);

  useEffect(() => {
    if (
      priceRange && // 👈 null and undefined check
      Object.keys(priceRange).length !== 0
    )
      dispatch(getProductsByCategory({ page: 1 }));
  }, [priceRange]);

  // useEffect(() => {
  //   onChange({ min: minVal, max: maxVal });
  // }, [minVal, maxVal, onChange]);

  const maxPriceChange = (val) => {
    const value = Math.max(Number(val), minVal + 1);
    setMaxVal(value);
    maxValRef.current = value;
  };
  const minPriceChange = (val) => {
    const value = Math.min(Number(val), maxVal - 1);
    setMinVal(value);
    minValRef.current = value;
    return value;
  };

  return (
    <>
      <div className="container_range">
        <input
          onTouchEnd={(event) => dispatch(setPriceRange({ ...priceRange, min: event.target.value }))}
          onMouseUp={(event) => dispatch(setPriceRange({ ...priceRange, min: event.target.value }))}
          type="range"
          min={min}
          max={max}
          value={minVal}
          onChange={(event) => {
            minPriceChange(event.target.value);
          }}
          className="thumb thumb--left"
          style={{ zIndex: minVal > max - 100 && '5' }}
        />
        <input
          onTouchEnd={(event) => dispatch(setPriceRange({ ...priceRange, max: event.target.value }))}
          onMouseUp={(event) => dispatch(setPriceRange({ ...priceRange, max: event.target.value }))}
          type="range"
          min={min}
          max={max}
          value={maxVal}
          onChange={(event) => {
            maxPriceChange(event.target.value);
          }}
          className="thumb thumb--right"
        />

        <div className="slider">
          <div className="slider__track" />
          <div ref={range} className="slider__range" />
        </div>
      </div>

      <Inputs min={minVal} setMin={setMinVal} max={maxVal} setMax={setMaxVal} />
    </>
  );
};

MultiRangeSlider.propTypes = {
  min: PropTypes.number.isRequired,
  max: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default MultiRangeSlider;
