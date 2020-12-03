import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
export default function ListItem({ item }) {
  const navigation = useNavigation();
  return (
    <View style={styles.card}>
      <TouchableOpacity
        activeOpacity={0.7}
        onPress={() => {
          navigation.navigate('Details', { item });
        }}
      >
        <Text>{item.title}</Text>
        <Image style={styles.image} source={{ uri: item.url }} />
        <Text>AlbumId: {item.albumId}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  image: { width: 400, height: 200 },
  card: {
    margin: 10,
  },
});
