import {View, Text, Image, TouchableOpacity} from 'react-native';
import {MediaItemWithOwner} from '../types/DBTypes';

const MediaListItem = ({item}: {item: MediaItemWithOwner}) => (
  <TouchableOpacity
    onPress={() => {
      console.log('touched ', item.title);
    }}
  >
    <Image style={{height: 300}} source={{uri: 'http:' + item.thumbnail}} />
    <Text>{item.title}</Text>
  </TouchableOpacity>
);

export default MediaListItem;
