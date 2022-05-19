import "./multiRangeSlider.css";

const Inputs = ({ min, setMin, max, setMax }) => {
  return (
    <div className="price-inputs">
      <div className="price-input-block">
        <label className="price-input-label">От</label>
        <input
          value={min.current}
          onChange={(e) => setMin(e.target.value)}
          className="price-input"
        />
      </div>

      <div className="price-input-block">
        <label className="price-input-label">До</label>
        <input
          value={max.current}
          onChange={(e) => setMax(e.target.value)}
          className="price-input"
        />
      </div>
    </div>
  );
};

export default Inputs;
