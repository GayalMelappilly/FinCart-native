import React, { useState } from 'react';
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const HomeScreen = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Tropical', 'Freshwater', 'Saltwater', 'Pond', 'Plants'];
  
  const featuredFish = [
    { id: '1', name: 'Neon Tetra', price: '$2.99', image: require('../assets/fish.jpeg') },
    { id: '2', name: 'Discus', price: '$29.99', image: require('../assets/fish.jpeg') },
    { id: '3', name: 'Molly', price: '$1.99', image: require('../assets/fish.jpeg') },
    { id: '4', name: 'Guppy', price: '$3.99', image: require('../assets/fish.jpeg') },
  ];

  const breeders = [
    { id: '1', name: "Randy's Fish Room", listings: '500+ listings', image: require('../assets/fish.jpeg') },
    { id: '2', name: 'Tropical Fish Haven', listings: '1,000+ listings', image: require('../assets/fish.jpeg') },
    { id: '3', name: 'AquaHouse', listings: '300+ listings', image: require('../assets/fish.jpeg') },
    { id: '4', name: 'Ocean City Aquatics', listings: '800+ listings', image: require('../assets/fish.jpeg') },
  ];

  const renderCategoryItem = ({ item }:any) => (
    <TouchableOpacity
      className={`px-4 py-2 mx-1 rounded-full ${selectedCategory === item ? 'bg-blue-500' : 'bg-gray-100'}`}
      onPress={() => setSelectedCategory(item)}
    >
      <Text className={`font-medium ${selectedCategory === item ? 'text-white' : 'text-gray-800'}`}>
        {item}
      </Text>
    </TouchableOpacity>
  );

  const renderFishItem = ({ item }:any) => (
    <TouchableOpacity className="w-40 mx-2 bg-white rounded-lg overflow-scroll shadow">
      <View className="h-30 w-full bg-gray-100">
        <Image
          source={item.image}
          className="w-full h-40 rounded-md"
          resizeMode="cover"
        />
      </View>
      <Text className="text-base font-medium px-2 pt-2 pb-1">{item.name}</Text>
      <Text className="text-sm text-blue-500 font-bold px-2 pb-2">{item.price}</Text>
    </TouchableOpacity>
  );

  const renderBreederItem = ({ item }:any) => (
    <TouchableOpacity className="w-36 mx-2 bg-white rounded-lg overflow-scroll shadow items-center p-4">
      <Image
        source={item.image}
        className="w-20 h-20 mb-2"
        resizeMode="contain"
      />
      <Text className="text-sm font-medium text-center mb-1">{item.name}</Text>
      <Text className="text-xs text-gray-500 text-center">{item.listings}</Text>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView className="flex-1 bg-gray-100">
      {/* Header */}
      <View className="flex-row items-center justify-between p-4 bg-white border-b border-gray-200">
        <TouchableOpacity className="p-1">
          <Ionicons name="menu" size={24} color="#333" />
        </TouchableOpacity>
        <Text className="text-lg font-bold text-gray-800">Fish Market</Text>
        <View className="flex-row">
          <TouchableOpacity className="p-1 ml-4">
            <Ionicons name="heart-outline" size={24} color="#333" />
          </TouchableOpacity>
          <TouchableOpacity className="p-1 ml-4">
            <Ionicons name="cart-outline" size={24} color="#333" />
          </TouchableOpacity>
        </View>
      </View>

      <ScrollView className="flex-1">
        {/* Hero Banner */}
        <View className="h-60 relative">
          <Image
            source={require('../assets/fish.jpeg')}
            className="w-full h-full"
            resizeMode="cover"
          />
          <View className="absolute top-0 left-0 right-0 bottom-0 bg-black bg-opacity-30 justify-center items-center p-4">
            <Text className="text-2xl font-bold text-white mb-4 text-center">Find your perfect fish</Text>
            <View className="flex-row items-center bg-white rounded-full w-full px-3 overflow-hidden">
              <Ionicons name="search" size={20} color="#666" className="mr-2" />
              <TextInput
                className="flex-1 py-2 text-base"
                placeholder="Search for fish, plants and more"
                value={searchQuery}
                onChangeText={setSearchQuery}
              />
              <TouchableOpacity className="bg-blue-500 py-2 px-4 rounded-full">
                <Text className="text-white font-bold">Search</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>

        {/* Categories */}
        <FlatList
          data={categories}
          renderItem={renderCategoryItem}
          keyExtractor={(item) => item}
          horizontal
          showsHorizontalScrollIndicator={false}
          className="py-4 bg-white"
        />

        {/* Featured Fish */}
        <View className="p-4 bg-white mb-2">
          <Text className="text-xl font-bold mb-4 text-gray-800">Featured Fish</Text>
          <FlatList
            data={featuredFish}
            renderItem={renderFishItem}
            keyExtractor={(item) => item.id}
            horizontal
            showsHorizontalScrollIndicator={false}
            className="-mx-2"
          />
        </View>

        {/* Breeders */}
        <View className="p-4 bg-white mb-2">
          <Text className="text-xl font-bold mb-4 text-gray-800">Breeders</Text>
          <FlatList
            data={breeders}
            renderItem={renderBreederItem}
            keyExtractor={(item) => item.id}
            horizontal
            showsHorizontalScrollIndicator={false}
            className="-mx-2 h-2"
          />
        </View>
      </ScrollView>

      {/* Bottom Navigation */}
      <View className="flex-row bg-white border-t border-gray-200 py-2">
        <TouchableOpacity className="flex-1 items-center py-2">
          <Ionicons name="home" size={24} color="#0088cc" />
          <Text className="text-xs mt-1 text-blue-500">Home</Text>
        </TouchableOpacity>
        <TouchableOpacity className="flex-1 items-center py-2">
          <Ionicons name="search" size={24} color="#666" />
          <Text className="text-xs mt-1 text-gray-500">Search</Text>
        </TouchableOpacity>
        <TouchableOpacity className="flex-1 items-center py-2">
          <Ionicons name="grid" size={24} color="#666" />
          <Text className="text-xs mt-1 text-gray-500">Categories</Text>
        </TouchableOpacity>
        <TouchableOpacity className="flex-1 items-center py-2">
          <Ionicons name="person" size={24} color="#666" />
          <Text className="text-xs mt-1 text-gray-500">Profile</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;