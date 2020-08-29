/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {useEffect, useState, useMemo} from 'react';
import {
  TouchableOpacity,
  StyleSheet,
  View,
  Text,
  KeyboardAvoidingView,
  TextInput,
  ScrollView,
  Image,
  ActivityIndicator,
} from 'react-native';
import Colors from '../../../config/colors';
import {postImage} from './../../../api/code';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import ImagePicker from 'react-native-image-picker';
import styles from './style';
const App = () => {
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState('');
  const [error, setError] = useState('');
  const [timer, setTimer] = useState('30');
  const [code, setCode] = useState('');
  const [imageArray, setImageArray] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    // setLoading(true);
    // setError('');
    // setTimer('30');
    // try {
    //   const getRandomCode = await randomCode();
    //   console.log('App -> getRandomCode', getRandomCode);
    //   setNumber(getRandomCode.data.code);
    //   setLoading(false);
    // } catch (error) {
    //   setLoading(false);
    //   alert(error.response.data.message);
    // }
  }

  console.log(imageArray);

  const getImage = () => {
    const options = {
      title: 'Select Avatar',
      fileSize: 0.1,
      // storageOptions: {
      //   skipBackup: true,
      //   path: 'images',
      // },
    };

    /**
     * The first arg is the options object for customization (it can also be null or omitted for default options),
     * The second arg is the callback which sends object: response (more info in the API Reference)
     */
    ImagePicker.showImagePicker(options, (response) => {
      console.log('Response = ', response);

      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      } else {
        console.log(response);
        setImageArray([...imageArray, response]);
        // You can also display the image using data:
        // const source = { uri: 'data:image/jpeg;base64,' + response.data };
      }
    });
  };

  const arrayImages = useMemo(() => {
    return imageArray.map((data) => {
      console.log(data, 'datas');

      return data;
    });
  }, [imageArray]);

  const remove = (index) => {
    const array = imageArray;
    array.splice(index, 1);
    setImageArray([...array]);
    console.log('remove -> imageArray', array);
  };

  const postImagenya = async () => {
    setLoading(true);
    try {
      let data = new FormData();
      data.append('name', user);
      imageArray.map((item) => {
        data.append('images[]', {
          name: item.fileName,
          type: item.type,
          uri: item.uri,
        });
      });
      const postImageCode = await postImage(data);
      console.log('App -> postImageCode', postImageCode);
      alert(postImageCode.data.message.text[0]);
      setLoading(false);
    } catch (error) {
      console.log(error.response.data);
      if (error.response.data.message.name) {
        alert(error.response.data.message.name);
      }
      if (error.response.data.message['images.0']) {
        error.response.data.message['images.0'].map((data) => {
          alert(data);
        });
      }

      setLoading(false);

      // setError(error.response.data.message['code']);
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
        <View style={styles.textArea}>
          <Text style={styles.text}>Nama</Text>
        </View>

        <TextInput
          style={styles.input}
          onChangeText={(text) => setUser(text)}
          maxLength={50}
        />

        <View style={styles.textArea}>
          <Text style={styles.text}>Gambar</Text>
        </View>
        <View style={styles.gambarArea}>
          {arrayImages.map((data, index) => {
            return (
              <TouchableOpacity
                onPress={() => remove(index)}
                style={styles.gambarItem}>
                <Image style={styles.image} source={{uri: data.uri}} />
              </TouchableOpacity>
            );
          })}
          <TouchableOpacity
            disabled={imageArray.length === 4 && true}
            onPress={() => getImage()}
            style={styles.gambarItem}>
            <FontAwesome name="plus" size={30} color="white" />
          </TouchableOpacity>
        </View>

        <TouchableOpacity
          disabled={loading}
          onPress={() => postImagenya()}
          style={[styles.parent, {backgroundColor: Colors.merah}]}>
          {loading ? (
            <ActivityIndicator color={'#fff'} />
          ) : (
            <Text style={styles.textWhite}>SUBMIT</Text>
          )}
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </ScrollView>
  );
};

export default App;
