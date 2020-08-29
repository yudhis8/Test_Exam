/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {useEffect, useState} from 'react';
import {
  TouchableOpacity,
  StyleSheet,
  View,
  Text,
  KeyboardAvoidingView,
  TextInput,
  ScrollView,
  ActivityIndicator,
} from 'react-native';
import Colors from '../../../config/colors';
import {randomCode, postCode} from './../../../api/code';
import styles from './style';
const App = (props) => {
  const [loading, setLoading] = useState(true);
  const [number, setNumber] = useState('');
  const [error, setError] = useState('');
  const [timer, setTimer] = useState('30');
  const [code, setCode] = useState('');
  useEffect(() => {
    fetchData();
  }, []);
  if (number !== '') {
    const timeout = setTimeout(() => {
      let detik = parseInt(timer) - 1;
      let angka;
      if (detik < 10) {
        angka = '0' + detik;
      } else {
        angka = detik;
      }
      setTimer(String(angka));
    }, 1000);
    if (timer == '00') {
      clearTimeout(timeout);
    }
  }

  async function fetchData() {
    setLoading(true);
    setError('');
    setTimer('30');
    try {
      const getRandomCode = await randomCode();
      console.log('App -> getRandomCode', getRandomCode);

      setNumber(getRandomCode.data.code);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      alert(error.response.data.message);
    }
  }

  const postCodenya = async () => {
    setError('');
    try {
      const data = {
        code: code,
      };
      const postRandomCode = await postCode(data);
      console.log('App -> postRandomCode', postRandomCode);
      props.navigation.navigate('NextScreen');
    } catch (error) {
      console.log(error.response.data.message['code']);
      setError(error.response.data.message['code']);
      // alert(error.response.data.message['code']);
    }
  };
  return (
    <ScrollView
      style={{width: '100%'}}
      contentContainerStyle={{
        justifyContent: 'center',
        height: '100%',
      }}>
      <KeyboardAvoidingView style={styles.container}>
        {error !== '' && (
          <View style={styles.alert}>
            <Text style={styles.textWhite}>{error}</Text>
          </View>
        )}
        <View style={styles.parent}>
          <Text style={styles.text}>Random Code</Text>
        </View>
        <View
          style={[styles.parent, {backgroundColor: Colors.biru, width: '30%'}]}>
          {loading ? (
            <ActivityIndicator color={Colors.white} />
          ) : (
            <Text style={styles.textWhite}>{number}</Text>
          )}
        </View>

        <TextInput
          style={styles.input}
          onChangeText={(text) => setCode(text)}
          maxLength={4}
          keyboardType="numeric"
        />

        <TouchableOpacity
          onPress={() => postCodenya()}
          style={[styles.parent, {backgroundColor: Colors.merah}]}>
          <Text style={styles.textWhite}>SUBMIT</Text>
        </TouchableOpacity>
        <View style={styles.parent}>
          {timer === '00' ? (
            <Text onPress={() => fetchData()} style={styles.text}>
              Get ulang
            </Text>
          ) : (
            <Text style={styles.text}>00:{timer}</Text>
          )}
        </View>
      </KeyboardAvoidingView>
    </ScrollView>
  );
};

export default App;
