import { useDispatch, useSelector } from 'react-redux';
import { getProductsByCategory } from 'redux/actions/product';
import { setBrandOptions, setCategoryOptions, setColorOptions, setMaterialOptions, setSizeOptions } from 'redux/reducers/filterOptionsReducer';
import * as S from './Styled';
import Tag from './Tag';

const Tags = () => {
  const brandOptions = useSelector((state) => state.filterOptions.brandOptions);
  const sizeOptions = useSelector((state) => state.filterOptions.sizeOptions);
  const colorOptions = useSelector((state) => state.filterOptions.colorOptions);
  const materialOptions = useSelector((state) => state.filterOptions.materialOptions);
  const categoryOptions = useSelector((state) => state.filterOptions.categoryOptions);
  const dispatch = useDispatch();
  const removeTag = (list, title, dispatchOptions, prop) => {
    let findOption = list.find((x) => x[prop ?? 'title'] === title);
    let listCopy = list;
    let foundIndex = list.findIndex((x) => x[prop ?? 'title'] === title);

    if (findOption) {
      findOption.selected = false;
      listCopy[foundIndex] = findOption;
      dispatch(dispatchOptions(listCopy));
      dispatch(getProductsByCategory());
    }
  };
  const onRemoveTag = (type, prop) => {
    if (type === 'category') {
      removeTag(categoryOptions, prop, setCategoryOptions, 'slug');
    }
    if (type === 'brand') {
      removeTag(brandOptions, prop, setBrandOptions);
    }

    if (type === 'material') {
      removeTag(materialOptions, prop, setMaterialOptions);
    }

    if (type === 'color') {
      removeTag(colorOptions, prop, setColorOptions);
    }

    if (type === 'size') {
      removeTag(sizeOptions, prop, setSizeOptions);
    }
  };
  return (
    <S.Tags>
      {brandOptions?.map((brand) => brand?.selected && <Tag name={brand?.title} onClick={() => onRemoveTag('brand', brand?.title)} />)}
      {sizeOptions?.map((size) => size?.selected && <Tag name={size?.title} onClick={() => onRemoveTag('size', size?.title)} />)}
      {colorOptions?.map((color) => color?.selected && <Tag name={color?.title} onClick={() => onRemoveTag('color', color?.title)} />)}
      {materialOptions?.map((material) => material?.selected && <Tag name={material?.title} onClick={() => onRemoveTag('material', material?.title)} />)}
      {categoryOptions?.map((category) => category?.selected && <Tag name={category?.title} onClick={() => onRemoveTag('category', category?.slug)} />)}
    </S.Tags>
  );
};

export default Tags;
