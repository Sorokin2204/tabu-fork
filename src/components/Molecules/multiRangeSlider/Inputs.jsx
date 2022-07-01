import NumberFormat from 'react-number-format';
import { useDispatch, useSelector } from 'react-redux';
import { setPriceRange } from 'redux/reducers/filterOptionsReducer';
import './multiRangeSlider.css';

const Inputs = ({ min, setMin, max, setMax }) => {
  const dispath = useDispatch();
  const { priceRange } = useSelector((state) => state.filterOptions);
  return (
    <div className="price-inputs">
      <div className="price-input-block">
        <label className="price-input-label">От</label>
        <NumberFormat
          onValueChange={(e) => {
            if (e.floatValue >= parseInt(max)) {
              setMin(parseInt(max) - 1);
            } else {
              setMin(e.floatValue);
            }
          }}
          prefix="₸ "
          thousandSeparator=" "
          value={min}
          autoComplete="off"
          className="price-input"
          onBlur={(e) => dispath(setPriceRange({ ...priceRange, min: e.target.value.replace(/\D/g, '') }))}
        />
        {/* <input value={min.current} onChange={(e) => setMin(e.target.value)} className="price-input" /> */}
      </div>

      <div className="price-input-block">
        <label className="price-input-label">До</label>
        <NumberFormat
          prefix="₸ "
          thousandSeparator=" "
          onValueChange={(e) => {
            if (e.floatValue <= parseInt(min)) {
              setMax(parseInt(min) + 1);
            } else {
              setMax(e.floatValue);
            }
          }}
          value={max}
          autoComplete="off"
          className="price-input"
          onBlur={(e) => dispath(setPriceRange({ ...priceRange, max: e.target.value.replace(/\D/g, '') }))}
        />

        {/* <input value={max.current} onChange={(e) => setMax(e.target.value)} className="price-input" /> */}
      </div>
    </div>
  );
};

export default Inputs;
