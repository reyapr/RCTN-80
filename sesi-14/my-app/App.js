import { FlatList, SafeAreaView, View } from 'react-native';
import { useEffect, useState } from 'react';
import axios from 'axios';
import CardListScrollView from './src/components/CardListScrollView';
import Card from './src/components/Card';

export default function App() {
  const [users, setUsers] = useState([]);

  const fetchUsers = async () => {
    const { data } = await axios.get('https://randomuser.me/api?results=100');

    setUsers(data.results);
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <CardListScrollView users={users} />
      {/* <FlatList
        data={users}
        contentContainerStyle={styles.flatListContent}
        renderItem={({ item: user }) => {
          const fullName = `${user.name.title} ${user.name.first} ${user.name.last}`;
          const address = `${user.location.postcode} ${user.location.state} ${user.location.country}`;
          return (
            <Card
              imgUri={user.picture.medium}
              fullName={fullName}
              address={address}
              email={user.email}
            />
          );
        }}
        keyExtractor={(item, index) => index.toString()}
      /> */}
    </SafeAreaView>
  );
}

const styles = {
  container: {
    flex: 1,
    backgroundColor: '#799370',
  },
  flatListContent: {
    gap: 10,
  },
};
