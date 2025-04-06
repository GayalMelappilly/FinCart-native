import OrdersScreen from 'components/Orders/Ordes';
import ProductsScreen from 'components/Products/Products';
import { View } from 'react-native';

const Products = () => {
  return (
    <View className={styles.container}>
      <ProductsScreen />
    </View>
  );
};

const styles = {
  container: `items-center flex-1 justify-center`,
};

export default Products