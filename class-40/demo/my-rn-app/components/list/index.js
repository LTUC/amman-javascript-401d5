import React from 'react';
import { FlatList } from 'react-native';
import ListItem from './list-item';

export default function List({ data }) {
  return (
    <FlatList
      data={data}
      renderItem={({ item, index }) => <ListItem item={item} />}
      keyExtractor={(item, index) => item.id.toString()}
    />
  );
}
