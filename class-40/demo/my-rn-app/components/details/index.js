import React, { useState } from 'react';
import { Text, TextInput, Image, View, Button, StyleSheet } from 'react-native';

export default function Details({ route }) {
  const { item } = route.params;
  const [image, setImage] = useState(item.url);
  const [title, setTitle] = useState(item.title);
  const [albumId, setAlbumId] = useState(item.albumId);
  const updateHandler = () => {
    console.warn('Hi');
  };
  return (
    <View>
      <View>
        <Text>Title</Text>
        <TextInput value={title} onChangeText={(text) => setTitle(text)} />
      </View>
      <Image style={styles.image} source={{ uri: image }} />
      <View>
        <Text>AlbumId</Text>
        <TextInput value={albumId} onChangeText={(text) => setAlbumId(text)} />
      </View>
      <Button title="Update" onPress={updateHandler} />
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    width: 400,
    height: 200,
  },
});
