import { Text, TouchableOpacity, View } from "react-native"
import { Ionicons } from '@expo/vector-icons'
// import { useNavigation } from "@react-navigation/native"
// import { NativeStackNavigationProp } from "@react-navigation/native-stack"
import { RootStackParamList } from "types/navigation"
import { Link, router } from "expo-router"


const Footer = () => {

    // type NavigationProp = NativeStackNavigationProp<RootStackParamList, 'index'>;
    // const navigation = useNavigation<NavigationProp>();

    return (
        < View className="flex-row bg-white border-t border-gray-200 py-2" >
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
            <TouchableOpacity className="flex-1 items-center py-2" onPress={()=>router.push('/signup')}>
                <Ionicons name="person" size={24} color="#666" />
                <Text className="text-xs mt-1 text-gray-500">Profile</Text>
            </TouchableOpacity>
        </View >
    )
}

export default Footer