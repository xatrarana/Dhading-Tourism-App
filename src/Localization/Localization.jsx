  import {
    View,
    Text,
    Modal,
    FlatList,
    TouchableOpacity,
    Pressable,
  } from "react-native";
  import React from "react";
  import * as Svg from "react-native-svg";
  import { icons } from "../constants";
  import "../translation";
  import i18n from "../translation";
  import { useTranslation } from "react-i18next";
  const Localization = ({ langModal, setLangModal, setTitle}) => {
    const [language, setLanguage] = React.useState(() => {
      if (i18n.language === "eng") {
        return [
          { name: "English", selected: true },
          { name: "Nepali", selected: false },
        ];
      } else {
        return [
          { name: "English", selected: false },
          { name: "Nepali", selected: true },
        ];
      }
    });

    const onSelect = (index) => {
      const temp = language;
      temp.map((item, ind) => {
        if (index == ind) {
          if (item.selected === true) {
            item.selected = false;
          } else {
            item.selected = true;
            setTitle(item.name.slice(0, 3).toLowerCase());
            setLangModal(!langModal);
          }
        } else {
          item.selected = false;
        }
      });
      let result = [];
      temp.map((item) => {
        result.push(item);
      });
      setLanguage(result);
    };
    return (
      <View>
        <Modal
          animationType="slide"
          visible={langModal}
          onRequestClose={() => setLangModal(!langModal)}
          transparent={true}
        >
          <View className=" bg-[#00000028]   h-full w-full flex items-center justify-center">
            <View className="h-[30%] w-[90%] bg-white rounded-md">
              <Text className="font-bold text-2xl text-center mt-2">
                Select Language
              </Text>
              <View className="BtnsContainer">
                <FlatList
                  data={language}
                  renderItem={({ item, index }) => {
                    return (
                      <View className=" px-2 ">
                        <TouchableOpacity
                          className={`${
                            item.selected ? "border border-primary" : "border"
                          }  h-14 my-3 flex-row  rounded-md items-center justify-between`}
                          onPress={() => {
                            onSelect(index);
                            if(i18n.language === "nep"){
                              i18n.changeLanguage("eng");
                            } else {
                              i18n.changeLanguage("nep")
                            }
                          
                          }}
                        >
                          <Text className="pl-4 text-xl">{item.name}</Text>
                          {item.selected ? (
                            <Pressable
                              className="pr-5"
                              onPress={() => {
                                onSelect(index);
                                
                              
                              }}
                            >
                              <Svg.SvgXml xml={icons.selected} />
                            </Pressable>
                          ) : (
                            <Pressable className="pr-5">
                              <Svg.SvgXml xml={icons.select} />
                            </Pressable>
                          )}
                        </TouchableOpacity>
                      </View>
                    );
                  }}
                />
              </View>
            </View>
          </View>
        </Modal>
      </View>
    );
  };

  export default Localization;