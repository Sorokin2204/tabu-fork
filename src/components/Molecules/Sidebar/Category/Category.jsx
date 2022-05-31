import Flex from 'components/Atoms/Flex';
import CheckBox from 'components/Atoms/Form/CheckBox';
import DefaultSelect from 'components/Atoms/Form/DefaultSelect';
import SearchInput from 'components/Atoms/Form/SearchInput';
import Hr from 'components/Atoms/Hr';
import ExpandIcon from 'components/Atoms/Icons/ExpandIcon';
import Text from 'components/Atoms/Text';
import MultiRangeSlider from 'components/Molecules/multiRangeSlider/MultiRangeSlider';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getProductsByCategory } from 'redux/actions/product';
import { setBrandOptions, setCategoryOptions, setColorOptions, setMaterialOptions, setSizeOptions } from 'redux/reducers/filterOptionsReducer';
import styled from 'styled-components';

const StyledCategory = styled.div`
  margin-top: 25px;
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const CategoryName = styled.div`
  font-family: 'Gilroy';
  font-weight: 600;
  font-size: 14px;
  color: #191919;
`;

const Options = styled.div`
  margin-top: 4px;
`;

const Checks = styled.div`
  max-height: ${({ maxHeight }) => maxHeight || '164px'};
  overflow: auto;
  margin-top: 20px;
  &::-webkit-scrollbar {
    width: 4px;
    height: 56px;
  }

  /* Track */
  &::-webkit-scrollbar-track {
    background: #fff;
  }

  /* Handle */
  &::-webkit-scrollbar-thumb {
    background: #e5e5e5;
    border-radius: 16px;
  }
`;

const Category = (props) => {
  let query = '';
  const dispatch = useDispatch();
  const params = useParams();

  const brandOptions = useSelector((state) => state.filterOptions.brandOptions);
  const sizeOptions = useSelector((state) => state.filterOptions.sizeOptions);
  const colorOptions = useSelector((state) => state.filterOptions.colorOptions);
  const materialOptions = useSelector((state) => state.filterOptions.materialOptions);
  const categoryOptions = useSelector((state) => state.filterOptions.categoryOptions);
  const [openOptions, setOpenOptions] = useState(true);
  const [searchBrands, setSearchBrands] = useState('');
  const { pageCategory } = useSelector((state) => state.categories);
  // const getProductsByFilter = () => {
  //   // let selectedCategories = categoryOptions.filter((x) => x.selected === true);
  //   // let selectedBrands = brandOptions.filter((x) => x.selected === true);
  //   // let selectedColors = colorOptions.filter((x) => x.selected === true);
  //   // let selectedSizes = sizeOptions.filter((x) => x.selected === true);
  //   // let selectedMaterials = materialOptions.filter((x) => x.selected === true);
  //   dispatch(getProductsByCategory({ categoryOptions: [pageCategory], brandOptions, colorOptions, sizeOptions, materialOptions, pageCategory }));
  // };

  const filterAllCheckbox = (list, dispatchOptions) => {
    let selectedAllOptions = list.map((x) => ({ ...x, selected: false }));
    dispatch(dispatchOptions(selectedAllOptions));
    dispatch(getProductsByCategory());
  };
  useEffect(() => {
    // console.log(materialOptions);
  }, [materialOptions]);

  const filterCheckbox = (list, title, dispatchOptions, prop) => {
    let findOption = list.find((x) => x[prop ?? 'title'] === title);
    let listCopy = list;
    let foundIndex = list.findIndex((x) => x[prop ?? 'title'] === title);

    if (findOption) {
      findOption.selected = !findOption.selected;
      listCopy[foundIndex] = findOption;

      dispatch(dispatchOptions(listCopy));
      dispatch(getProductsByCategory());
    }
  };
  const toggleAllCheckbox = (type) => {
    if (type === 'category') {
      filterAllCheckbox(categoryOptions, setCategoryOptions);
    }
    if (type === 'brand') {
      filterAllCheckbox(brandOptions, setBrandOptions);
    }

    if (type === 'material') {
      filterAllCheckbox(materialOptions, setMaterialOptions);
    }

    if (type === 'color') {
      filterAllCheckbox(colorOptions, setColorOptions);
    }

    if (type === 'size') {
      filterAllCheckbox(sizeOptions, setSizeOptions);
    }
  };
  const toggleCheckbox = (type, title) => {
    if (type === 'brand') {
      filterCheckbox(brandOptions, title, setBrandOptions);
    }

    if (type === 'material') {
      filterCheckbox(materialOptions, title, setMaterialOptions);
    }

    if (type === 'color') {
      filterCheckbox(colorOptions, title, setColorOptions);
    }

    if (type === 'category') {
      filterCheckbox(categoryOptions, title, setCategoryOptions, 'slug');
    }

    if (type === 'size') {
      filterCheckbox(sizeOptions, title, setSizeOptions);
    }
  };

  return (
    props?.options.length !== 0 && (
      <StyledCategory>
        <Flex justify="space-between" align="center" width="100%" onClick={() => setOpenOptions(!openOptions)}>
          <CategoryName>{props.name}</CategoryName>
          <ExpandIcon active={!openOptions} />
        </Flex>
        <Options {...props} style={{ display: openOptions ? 'block' : 'none' }}>
          {/* Если указан поиск, добавляется поиск */}
          {props.search && <SearchInput value={searchBrands} setValue={setSearchBrands} placeholder="Поиск брендов" />}

          {/* Если указан select, добавляется select */}
          {props.select && <DefaultSelect optionsSelect={props.optionsSelect} />}
          {/* Кнопка выбрать всё */}
          {props?.type !== 'price' && (
            <div>
              <Text fontFamily="Gilroy" fontWeight="400" fontSize="14px" color="#191919" margin="25px 0 0 0" decLine="1px solid #191919" inlineGrid cursor="pointer" onClick={() => toggleAllCheckbox(props?.type)}>
                Снять все
              </Text>
            </div>
          )}

          <Checks>
            {props?.type === 'category' && props?.options?.map((option, i) => <CheckBox value={option.selected} dark onClick={(e) => toggleCheckbox('category', option.slug)} key={i} name={option.title} />)}

            {/* Если тип категории default, выводятся обычные чекбоксы */}
            {props.type === 'brand' &&
              props.options.map((option, i) => {
                const regex = new RegExp(searchBrands, 'gi');
                if (regex.test(option.title)) {
                  return <CheckBox value={option.selected} dark onClick={(e) => toggleCheckbox('brand', option.title)} key={i} name={option.title} />;
                }
              })}

            {props.type === 'size' && props.options.map((option, i) => <CheckBox value={option.selected} dark onClick={() => toggleCheckbox('size', option.title)} key={i} name={option.title} />)}

            {/* Если тип категории colored, выводятся цветные чекбоксы */}
            {props.type === 'color' && props.options.map((option, i) => <CheckBox value={option.selected} dark key={i} onClick={() => toggleCheckbox('color', option.title)} color={option.color_code} name={option.title} />)}

            {/* Если тип категории material, выводятся обычные чекбоксы */}
            {props.type === 'material' &&
              props.options.map((option, i) => {
                return <CheckBox value={option.selected} dark onClick={(e) => toggleCheckbox('material', option.title)} key={i} name={option.title} />;
              })}

            {/* Если тип категории price, выводится инпут с ценой */}
            {props.type === 'price' && <MultiRangeSlider min={0} max={1000} onChange={({ min, max }) => console.log(`min = ${min}, max = ${max}`)} />}
          </Checks>
        </Options>
        <Hr margin="24px 0 0 0" color="#EEEEEE" />
      </StyledCategory>
    )
  );
};

export default Category;
