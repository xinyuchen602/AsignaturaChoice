import {StyleSheet} from 'react-native';

export const base_red = '#B82828';
export const base_grey = '#D2D2D2';
export const base_orange = '#FC9951';
export const styles = StyleSheet.create({
  elevation: {
    elevation: 5,
    shadowColor: 'black',
  },
  input: {
    width: '80%',
    height: 40,
    padding: 0,
    paddingLeft: 10,
    borderWidth: 1,
    borderColor: 'black',
    marginBottom: 16,
    borderRadius: 10,
    backgroundColor: base_grey,
    fontSize: 20,
  },
  logo: {
    width: 40,
    height: 40,
  },
  container: {
    flex: 1,
    display: 'flex',
    alignItems: 'center',
    paddingLeft: 16,
    paddingRight: 16,
    backgroundColor: base_red,
  },
  searchBar: {
    width: '100%',
    height: 40,
    padding: 10,
    borderWidth: 1,
    borderColor: 'black',
    margin: 16,
    borderRadius: 10,
    backgroundColor: base_grey,
    fontSize: 20,
  },
  fullSizeBox: {
    width: '100%',
    height: '100%',
  },
  error: {
    color: base_grey,
    fontSize: 20,
    fontWeight: 'bold',
  },
});
