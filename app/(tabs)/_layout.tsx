
import { icons } from '@/constants/icons'
import { images } from '@/constants/images'
import { Tabs } from 'expo-router'
import React from 'react'
import { Image, ImageBackground, ImageSourcePropType, Text, View } from 'react-native'

type Props = {
  focused: boolean
  icon: ImageSourcePropType
  title: string
}

function TabIcon({ focused, icon, title }: Props) {
  if (focused) {
    return (
      <ImageBackground
        source={images.highlight}
        className="flex flex-row w-full flex-1 min-w-[112px] min-h-14 mt-4 justify-center items-center rounded-full overflow-hidden"
      >
        <Image source={icon} tintColor="#151312" className="size-5" />
        <Text className="text-secondary text-base font-semibold ml-2">
          {title}
        </Text>
      </ImageBackground>
    );
  }

  return (
    <View className="size-full justify-center items-center mt-4 rounded-full">
      <Image source={icon} tintColor="#A8B5DB" className="size-5" />
    </View>
  );
}

const _layout = () => {
  return (
    <Tabs>
      <Tabs.Screen name='index' options={{headerShown: false, title: "Home", tabBarIcon: (item) => (
        <TabIcon title='Home' icon={icons.home} focused={item.focused} />
      )}} />
      <Tabs.Screen name='search' options={{headerShown: false, title: "Search", tabBarIcon: (item) => (
        <TabIcon title='Search' icon={icons.search} focused={item.focused} />
      )}} />
      <Tabs.Screen name='saved' options={{headerShown: false, title: "Saved" , tabBarIcon: (item) => (
        <TabIcon title='Saved' icon={icons.save} focused={item.focused} />
      )}} />
      <Tabs.Screen name='profile' options={{headerShown: false, title: "Profile", tabBarIcon: (item) => (
        <TabIcon title='Profile' icon={icons.person} focused={item.focused} />
      )}} />
    </Tabs>
  )
}

export default _layout