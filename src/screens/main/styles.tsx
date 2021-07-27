import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  flexContainer: {
    flex: 1,
  },
  container: {
    paddingHorizontal: 24,
  },
  header: {
    textAlign: 'center',
    fontSize: 30,
    marginBottom: 20,
    marginTop: 10,
  },
  itemContainer: {
    padding: 20,
    marginBottom: 20,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: 'black',
  },
  image: {
    height: 100,
    width: 100,
    backgroundColor: 'lightgray',
    borderRadius: 15,
    marginVertical: 10,
    alignSelf: 'center',
  },
  textName: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  descriptionText: {
    textAlign: 'justify',
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
});
