import { useState } from 'react';
import OutsideClickHandler from 'react-outside-click-handler';
import { useDispatch, useSelector } from 'react-redux';
import { getProductsByCategory } from 'redux/actions/product';
import { setTypeSort } from 'redux/reducers/filterOptionsReducer';
import { setProducts } from 'redux/reducers/productReducer';

const SelectText = ({ options }) => {
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();
  const { typeSort } = useSelector((state) => state.filterOptions);
  const brandOptions = useSelector((state) => state.filterOptions.brandOptions);
  const sizeOptions = useSelector((state) => state.filterOptions.sizeOptions);
  const colorOptions = useSelector((state) => state.filterOptions.colorOptions);
  const materialOptions = useSelector((state) => state.filterOptions.materialOptions);
  const categoryOptions = useSelector((state) => state.filterOptions.categoryOptions);
  const pageCategory = useSelector((state) => state.categories.pageCategory);
  const selectHandler = (type) => {
    dispatch(setTypeSort(type));
    setOpen(false);
    dispatch(getProductsByCategory({ categoryOptions: [pageCategory], brandOptions, colorOptions, sizeOptions, materialOptions, typeSort: type }));
  };

  return (
    <div className="container">
      <div className="dropdown">
        <div className={`dropdown__btn ${open && 'active_btn'}`} onClick={() => setOpen(!open)}>
          {typeSort.name ? typeSort.name : 'Cортировка'}
          <div className="icon-dropdown">
            <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9 1L5 5L1 1" stroke="#191919" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
        <OutsideClickHandler
          onOutsideClick={() => {
            setOpen(false);
          }}>
          <div className={`dropdown__content ${open && 'active_content'}`}>
            <div className="dropdown__content-title" onClick={() => setOpen(!open)}>
              {typeSort.name ? typeSort.name : 'Cортировка'}
              <div className="icon-dropdown">
                <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9 1L5 5L1 1" stroke="#191919" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            </div>
            {options.map((option) => (
              <div key={option.slug} className={`dropdown__item ${option.slug === typeSort.slug && 'active_item'}`} onClick={(e) => selectHandler(option)}>
                {option.name}
              </div>
            ))}
          </div>
        </OutsideClickHandler>
      </div>
    </div>
  );
};

export default SelectText;
