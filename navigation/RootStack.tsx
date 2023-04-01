import * as React from "react";

import { NavigationContainer } from "@react-navigation/native";
import AntIcon from "@expo/vector-icons/AntDesign";
import {
  NativeStackNavigationOptions,
  createNativeStackNavigator,
} from "@react-navigation/native-stack";
import { SpotListScreen } from "../screens/SpotListScreen";
import { SpotDetailScreen } from "../screens/SpotDetailScreen";
import {
  BottomTabNavigationOptions,
  createBottomTabNavigator,
} from "@react-navigation/bottom-tabs";
import colors from "../theme/colors";
import { SearchScreen } from "../screens/SearchScreen";

export type SpotStackParamList = {
  SpotList: undefined;
  SpotDetail: { spotId: string };
};

export type SearchStackParamList = {
  Search: undefined;
};

export type RootTabParamList = {
  Home: undefined;
  Search: undefined;
};

const SpotStackNavigator = createNativeStackNavigator<SpotStackParamList>();
const SearchStackNavigator = createNativeStackNavigator<SearchStackParamList>();
const RootTabNavigator = createBottomTabNavigator<RootTabParamList>();

const defaultStackNavigationOptions: NativeStackNavigationOptions = {
  contentStyle: {
    backgroundColor: colors.blue[500],
  },
  headerStyle: {
    backgroundColor: colors.blue[500],
  },
  headerTitleStyle: {
    color: colors.white[500],
  },
};

const defaultTabNavigationOptions: BottomTabNavigationOptions = {
  headerShown: false,
  tabBarItemStyle: {
    backgroundColor: colors.blue[500],
  },
  tabBarActiveTintColor: colors.primary[500],
  tabBarInactiveTintColor: colors.grey[500],
  tabBarStyle: {
    borderTopWidth: 0,
  },
  tabBarShowLabel: false,
};

export function SpotStack() {
  return (
    <SpotStackNavigator.Navigator screenOptions={defaultStackNavigationOptions}>
      <SpotStackNavigator.Screen
        name="SpotList"
        component={SpotListScreen}
        options={{
          title: "Olatuak",
          headerTitleStyle: {
            fontFamily: "PermanentMarker-Regular",
            fontSize: 25,
            color: colors.white[500],
          },
        }}
      />
      <SpotStackNavigator.Screen
        name="SpotDetail"
        component={SpotDetailScreen}
        options={{
          presentation: "modal",
        }}
      />
    </SpotStackNavigator.Navigator>
  );
}

export function SearchStack() {
  return (
    <SearchStackNavigator.Navigator
      screenOptions={defaultStackNavigationOptions}
    >
      <SearchStackNavigator.Screen name="Search" component={SearchScreen} />
    </SearchStackNavigator.Navigator>
  );
}

export function RootStack() {
  return (
    <NavigationContainer>
      <RootTabNavigator.Navigator screenOptions={defaultTabNavigationOptions}>
        <RootTabNavigator.Screen
          name="Home"
          component={SpotStack}
          options={{
            tabBarIcon: icon => <AntIcon name="home" {...icon} />,
          }}
        />
        <RootTabNavigator.Screen
          name="Search"
          component={SearchStack}
          options={{
            tabBarIcon: icon => <AntIcon name="search1" {...icon} />,
          }}
        />
      </RootTabNavigator.Navigator>
    </NavigationContainer>
  );
}
