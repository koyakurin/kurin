import React from 'react';
import styles from '../assets/styles';

import { Text, View, Image, Dimensions, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const CardItem = ({
  actions,
  description,
  image,
  matches,
  name,
  onPressLeft,
  onPressRight,
  status,
  variant
}) => {
  // 커스텀 스타일
  const fullWidth = Dimensions.get('window').width;
  const imageStyle = [
    {
      borderRadius: 10,
      width: variant ? fullWidth / 2 - 30 : fullWidth - 100,
      height: variant ? 170 : 280,
      margin: variant ? 0 : 13
    }
  ];

  const nameStyle = [
    {
      paddingTop: variant ? 10 : 15,
      paddingBottom: variant ? 5 : 7,
      color: '#363636',
      fontSize: variant ? 15 : 30,
      fontWeight: 'bold'
    }
  ];

  return (
    <View style={styles.containerCardItem}>
      {/* 이미지 */}
      <Image source={image} style={imageStyle} />

      {/* 매칭 */}
      {matches && (
        <View style={styles.matchesCardItem}>
          <Text style={styles.matchesTextCardItem}>
            <Icon name="md-heart" size={18} /> {matches}% Match !
          </Text>
        </View>
      )}

      {/* 이름 */}
      <Text style={nameStyle}>{name}</Text>

      {/* 설명 */}
      {description && (
        <Text style={styles.descriptionCardItem}>{description}</Text>
      )}

      {/* 상태 */}
      {status && (
        <View style={styles.status}>
          <View style={status === 'Online' ? styles.online : styles.offline} />
          <Text style={styles.statusText}>{status}</Text>
        </View>
      )}

      {/* 액션 */}
      {actions && (
        <View style={styles.actionsCardItem}>
          <TouchableOpacity style={styles.miniButton}>
            <Text style={styles.star}>
              <Icon name="md-star" size={25} />
            </Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button} onPress={() => onPressLeft()}>
            <Text style={styles.like}>
              <Icon name="md-heart" size={30} />
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.button}
            onPress={() => onPressRight()}
          >
            <Text style={styles.dislike}>
              <Icon name="md-close" size={30}/>
            </Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.miniButton}>
            <Text style={styles.flash}>
              <Icon name="md-flash" size={25}/>
            </Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

export default CardItem;
