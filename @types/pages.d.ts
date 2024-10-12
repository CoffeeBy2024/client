type MenuProps = {
  data: {
    categories: Category[];
    shops: Shop[];
    working_hours: WorkingHours[][];
    productCategories: CATEGORY[][];
  };
};

type ShopPros = {
  data: {
    shop: Shop;
    working_hours: WorkingHours[];
    productCategories: CATEGORY[];
  };
};
