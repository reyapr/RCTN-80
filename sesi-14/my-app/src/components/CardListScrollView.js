import { ScrollView, View } from 'react-native';
import Card from './Card';

const CardListScrollView = ({ users }) => {
  return (
    <ScrollView>
      <View style={styles.content}>
        {users.map((user, idx) => {
          const fullName = `${user.name.title} ${user.name.first} ${user.name.last}`;
          const address = `${user.location.postcode} ${user.location.state} ${user.location.country}`;
          return (
            <Card
              key={idx}
              imgUri={user.picture.medium}
              fullName={fullName}
              address={address}
              email={user.email}
            />
          );
        })}
      </View>
    </ScrollView>
  );
};

const styles = {
  content: {
    gap: 10,
  },
};

export default CardListScrollView;
