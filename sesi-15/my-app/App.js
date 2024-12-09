import { StatusBar } from 'expo-status-bar';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import LearnFlex from './components/LearnFlex';
import { useState } from 'react';
import { Input } from '@ui-kitten/components';
import { ApplicationProvider } from '@ui-kitten/components';
import * as eva from '@eva-design/eva';

const validEmail = 'user@gmail.com';
const validPassword = 'pass123';

export default function App() {
  const [email, setEmail] = useState('');
  const [isEmailValid, setIsEmailValid] = useState(true);
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  console.log(isEmailValid, 'isEmailValid');

  const handleLogin = () => {
    if (email !== validEmail && password !== validPassword) {
      setError('Invalid email or password');
    }
  };

  return (
    <ApplicationProvider {...eva} theme={eva.light}>
      <View style={styles.container}>
        <View style={styles.loginContainer}>
          <Text style={styles.title}>Login</Text>
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Email</Text>
            <Input
              value={email}
              status={isEmailValid ? 'success' : 'danger'}
              textContentType="emailAddress"
              onChangeText={(v) => {
                const emailRegex =
                  /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
                const isValidEmail = emailRegex.test(v);
                setIsEmailValid(isValidEmail);
                setEmail(v);
              }}
              style={{
                width: 150,
              }}
            />
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Password</Text>
            <TextInput
              value={password}
              onChangeText={(v) => setPassword(v)}
              secureTextEntry
              style={styles.input}
            />
          </View>
          <View style={styles.btnContainer}>
            <TouchableOpacity
              onPress={handleLogin}
              style={styles.btn}
              activeOpacity={0.75}
            >
              <Text style={{ color: 'white' }}>Login</Text>
            </TouchableOpacity>
          </View>
          {error && (
            <View>
              <Text style={{ color: 'red', fontWeight: '500' }}>{error}</Text>
            </View>
          )}
        </View>
      </View>
    </ApplicationProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  loginContainer: {
    backgroundColor: '#05d5f5',
    paddingHorizontal: 20,
    paddingVertical: 30,
    gap: 10,
    width: 280,
    borderColor: '#34eb6f',
    borderWidth: 1,
    borderRadius: 10,
  },
  inputContainer: {
    flexDirection: 'row',
    // gap: 10,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  input: {
    borderWidth: 1,
    minWidth: 150,
    height: 25,
    padding: 5,
    maxWidth: 150,
    borderRadius: 5,
    backgroundColor: 'white',
    borderColor: '#34eb6f',
  },
  title: {
    color: '#FFFF',
    alignSelf: 'center',
    fontSize: 20,
    fontWeight: 'bold',
  },
  label: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
  btnContainer: {
    alignSelf: 'flex-end',
  },
  btn: {
    borderColor: '#34eb6f',
    borderWidth: 1,
    backgroundColor: '#34eb6f',
    padding: 7,
    borderRadius: 5,
    fontWeight: 'bold',
  },
});
