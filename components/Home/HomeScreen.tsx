import { View } from 'react-native';
import HomeScreenComponent from './HomeScreenComponents';

export const HomeScreen = () => {
  return (
    <View className={styles.container}>
      <HomeScreenComponent/>
    </View>
  );
};

const styles = {
  container: `items-center flex-1 justify-center`,
};
