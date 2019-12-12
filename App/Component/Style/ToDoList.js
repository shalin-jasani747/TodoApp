import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  iconView: {flexDirection: 'row', justifyContent: 'space-around'},
  completeIcon: {color: 'green'},
  incompleteIcon: {color: '#c9c8cd'},
  deleteIcon: {color: 'red'},
  completeText: {
    textDecorationLine: 'line-through',
  },
});
