import Button from 'components/Atoms/Button';
import Flex from 'components/Atoms/Flex';
import Hr from 'components/Atoms/Hr';
import { optionsColored, optionsSize, optionsSizeSelect } from 'data';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getBrandsOptions, getColorOptions, getMaterialOptions, getSizeOptions } from 'redux/actions/filterOptions';
import { setShowMobileFilterModal } from 'redux/reducers/appReducer';
import { setMainCategory } from 'redux/reducers/categoriesReducer';
import Category from './Category/Category';

const Sidebar = () => {
  const dispatch = useDispatch();
  const brandOptions = useSelector((state) => state.filterOptions.brandOptions);
  const colorOptions = useSelector((state) => state.filterOptions.colorOptions);
  const sizeOptions = useSelector((state) => state.filterOptions.sizeOptions);
  const categoryOptions = useSelector((state) => state.filterOptions.categoryOptions);
  const category = useSelector((state) => state.categories.category);
  const pageCategory = useSelector((state) => state.categories.pageCategory);

  const params = useParams();
  const isMobile = useSelector((state) => state.app.isMobile);
  const materialOptions = useSelector((state) => state.filterOptions.materialOptions);

  useEffect(() => {
    console.log('BRANDS SIZE COLORS USE');
    // get options for filter
    dispatch(getBrandsOptions());
    dispatch(getColorOptions());
    dispatch(getSizeOptions());
    dispatch(getMaterialOptions());

    console.log(category?.children);
  }, []);
  const showMobileFilterModal = useSelector((state) => state.app.showMobileFilterModal);
  const onClose = () => {
    dispatch(setShowMobileFilterModal(false));
  };
  return (
    <Flex
      direction="column"
      style={{
        ...(isMobile && {
          boxSizing: 'border-box',
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: '#fff',
          width: '100vw',
          height: '100vh',
          zIndex: 1000000,
          padding: '20px 33px 32px',
          overflow: 'overlay',
          transition: 'transform 0.3s',
          transform: 'translateX(0%)',
          ...(!showMobileFilterModal && {
            transform: 'translateX(100%)',
          }),
        }),
      }}>
      {isMobile && (
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: '20px',
          }}>
          <div
            style={{
              fontFamily: 'Mont',
              fontStyle: 'normal',
              fontWeight: '500',
              fontSize: '14px',
              lineHeight: '18px',
              color: '#717171',
            }}>
            Фильтр по
          </div>
          <div style={{ cursor: 'pointer' }} onClick={onClose}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M7 7L17 17" stroke="black" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M7 17L17 7" stroke="black" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
      )}

      <Hr color="#EEEEEE" />
      <Category name="КАТЕГОРИЯ" type="category" options={categoryOptions} />
      <Category name="БРЕНД" type="brand" search options={brandOptions} />
      <Category name="ЦВЕТ" type="color" options={colorOptions} />
      <Category name="РАЗМЕР" type="size" select options={sizeOptions} optionsSelect={optionsSizeSelect} />
      <Category name="МАТЕРИАЛ" type="material" options={materialOptions} />
      <Category name="ЦЕНА" type="price" options={materialOptions} />
      {isMobile && (
        <Button
          onClick={onClose}
          dark_filled
          style={{
            fontSize: '14px',
            padding: '14.5px',
            marginTop: '72px',
          }}>
          Сохранить
        </Button>
      )}
    </Flex>
  );
};

export default Sidebar;
