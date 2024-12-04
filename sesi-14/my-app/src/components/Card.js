import { View, Image, Text } from 'react-native';

const Card = ({ fullName, address, email, imgUri }) => {
  return (
    <View style={styles.card}>
      <Image
        style={{
          width: 50,
          height: 50,
          borderRadius: 10,
        }}
        source={{ uri: imgUri }}
      />
      <View>
        <Text style={{ fontSize: 17, fontWeight: 'bold' }}>{fullName}</Text>
        <Text style={{ fontSize: 12 }}>{address}</Text>
        <Text style={{ fontSize: 13, color: '#E91E63' }}>{email}</Text>
      </View>
    </View>
  );
};

const styles = {
  card: {
    backgroundColor: '#e6e8e3',
    flexDirection: 'row',
    gap: 10,
    padding: 10,
    marginLeft: 10,
    marginRight: 10,
    borderRadius: 5,
  },
};

export default Card;
