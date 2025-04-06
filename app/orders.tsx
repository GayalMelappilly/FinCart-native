import OrdersScreen from 'components/Orders/Ordes';
import { View } from 'react-native';

const Orders = () => {
  return (
    <View className={styles.container}>
      <OrdersScreen />
    </View>
  );
};

const styles = {
  container: `items-center flex-1 justify-center`,
};

export default Orders