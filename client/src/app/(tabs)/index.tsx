import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import Header from "../../../components/Header";
import { SafeAreaView } from "react-native-safe-area-context";
import { BANNERS } from "../../../assets/assets";
const { width } = require("react-native").Dimensions.get("window");

export default function Home() {
  return (
    <SafeAreaView className="flex-1" edges={["top"]}>
      <Header showMenu showCart showLogo title="Forever" />
      <ScrollView className="flex-1 px-4" showsVerticalScrollIndicator={false}>
        {/* BANNER SLIDER */}
        <ScrollView
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          className="w-full h-48 rounded-xl"
          scrollEventThrottle={16}
        >
          {BANNERS.map((banner, index) => (
            <View
              key={index}
              className="w-full h-48 relative bg-gray-200 overflow-hidden"
              style={{ width: width - 32 }}
            >
              <Image
                source={{ uri: banner.image }}
                className="w-full h-full rounded-xl"
                resizeMode="cover"
              />
              <View className="absolute inset-0 bg-black/40" />
              <View className="absolute bottom-4 left-4 z-10">
                <Text className="text-white font-bold text-2xl">
                  {banner.title}
                </Text>
                <Text className="text-white text-sm font-medium">
                  {banner.subtitle}
                </Text>
                <TouchableOpacity className="mt-2 bg-white px-4 py-2 rounded-full self-start">
                  <Text className="text-primary font-bold text-xs">
                    Get Now
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          ))}
        </ScrollView>
      </ScrollView>
    </SafeAreaView>
  );
}
