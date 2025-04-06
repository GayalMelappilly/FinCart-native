import { View } from 'react-native';
import SignupEmail from 'components/SignUp/SignupEmail';

const Email = () => {
  return (
    <View className={styles.container}>
      <SignupEmail />
    </View>
  );
};

const styles = {
  container: `items-center flex-1 justify-center`,
};

export default Email
