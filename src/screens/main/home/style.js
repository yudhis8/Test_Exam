import {StyleSheet} from 'react-native';
import Colors from '../../../config/colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 15,
  },
  alert: {
    marginBottom: 63,
    borderRadius: 25,
    padding: 10,
    backgroundColor: Colors.kuning,

    justifyContent: 'center',
    alignItems: 'center',
  },
  parent: {
    marginBottom: 63,
    borderRadius: 25,
    padding: 10,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    width: '100%',
    borderColor: Colors.biru,
    borderWidth: 1,
    borderRadius: 25,
    marginBottom: 63,
    padding: 10,
  },
  text: {
    fontSize: 20,
    color: Colors.black,
    letterSpacing: 1,
  },
  textWhite: {
    fontSize: 20,
    color: Colors.white,
    letterSpacing: 1,
    textAlign: 'center',
  },
});
