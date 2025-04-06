import { Text, TouchableOpacity, View } from "react-native"
import { useState } from "react";
import { MaterialIcons, MaterialCommunityIcons, Ionicons, Feather } from '@expo/vector-icons';
import { router } from "expo-router"

const Footer = () => {
    const [active, setActive] = useState('dashboard');

    const footerItems = [
        {
            id: "dashboard",
            label: "Dashboard",
            icon: (color:string) => <MaterialIcons name="dashboard" size={24} color={color} />,
            router: '/'
        },
        {
            id: "orders",
            label: "Orders",
            icon: (color:string) => <Feather name="shopping-bag" size={24} color="#6B7280" />,
            router: '/orders'
        },
        {
            id: "products",
            label: "Products",
            icon: (color:string) => <Feather name="box" size={24} color={color} />,
            router: '/products'
        },
        {
            id: "profile",
            label: "Profile",
            icon: (color:string) => <Ionicons name="person" size={24} color={color} />,
            router: '/signup'
        }
    ];

    return (
        <View className="flex-row bg-white border-t border-gray-200 py-2">
            {footerItems.map((item) => {
                const isActive = item.id === active;
                const color = isActive ? "#000" : "#666"; 
                return (
                    <TouchableOpacity
                        key={item.id}
                        className="flex-1 items-center py-2"
                        onPress={() => {
                            setActive(item.id);
                            router.push(item.router);
                        }}
                    >
                        {item.icon(color)}
                        <Text className={`text-xs mt-1 ${isActive ? "text-gray-800" : "text-gray-500"}`}>
                            {item.label}
                        </Text>
                    </TouchableOpacity>
                );
            })}
        </View>
    );
};

export default Footer;
