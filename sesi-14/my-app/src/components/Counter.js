import { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

const Counter = () => {
  const [counter, setCounter] = useState(0);
  return (
    <View style={styles.container}>
      <Text style={styles.h1}>Counter</Text>
      <Text style={styles.h3}>{counter}</Text>
      <View style={styles.btnCointainer}>
        <TouchableOpacity
          style={[styles.btn, styles.btnMin]}
          onPress={() => setCounter(counter - 1)}
        >
          <Text style={[styles.h3, { color: 'red' }]}>-</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.btn, styles.btnPlus]}
          onPress={() => setCounter(counter + 1)}
        >
          <Text style={[styles.h3, { color: 'green' }]}>+</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Counter;

const styles = {
  h1: {
    fontSize: 40,
  },
  h3: {
    fontSize: 30,
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 15,
  },
  btnCointainer: {
    flexDirection: 'row',
    gap: 15,
  },
  btn: {
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
    paddingRight: 15,
    paddingLeft: 15,
  },
  btnMin: {
    borderColor: 'red',
  },
  btnPlus: {
    borderColor: 'green',
  },
};
