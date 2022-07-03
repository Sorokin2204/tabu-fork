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
            setMin(e.floatValue);
          }}
          prefix="₸ "
          thousandSeparator=" "
          value={min}
          autoComplete="off"
          className="price-input"
          onBlur={(e) => {
            const minVal = e.target.value.replace(/\D/g, '');
            if (parseInt(minVal) >= parseInt(max)) {
              setMin(parseInt(max) - 1);
              dispath(setPriceRange({ ...priceRange, min: parseInt(max) - 1 }));
            } else {
              setMin(parseInt(minVal));
              dispath(setPriceRange({ ...priceRange, min: minVal }));
            }
          }}
        />
        {/* <input value={min.current} onChange={(e) => setMin(e.target.value)} className="price-input" /> */}
      </div>

      <div className="price-input-block">
        <label className="price-input-label">До</label>
        <NumberFormat
          prefix="₸ "
          thousandSeparator=" "
          onValueChange={(e) => {
            setMax(e.floatValue);
          }}
          value={max}
          autoComplete="off"
          className="price-input"
          onBlur={(e) => {
            const maxVal = e.target.value.replace(/\D/g, '');
            if (parseInt(maxVal) <= parseInt(min)) {
              setMax(parseInt(min) + 1);
              dispath(setPriceRange({ ...priceRange, max: parseInt(min) + 1 }));
            } else if (maxVal >= 10000000) {
              setMax(10000000);
              dispath(setPriceRange({ ...priceRange, max: 10000000 }));
            } else {
              setMax(parseInt(maxVal));
              dispath(setPriceRange({ ...priceRange, max: maxVal }));
            }
          }}
        />

        {/* <input value={max.current} onChange={(e) => setMax(e.target.value)} className="price-input" /> */}
      </div>
    </div>
  );
};

export default Inputs;
