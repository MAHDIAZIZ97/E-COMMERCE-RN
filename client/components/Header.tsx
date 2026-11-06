import { View, Text, TouchableOpacity, Image } from "react-native";
import { HeaderProps } from "../src/constants/types";
import { Ionicons } from "@expo/vector-icons";
import { COLORS } from "../src/constants";
import { useRouter } from "expo-router";

export default function Header({
  title,
  showBack,
  showSearch,
  showCart,
  showMenu,
  showLogo,
}: HeaderProps) {
  const router = useRouter();
  const {itemsCount} = {itemsCount: 6}; // Replace with actual cart items count from your state or context
  return (
    <View className="flex-row items-center justify-between px-4 py-3 bg-white">
      {/* left side */}
      <View className="flex-row items-center flex-1">
        {showBack && (
          <TouchableOpacity onPress={() => router.back()} className="mr-3">
            <Ionicons name="arrow-back" size={24} color={COLORS.primary} />
          </TouchableOpacity>
        )}
        {showMenu && (
          <TouchableOpacity className="mr-3">
            <Ionicons name="menu-outline" size={28} color={COLORS.primary} />
          </TouchableOpacity>
        )}

        {showLogo ? (
          <View className="flex-1">
            <Image source={require('../assets/logo.png')} style={{ width: '100%', height: 24 }} resizeMode="contain" />
          </View>
        ) : title && (
          <Text className="text-xl font-extrabold text-primary text-center flex-1 mr-8 uppercase">{title}</Text>
        )}
        {(!title && !showSearch) && (
          <View className="flex-1" />
        )}
      </View>

      {/* right side */}
      <View className="flex-row items-center gap-4">
        {showSearch && (
          <TouchableOpacity>
            <Ionicons name="search-outline" size={24} color={COLORS.primary} />
          </TouchableOpacity>
        )}
        {showCart && (
          <TouchableOpacity onPress={() => router.push('/(tabs)/cart')}>
            <Ionicons name="bag-outline" size={24} color={COLORS.primary} />
            <View className="absolute -top-1 -right-2 bg-red-500 rounded-full w-4 h-4 justify-center items-center">
              <Text className="text-white text-xs font-bold">{itemsCount}</Text>
            </View>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
}
