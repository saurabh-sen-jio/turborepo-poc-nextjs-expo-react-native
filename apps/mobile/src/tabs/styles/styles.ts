import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 24,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    fontWeight: 'bold',
    marginBottom: 20,
    fontSize: 36,
  },
  listContainerStyle: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  spacerStyle: {
    height: 10,
  },
  statusIndicatorStyle: {
    width: 20,
    height: 20,
    margin: 6,
    marginLeft: 16,
    borderRadius: 100,
  },
  navBarStyles: {
    flexDirection: 'row',
    margin: 8,
    elevation: 5
  },
  tabStyles: {
    borderRadius: 16,
    padding: 8,
    marginHorizontal: 4,
    flex: 1,
  },
  tabHeaderStyle: {
    textAlign: 'center',
    fontWeight: 'bold',
    color: 'white',
  },
  textEditStyles: {
    margin: 16,
    paddingHorizontal: 16,
  },
  weatherDataContainer: {
    margin: 16,
    flexDirection: 'row',
    alignSelf: 'center',
  },
  weatherDataStyle: {
    padding: 8,
  },
  loadingContainerStyle: {
    flex: 1,
  },
  weatherDataHeaderStyle: {
    fontWeight: 'bold',
  },
  weatherDataCardStyle: {
    padding: 8,
    alignItems: 'center',
  },
  chatBubble: {
    padding: 16,
    margin: 2,
    borderRadius: 16,
  },
  chatEditTextStyle: {
    paddingHorizontal: 16,
  },
});
