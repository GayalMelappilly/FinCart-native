import DashboardScreen from 'components/Home/DashboardScreen';
import { View } from 'react-native';

const Home = () => {
  return (
    <View className={styles.container}>
      <DashboardScreen />
    </View>
  );
};

const styles = {
  container: `items-center flex-1 justify-center`,
};

export default Home

