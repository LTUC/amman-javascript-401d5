import React, { useEffect, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import List from '../list';
import { useIsFocused } from '@react-navigation/native';
import { firebase } from '../../firebase/config';
export default function Home() {
  const [data, setData] = useState([]);
  const isFocucused = useIsFocused();
  const postsRef = firebase.firestore().collection('posts');
  const posts = [];
  useEffect(() => {
    postsRef.get().then((snapshot) => {
      snapshot.forEach((doc) => {
        const data = doc.data();
        console.log('data??', data);
        posts.push({ id: doc.id, ...data });
      });
      setData(posts);
    });
  }, []);
  console.log(data);
  return (
    <View style={styles.container}>
      <List data={data} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
});
