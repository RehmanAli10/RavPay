import React from 'react';
import {StyleSheet, Text, View, FlatList, Image} from 'react-native';
import {Discover} from '../api/DiscoverData';

const DiscoverList = () => {
  const renderItem = ({item}) => {
    return (
      <View style={styles.card}>
        <View style={styles.imageWrapper}>
          <Image style={styles.imgStyle} source={item.image} />
        </View>
        <View style={styles.cardContent}>
          <Text style={styles.description}>{item.description}</Text>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={Discover}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
        contentContainerStyle={styles.contentContainer}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 185,
  },
  contentContainer: {
    paddingHorizontal: 10,
  },
  card: {
    width: 120,
    borderRadius: 10,
    marginHorizontal: 5,
    overflow: 'hidden',
    elevation: 2,
    backgroundColor: '#fff',
  },
  imageWrapper: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 120,
    backgroundColor: '#f2f2f2',
  },
  imgStyle: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
  },
  cardContent: {
    paddingVertical: 8,
    paddingHorizontal: 12,
  },
  description: {
    fontSize: 12,
    color: '#333',
    marginTop: 4,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default DiscoverList;
