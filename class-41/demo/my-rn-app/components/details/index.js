import React, { useState } from 'react';
import {
  Text,
  TextInput,
  Image,
  View,
  Button,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import DismissKeyboard from '../../util/keyboard-dismiss';
import * as ImagePicker from 'expo-image-picker';
import { useNavigation } from '@react-navigation/native';
import { MaterialIcons } from '@expo/vector-icons';
import { firebase } from '../../firebase/config';
export default function Details({ route }) {
  const { item } = route.params;
  const navigation = useNavigation();
  const [image, setImage] = useState(item.url);
  const [title, setTitle] = useState(item.title);
  const [albumId, setAlbumId] = useState(item.albumId);
  const postsRef = firebase.firestore().collection('posts');

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity style={styles.delete} onPress={deleteHandler}>
          <MaterialIcons name="delete" size={24} color="black" />
        </TouchableOpacity>
      ),
    });
  }, [navigation]);
  const deleteHandler = () => {
    postsRef
      .doc(item.id)
      .delete()
      .then(() => navigation.goBack())
      .catch((error) => console.error('Error While Removing', error));
  };
  const updateHandler = () => {
    uriToBlob(image)
      .then((blob) => uploadToFirebase(blob))
      .then((url) => {
        // const url = `${snapshot.metadata.bucket}/${snapshot.metadata.fullPath}`;
        console.log('URLLLLLLL', url);
        postsRef
          .doc(item.id)
          .update({
            url,
            title,
            albumId,
          })
          .then(() => navigation.goBack())
          .catch((error) => console.error('Error While Updating', error));
      });
  };
  const uriToBlob = (uri) => {
    return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      xhr.onload = function () {
        // return the blob
        resolve(xhr.response);
      };

      xhr.onerror = function () {
        // something went wrong
        reject(new Error('uriToBlob failed'));
      };
      // this helps us get a blob
      xhr.responseType = 'blob';
      xhr.open('GET', uri, true);

      xhr.send(null);
    });
  };
  const uploadToFirebase = (blob) => {
    return new Promise((resolve, reject) => {
      var storageRef = firebase.storage().ref();
      storageRef
        .child(`posts/${title}.jpg`)
        .put(blob, {
          contentType: 'image/jpeg',
        })
        .then((snapshot) => {
          blob.close();
          resolve(storageRef.child(`posts/${title}.jpg`).getDownloadURL());
        })
        .catch((error) => {
          reject(error);
        });
    });
  };
  const imageHandler = async () => {
    if (Platform.OS !== 'web') {
      const { status } = await ImagePicker.requestCameraRollPermissionsAsync();
      if (status !== 'granted') {
        alert('Sorry, we need camera roll permissions to make this work!');
      }
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      });

      console.log(result);

      if (!result.cancelled) {
        setImage(result.uri);
      }
    }
  };
  return (
    <DismissKeyboard>
      <View>
        <View>
          <Text>Title</Text>
          <TextInput
            style={styles.input}
            value={title}
            onChangeText={(text) => setTitle(text)}
          />
        </View>
        <TouchableOpacity onPress={imageHandler}>
          <Image style={styles.image} source={{ uri: image }} />
        </TouchableOpacity>
        <View>
          <Text>AlbumId</Text>
          <TextInput
            style={styles.input}
            value={`${albumId}`}
            onChangeText={(text) => setAlbumId(text)}
          />
        </View>
        <Button title="Update" onPress={updateHandler} />
      </View>
    </DismissKeyboard>
  );
}

const styles = StyleSheet.create({
  image: {
    width: 400,
    height: 200,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    minWidth: 150,
    paddingLeft: 10,
  },
  delete: {
    marginRight: 20,
  },
});
