import { useDispatch, useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import { getProductsByCategory } from 'redux/actions/product';
import { setBrandOptions, setCategoryOptions, setColorOptions, setConditionOptions, setMaterialOptions, setSizeOptions } from 'redux/reducers/filterOptionsReducer';
import * as S from './Styled';
import Tag from './Tag';

const Tags = () => {
  const { brandOptions, brandParams } = useSelector((state) => state.filterOptions);
  const sizeOptions = useSelector((state) => state.filterOptions.sizeOptions);
  const colorOptions = useSelector((state) => state.filterOptions.colorOptions);
  const materialOptions = useSelector((state) => state.filterOptions.materialOptions);
  const categoryOptions = useSelector((state) => state.filterOptions.categoryOptions);
  const conditionOptions = useSelector((state) => state.filterOptions.conditionOptions);
  const dispatch = useDispatch();
  const removeTag = (list, title, dispatchOptions, prop) => {
    let findOption = list.find((x) => x[prop ?? 'title'] === title);
    let listCopy = list;
    let foundIndex = list.findIndex((x) => x[prop ?? 'title'] === title);

    if (findOption) {
      findOption.selected = false;
      listCopy[foundIndex] = findOption;
      dispatch(dispatchOptions(listCopy));
      dispatch(getProductsByCategory({ page: 1 }));
    }
  };
  const onRemoveTag = (type, prop) => {
    if (type === 'category') {
      removeTag(categoryOptions, prop, setCategoryOptions, 'slug');
    }
    if (type === 'brand') {
      removeTag(brandOptions, prop, setBrandOptions);
    }

    if (type === 'condition') {
      removeTag(conditionOptions, prop, setConditionOptions, 'value');
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

  let [searchParams, setSearchParams] = useSearchParams();
  return (
    <S.Tags>
      {brandOptions?.map((option) => {
        const brandsParam = searchParams.get('brand')?.split(',');
        const isBrandInUrl = !!brandsParam?.find((brand) => brand === option?.title);
        if (isBrandInUrl)
          return (
            <Tag
              name={option?.title}
              onClick={() => {
                const removeBrands = brandsParam?.filter((item) => item !== option.title).join(',');
                setSearchParams({ brand: removeBrands });
              }}
            />
          );
      })}
      {sizeOptions?.map((size) => size?.selected && <Tag name={size?.title} onClick={() => onRemoveTag('size', size?.title)} />)}
      {colorOptions?.map((color) => color?.selected && <Tag name={color?.title} onClick={() => onRemoveTag('color', color?.title)} />)}
      {materialOptions?.map((material) => material?.selected && <Tag name={material?.title} onClick={() => onRemoveTag('material', material?.title)} />)}
      {categoryOptions?.map((category) => category?.selected && <Tag name={category?.title} onClick={() => onRemoveTag('category', category?.slug)} />)}
      {conditionOptions?.map((conditoin) => conditoin?.selected && <Tag name={conditoin?.label} onClick={() => onRemoveTag('condition', conditoin?.value)} />)}
    </S.Tags>
  );
};

export default Tags;
