import React from "react";
import { View, FlatList, SafeAreaView, StyleSheet, Dimensions, TextInput } from "react-native";
import Product from "./component/product/Product";
import storeData from '../store-data.json';

const App = () => {

  const renderStore = ({ item }) => {
    return (
      <Product product={item} />
    )
  }

  const headerComponent = () => {
    return (
      <TextInput style={styles.search} placeholder="Ara..." autoCapitalize="none" inputMode="text" />
    )
  }

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <FlatList
          ListHeaderComponent={headerComponent}
          numColumns={2}
          data={storeData}
          renderItem={renderStore}
          keyExtractor={(item) => item.id}
        />
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  search: {
    width: Dimensions.get('window').width,
    backgroundColor: '#edeff1',
    borderRadius: 5,
    margin: 5,
    padding: 10
  }
})

export default App;