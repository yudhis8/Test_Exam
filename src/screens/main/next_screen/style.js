import {StyleSheet, Dimensions} from 'react-native';
import Colors from '../../../config/colors';
const width = Dimensions.get('window').width;
export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-start',
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
  textArea: {
    marginBottom: 63,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  gambarArea: {
    marginBottom: 63,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  gambarItem: {
    width: width * 0.15,
    height: width * 0.15,
    backgroundColor: Colors.merah,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15,
  },
  image: {
    width: width * 0.15,
    height: width * 0.15,
    resizeMode: 'stretch',
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
