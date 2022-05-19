import Grid from "../../../Atoms/Grid";
import Card from "../../Card/Card";
import product1 from "assets/img/products/1.png";
import product2 from "assets/img/products/2.png";
import product3 from "assets/img/products/3.png";
import Text from "../../../Atoms/Text";
import ProductsSlider from "../../ProductsSlider/ProductsSlider";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const NewProducts = () => {
  const newProducts = useSelector((state) => state.product.newProducts);
  const navigate = useNavigate();

  return (
    <Grid>
      <Text
        color="#191919"
        fontFamily="Mont"
        fontWeight="600"
        margin="0 0 0 56px"
        fontSize="24px"
        textTransform="uppercase"
        cursor="pointer"
        onClick={() => navigate(`/categories/Новинки`)}
      >
        Недавно опубликованные
      </Text>
      <ProductsSlider products={newProducts} />
    </Grid>
  );
};

export default NewProducts;
