import React from 'react';
import { View, Text, Pressable, StatusBar } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { router } from 'expo-router';

interface MenuCardProps {
  title: string;
  icon: keyof typeof MaterialIcons.glyphMap;
  color: string;
  onPress: () => void;
}

const MenuCard: React.FC<MenuCardProps> = ({ title, icon, color, onPress }) => (
  <Pressable 
    onPress={onPress}
    className="w-full p-6 rounded-xl mb-4 shadow"
    style={{ backgroundColor: color }}
  >
    <View className="items-center justify-center">
      <MaterialIcons name={icon} size={36} color="white" />
      <Text className="text-white font-semibold text-lg mt-2">{title}</Text>
    </View>
  </Pressable>
);

const ProductsScreen = () => {
  return (
    <View className="flex-1 p-4">
      <StatusBar barStyle="light-content" />
      
      <View className="flex-row flex-wrap justify-between mt-4">
        <View className="w-[48%]">
          <MenuCard 
            title="My Products" 
            icon="inventory" 
            color="#4f46e5" 
            onPress={() => router.push('MyProducts')} 
          />
          
          <MenuCard 
            title="Edit Product" 
            icon="edit" 
            color="#0891b2" 
            onPress={() => router.push('EditProduct')} 
          />
        </View>
        
        <View className="w-[48%]">
          <MenuCard 
            title="Add Product" 
            icon="add-circle-outline" 
            color="#059669" 
            onPress={() => router.push('/addProducts')} 
          />
          
          <MenuCard 
            title="Delete Product" 
            icon="delete-outline" 
            color="#dc2626" 
            onPress={() => router.push('DeleteProduct')} 
          />
        </View>
      </View>
    </View>
  );
};

export default ProductsScreen;