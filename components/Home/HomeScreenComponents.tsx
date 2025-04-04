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
import Footer from 'components/Footer/Footer';

const HomeScreenComponent = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Tropical', 'Freshwater', 'Saltwater', 'Pond', 'Plants'];

  const featuredFish = [
    { id: '1', name: 'Neon Tetra', price: '₹39', image: require('../../assets/fish.jpeg') },
    { id: '2', name: 'Discus', price: '₹29', image: require('../../assets/fish.jpeg') },
    { id: '3', name: 'Molly', price: '₹29', image: require('../../assets/fish.jpeg') },
    { id: '4', name: 'Guppy', price: '₹49', image: require('../../assets/fish.jpeg') },
  ];

  const breeders = [
    { id: '1', name: "FinCart", listings: '500+ listings', image: require('../../assets/logo.png') },
    { id: '2', name: 'FinCart', listings: '1,000+ listings', image: require('../../assets/logo.png') },
    { id: '3', name: 'FinCart', listings: '300+ listings', image: require('../../assets/logo.png') },
    { id: '4', name: 'FinCart', listings: '800+ listings', image: require('../../assets/logo.png') },
  ];

  const renderCategoryItem = ({ item }: any) => (
    <TouchableOpacity
      className={`px-4 py-2 mx-1 rounded-full ${selectedCategory === item ? 'bg-blue-500' : 'bg-gray-100'}`}
      onPress={() => setSelectedCategory(item)}
    >
      <Text className={`font-medium ${selectedCategory === item ? 'text-white' : 'text-gray-800'}`}>
        {item}
      </Text>
    </TouchableOpacity>
  );

  const renderFishItem = ({ item }: any) => (
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

  const renderBreederItem = ({ item }: any) => (
    <TouchableOpacity className="w-36 mx-2 bg-white rounded-lg overflow-scroll shadow items-center p-4">
      <Image
        source={item.image}
        className="w-full h-20 mb-2 rounded-md"
        resizeMode="cover"
      />
      <Text className="text-sm font-medium text-center mb-1">{item.name}</Text>
      <Text className="text-xs text-gray-500 text-center">{item.listings}</Text>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView className="flex-1 bg-gray-100">
      {/* Header */}
      <View className="flex-row items-center p-4 bg-white border-b border-gray-200">
        <TouchableOpacity className="p-1">
          <Ionicons name="menu" size={24} color="#333" />
        </TouchableOpacity>
        <Text className="text-lg font-bold text-gray-800 ml-5">FinCart</Text>
        <View className="flex-row ml-auto">
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
            source={require('../../assets/fish.jpeg')}
            className="w-full h-full"
            resizeMode="cover"
          />
          <View className="absolute top-0 left-0 right-0 bottom-0 bg-black/30 justify-center items-center p-4">
            <Text className="text-2xl font-bold text-white mb-4 text-center">Find your perfect fish</Text>
            <View className='flex-row gap-2 px-4'>
              <View className="flex-row items-center bg-white rounded-full w-4/5 px-3 overflow-hidden">
                <Ionicons name="search" size={20} color="#666" className="mr-2" />
                <TextInput
                  className="flex-1 py-2 text-base"
                  placeholder="Search for fish"
                  value={searchQuery}
                  onChangeText={setSearchQuery}
                />
              </View>
              <TouchableOpacity className="bg-blue-500 py-2 px-4 rounded-full">
                <Text className="text-white font-bold">Search</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>

        {/* Categories */}
        <View className='bg-white'>
          <FlatList
            data={categories}
            renderItem={renderCategoryItem}
            keyExtractor={(item) => item}
            horizontal
            showsHorizontalScrollIndicator={false}
            className="py-4 bg-white mx-4 rounded-full"
          />
        </View>

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
            className="-mx-2"
          />
        </View>
      </ScrollView>
      <Footer />
    </SafeAreaView>
  );
};

export default HomeScreenComponent;