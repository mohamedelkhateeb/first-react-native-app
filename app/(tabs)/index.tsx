import React from "react";
import { View, Text, TextInput, FlatList, Image, TouchableOpacity, StyleSheet, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Feather } from "@expo/vector-icons";

const categories = ["All", "Espresso", "Cappuccino", "Latte", "Mocha"];
const featuredCoffees = [
  { id: "1", name: "Cappuccino", price: "$4.50", image: require("../../assets/images/partial-react-logo.png") },
  { id: "2", name: "Espresso", price: "$3.00", image: require("../../assets/images/react-logo.png") },
  { id: "3", name: "Latte", price: "$4.00", image: require("../../assets/images/react-logo.png") },
];

const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.welcome}>Good Morning,</Text>
        <Text style={styles.heading}>Find the best coffee for you</Text>
      </View>

      <View style={styles.searchContainer}>
        <Feather name="search" size={20} color="#aaa" style={styles.searchIcon} />
        <TextInput placeholder="Search coffee..." style={styles.searchInput} />
      </View>

      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.categoriesContainer}>
        {categories.map((category, index) => (
          <TouchableOpacity key={index} style={styles.category}>
            <Text style={styles.categoryText}>{category}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      <FlatList
        data={featuredCoffees}
        keyExtractor={(item) => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.featuredList}
        renderItem={({ item }) => (
          <View style={styles.coffeeCard}>
            <Image source={item.image} style={styles.coffeeImage} />
            <Text style={styles.coffeeName}>{item.name}</Text>
            <Text style={styles.coffeePrice}>{item.price}</Text>
          </View>
        )}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#f5f5f5", paddingHorizontal: 20 },
  header: { marginTop: 20 },
  welcome: { fontSize: 18, color: "#aaa" },
  heading: { fontSize: 24, fontWeight: "bold", marginTop: 5 },
  searchContainer: { flexDirection: "row", alignItems: "center", marginTop: 15, backgroundColor: "#fff", borderRadius: 10, paddingHorizontal: 10, shadowColor: "#000", shadowOpacity: 0.1, shadowRadius: 10, elevation: 5 },
  searchIcon: { marginRight: 10 },
  searchInput: { flex: 1, paddingVertical: 10 },
  categoriesContainer: { flexDirection: "row", marginTop: 20 },
  category: { backgroundColor: "#fff", paddingVertical: 8, paddingHorizontal: 15, borderRadius: 20, marginRight: 10, shadowColor: "#000", shadowOpacity: 0.1, shadowRadius: 5, elevation: 2 },
  categoryText: { fontSize: 16 },
  featuredList: { marginTop: 20 },
  coffeeCard: { backgroundColor: "#fff", borderRadius: 15, padding: 10, alignItems: "center", marginRight: 15, shadowColor: "#000", shadowOpacity: 0.1, shadowRadius: 10, elevation: 5 },
  coffeeImage: { width: 80, height: 80, resizeMode: "contain" },
  coffeeName: { fontSize: 16, fontWeight: "bold", marginTop: 5 },
  coffeePrice: { fontSize: 14, color: "#888", marginTop: 3 },
});

export default HomeScreen;
