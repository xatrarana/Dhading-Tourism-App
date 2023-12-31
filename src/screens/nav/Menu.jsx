import React, { useEffect, useState } from "react";
import { usePathname, useRouter } from "expo-router";
import {
  View,
  Dimensions,
  TouchableOpacity,
  StyleSheet,
  Text,
} from "react-native";
import * as Svg from "react-native-svg";
import { Ionicons, FontAwesome, MaterialIcons, Entypo } from "@expo/vector-icons";
import { icons } from "../../constants";
import Colors from "../../constants/themes";

export default function Menu() {
  const router = useRouter();
  const path = usePathname();
  const windowWidth = Dimensions.get("window").width;

  
 
  return (
    <View className="absolute bottom-0 w-full z-20  ">
      <View
        className={`  h-16 w-[${windowWidth}]  bg-white flex-row items-center  justify-around  rounded-md rounded-b`}
      >
        <TouchableOpacity
          style={
            (styles.container,
            { backgroundColor: path === "/home" ? Colors.DarkGreen : Colors.white })
          }
          className=" flex  py-1 px-4 rounded-xl  items-center justify-center "
          onPress={() => {
            router.push("/home");
          }}
        >
          <Ionicons
            name="ios-home"
            size={20}
            color={path === "/home" ? Colors.white : "black"}
          />
         {path === "/home" && <Text style={styles.text}>Home</Text>}
        </TouchableOpacity>
        <TouchableOpacity
          style={
            (styles.container,
            { backgroundColor: path === "/location" ? Colors.DarkGreen : Colors.white })
          }
          className=" flex  py-1 px-4 rounded-xl  items-center justify-center"
          onPress={() => {
            router.push({
              pathname: "/location",
            });
          }}
        >
          {/* <Svg.SvgXml xml={icons.location} /> */}
          <FontAwesome
            name="safari"
            size={20}
            color={path === "/location" ? Colors.white: "black"}
          />
          {path === "/location" && <Text style={styles.text}>Location</Text>}

        </TouchableOpacity>
        <TouchableOpacity
          style={
            (styles.container,
            { backgroundColor: path === "/likes" ? Colors.DarkGreen : Colors.white })
          }
          className=" flex  py-1 px-4 rounded-xl  items-center justify-center"
          onPress={() => router.push("/(tabs)/likes")}
        >
          {/* <Svg.SvgXml xml={icons.heart} /> */}
          <Ionicons
            name="ios-heart-sharp"
            size={20}
            color={path === "/likes" ? Colors.white : "black"}
          />
           {path === "/likes" && <Text style={styles.text}>Likes</Text>}

        </TouchableOpacity>
        <TouchableOpacity
          style={
            (styles.container,
            { backgroundColor: path === "/thingstodo" ? Colors.DarkGreen :Colors.white })
          }
          className="  flex  py-1 px-4 rounded-xl  items-center justify-center"
          onPress={() => router.push("/thingstodo")}
        >
          <Entypo
            name="suitcase"
            size={20}
            color={path === "/thingstodo" ? Colors.white: "black"}
          />
           {path === "/thingstodo" && <Text style={styles.text}>Things To Do</Text>}
          
        </TouchableOpacity>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  text: {
    color: Colors.white,
    fontWeight: "bold",
    fontSize: 10,
  },
  container: {
    height: 54,
    width: 56,
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
});
