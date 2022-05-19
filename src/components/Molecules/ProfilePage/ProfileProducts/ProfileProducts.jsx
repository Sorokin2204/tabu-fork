import CartProductCard from "components/Molecules/Cart/CartComponent/Left/CartProductCard/CartProductCard";
import * as S from "./Styled";

const ProfileProducts = () => {
  const product = {
    id: 7,
    title: "Кеды Lacoste",
    description:
      "В кедах от LACOSTE ваш ребенок будет чувствовать себя уверено и комфортно! Коллекция детской обуви для девочек представлена стильной моделью, которая изготовлена из искусственной кожи, текстиля и эластичной резины.  Особенности модели:  Верх прошит герметичными швами. Задник с плотной вставкой защищает от деформации и позволяет комфортно обувать обувь. Шнурки и мягкий воротник фиксируют обувь на стопе. Подкладка из текстиля и уютная стелька обеспечивают комфортную среду внутри обуви. Легкая и гибкая подошва с нескользящей подметкой. Украшены фирменной отделкой с знаменитой символикой бренда.",
    seller: {
      id: 1,
      password:
        "pbkdf2_sha256$260000$XiJF7uAZjgmkh86kv76h3p$M26B7KyeGmfsR8t1VrGN/iSq18rlhm7w89Yk1uKbysw=",
      last_login: "2022-04-11T13:26:58.916330Z",
      email: "root@mail.com",
      first_name: "Алексей",
      last_name: "Ыааывц",
      user_type: 1,
      is_active: true,
      is_staff: true,
      is_superuser: true,
      date_joined: "2022-03-21T12:33:02.954538Z",
      groups: [],
      user_permissions: [],
    },
    category: {
      id: 23,
      title: "Новинки",
      description: "",
      lft: 24,
      rght: 25,
      tree_id: 3,
      level: 1,
      parent: 19,
    },
    active: true,
    price: 1200,
    old_price: 1500,
    size: [
      {
        id: 2,
        title: "42",
        size_value: "42",
      },
    ],
    color: null,
    brand: null,
    tags: [
      {
        id: 1,
        title: "New",
      },
    ],
    material: {
      id: 2,
      title: "Хлопок",
    },
    condition: 1,
    condition_images: [
      {
        id: 6,
        main_image: true,
        image:
          "/media/images/%D0%B1%D0%B0%D0%B1%D0%B8%D0%B4%D0%B6%D0%BE%D0%BD.jpg",
      },
      {
        id: 11,
        main_image: false,
        image: "/media/images/14545.jpg",
      },
    ],
    images: [
      {
        id: 12,
        main_image: true,
        image: "/media/images/448.jpg",
      },
    ],
  };

  return (
    <S.Wrapper>
      <CartProductCard profile product={product} />
      <CartProductCard profile product={product} />
    </S.Wrapper>
  );
};

export default ProfileProducts;
