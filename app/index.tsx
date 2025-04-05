import { View } from 'react-native';
import HomeScreen from 'components/Home/HomeScreen';

const Home = () => {
  return (
    <View className={styles.container}>
      <HomeScreen/>
    </View>
  );
};

const styles = {
  container: `items-center flex-1 justify-center`,
};

export default Home

