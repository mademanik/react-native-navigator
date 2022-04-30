import { useState, useRef } from "react";
import { StatusBar } from "expo-status-bar";
import {
  TouchableOpacity,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Animated,
} from "react-native";
import profile from "./assets/profile.png";
// Tab icons...
import home from "./assets/home.png";
import search from "./assets/search.png";
import notifications from "./assets/bell.png";
import settings from "./assets/settings.png";
import logout from "./assets/logout.png";
//Menu
import menu from "./assets/menu.png";
import close from "./assets/close.png";

//Photo
import photo from "./assets/photo.jpg";

export default function App() {
  const [currentTab, setCurrentTab] = useState("Home");
  //to get the current status of menu...
  const [showMenu, setShowMenu] = useState(false);
  //Animated Properties...
  const offsetValue = useRef(new Animated.Value(0)).current;
  //Scale initial must be one...
  const scaleValue = useRef(new Animated.Value(1)).current;
  const closeButtonOffSet = useRef(new Animated.Value(0)).current;

  return (
    <SafeAreaView style={styles.container}>
      <View style={{ justifyContent: "flex-start", padding: 15 }}>
        <Image
          source={profile}
          style={{
            width: 60,
            height: 60,
            borderRadius: 10,
            marginTop: 8,
          }}
        ></Image>

        <Text
          style={{
            fontSize: 15,
            fontWeight: "bold",
            color: "white",
            marginTop: 20,
          }}
        >
          Made Manik Datu Yasa
        </Text>
        <TouchableOpacity>
          <Text
            style={{
              marginTop: 6,
              color: "white",
            }}
          >
            View Profile
          </Text>
        </TouchableOpacity>
        <View style={{ flexGrow: 1, marginTop: 50 }}>
          {
            // Tab Bar Buttons...
          }

          {TabButton(currentTab, setCurrentTab, "Home", home)}
          {TabButton(currentTab, setCurrentTab, "Search", search)}
          {TabButton(currentTab, setCurrentTab, "Notifications", notifications)}
          {TabButton(currentTab, setCurrentTab, "Settings", settings)}
        </View>
        <View>{TabButton(currentTab, setCurrentTab, "LogOut", logout)}</View>
      </View>
      {
        //Overlay view...
      }

      <Animated.View
        style={{
          flexGrow: 1,
          backgroundColor: "white",
          position: "absolute",
          top: 0,
          bottom: 0,
          left: 0,
          right: 0,
          paddingHorizontal: 15,
          paddingVertical: 20,
          borderRadius: showMenu ? 15 : 0,
          //Transforming view...
          transform: [{ scale: scaleValue }, { translateX: offsetValue }],
        }}
      >
        {
          //Menu Button...
        }

        <Animated.View
          style={{
            transform: [
              {
                translateY: closeButtonOffSet,
              },
            ],
          }}
        >
          <TouchableOpacity
            onPress={() => {
              //Do Actions Here...
              //Scaling the view...
              Animated.timing(scaleValue, {
                toValue: showMenu ? 1 : 0.88,
                duration: 300,
                useNativeDriver: true,
              }).start();

              Animated.timing(offsetValue, {
                //Your Random Value...
                toValue: showMenu ? 0 : 230,
                duration: 300,
                useNativeDriver: true,
              }).start();

              Animated.timing(closeButtonOffSet, {
                //Your Random Value...
                toValue: !showMenu ? -30 : 0,
                duration: 300,
                useNativeDriver: true,
              }).start();

              setShowMenu(!showMenu);
            }}
          >
            <Image
              source={showMenu ? close : menu}
              style={{
                width: 30,
                height: 30,
                tintColor: "black",
                marginTop: 40,
              }}
            ></Image>
          </TouchableOpacity>

          <Text
            style={{
              fontSize: 30,
              fontWeight: "bold",
              color: "black",
              paddingTop: 20,
            }}
          >
            {currentTab}
          </Text>

          <Image
            source={photo}
            style={{
              width: "100%",
              height: 300,
              borderRadius: 15,
              marginTop: 20,
            }}
          ></Image>
          <Text
            style={{
              fontSize: 20,
              fontWeight: "bold",
              paddingTop: 15,
              paddingBottom: 5,
            }}
          >
            Made Manik Datu Yasa
          </Text>
          <Text style={{}}>
            Programmer, Musisi
          </Text>
        </Animated.View>
      </Animated.View>
    </SafeAreaView>
  );
}

// For multiple Buttons...
const TabButton = (currentTab, setCurrentTab, title, image) => {
  return (
    <TouchableOpacity
      onPress={() => {
        if (title == "LogOut") {
          // Do your stuff...
        } else {
          setCurrentTab(title);
        }
      }}
    >
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          paddingVertical: 8,
          backgroundColor: currentTab == title ? "white" : "transparent",
          paddingLeft: 13,
          paddingRight: 35,
          borderRadius: 8,
          marginTop: 15,
        }}
      >
        <Image
          source={image}
          style={{
            width: 25,
            height: 25,
            tintColor: currentTab == title ? "#5359D1" : "white",
          }}
        ></Image>
        <Text
          style={{
            fontSize: 15,
            fontWeight: "bold",
            paddingLeft: 15,
            color: currentTab == title ? "#5359D1" : "white",
          }}
        >
          {title}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#5359D1",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
});
