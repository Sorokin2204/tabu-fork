import Flex from "components/Atoms/Flex";
import Hr from "components/Atoms/Hr";
import { optionsColored, optionsSize, optionsSizeSelect } from "data";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  getBrandsOptions,
  getColorOptions,
  getMaterialOptions,
  getSizeOptions,
} from "redux/actions/filterOptions";
import { setMainCategory } from "redux/reducers/categoriesReducer";
import Category from "./Category/Category";

const Sidebar = () => {
  const dispatch = useDispatch();
  const brandOptions = useSelector((state) => state.filterOptions.brandOptions);
  const colorOptions = useSelector((state) => state.filterOptions.colorOptions);
  const sizeOptions = useSelector((state) => state.filterOptions.sizeOptions);
  const category = useSelector((state) => state.categories.category);

  const params = useParams();

  const materialOptions = useSelector(
    (state) => state.filterOptions.materialOptions
  );

  useEffect(() => {
    // get options for filter
    dispatch(getBrandsOptions());
    dispatch(getColorOptions());
    dispatch(getSizeOptions());
    dispatch(getMaterialOptions());

    console.log(category?.children);
  }, []);

  return (
    <Flex direction="column">
      <Hr color="#EEEEEE" />
      <Category
        name="КАТЕГОРИЯ"
        type="category"
        options={category?.children | []}
      />
      <Category name="БРЕНД" type="brand" search options={brandOptions} />
      <Category name="ЦВЕТ" type="colored" options={colorOptions} />
      <Category
        name="РАЗМЕР"
        type="size"
        select
        options={sizeOptions}
        optionsSelect={optionsSizeSelect}
      />
      <Category name="МАТЕРИАЛ" type="material" options={materialOptions} />
      <Category name="ЦЕНА" type="price" options={materialOptions} />
    </Flex>
  );
};

export default Sidebar;
