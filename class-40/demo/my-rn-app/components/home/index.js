import React, { useEffect, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import List from '../list';
export default function Home() {
  const [data, setData] = useState([]);
  useEffect(() => {
    console.warn('HELLO WORLD');
    fetch('https://reactapinative.herokuapp.com/album/')
      .then((res) => res.json())
      .then((json) => setData(json))
      .catch((e) => console.error(e.message));
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
