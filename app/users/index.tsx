import {
  View,
  Text,
  Button,
  StyleSheet,
  Image,
  TouchableOpacity,
} from "react-native";
import EvilIcons from "@expo/vector-icons/EvilIcons";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import AntDesign from "@expo/vector-icons/AntDesign";
import Feather from "@expo/vector-icons/Feather";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { Link, router, Tabs } from "expo-router";
import avator from "@/assets/images/user.jpeg";
export default function Index() {
  const handleUserinfo = () => {
    router.navigate({ pathname: "/users/profile" });
  };
  const handlePrivacy = () => {
    router.navigate({pathname: "/users/privacy" });
  };
  const handleSetting = () => {
    router.navigate({ pathname: '/users/setting' })
  }
  const handleAbout = () => {
    router.navigate({ pathname: '/users/about' })
  }
  const handleQuestion = () => {
    router.navigate({ pathname: '/users/question' })
  }
  return (
    <View style={styles.User}>
      <View style={styles.userInfo}>
        <View style={styles.images}>
          <Image style={styles.avator} source={avator} />
          <View style={styles.infos}>
            <View>
              <Text style={styles.name}>金太阳</Text>
            </View>
            <View>
              <Text style={styles.sign}>该用户什么信息也没有留下</Text>
            </View>
          </View>
        </View>
        <View style={styles.info}>
          <Text onPress={handleUserinfo}>
            <Text>用户信息</Text>
            <AntDesign name="right" size={16} color="black" />
          </Text>
        </View>
      </View>
      <View style={styles.contents}>
        <View style={styles.toolBox}>
          <View style={styles.tool}>
            <MaterialIcons name="approval" size={22} color="#0096fa" />
            <Text style={styles.texts}>总数</Text>
            <Text style={styles.texts}>55</Text>
          </View>
          <View style={styles.tool}>
            <FontAwesome name="calendar-check-o" size={22} color="#0096fa" />
            <Text style={styles.texts}>在用</Text>
            <Text style={styles.texts}>55</Text>
          </View>
          <View style={styles.tool}>
            <MaterialCommunityIcons name="alert-circle-check" size={22} color="#0096fa" />
            <Text style={styles.texts}>闲置</Text>
            <Text style={styles.texts}>55</Text>
          </View>
          <View style={styles.tool}>
            <Feather name="check-square" size={22} color="#0096fa" />
            <Text style={styles.texts}>报废</Text>
            <Text style={styles.texts}>55</Text>
          </View>
        </View>

        <View style={styles.settingItem}>
          <TouchableOpacity onPress={handleSetting}>
            <View style={styles.setting}>
              <View style={styles.left}>
                <AntDesign name="setting" size={14} color="black" />
                <Text style={styles.texts}>应用设置</Text>
              </View>
              <AntDesign name="right" size={14} color="black" />
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={handleAbout}>
            <View style={styles.setting}>
              <View style={styles.left}>
                <Feather name="user" size={14} color="black" />
                <Text style={styles.texts}>关于我们</Text>
              </View>
              <AntDesign name="right" size={14} color="black" />
            </View>
          </TouchableOpacity>
          {/* <TouchableOpacity onPress={handleQuestion}>
            <View style={styles.setting}>
              <View style={styles.left}>
                <AntDesign name="questioncircleo" size={14} color="black" />
                <Text style={styles.texts}>常见问题</Text>
              </View>
              <AntDesign name="right" size={14} color="black" />
            </View>
          </TouchableOpacity> */}

          <TouchableOpacity onPress={handlePrivacy}>
            <View style={styles.setting}>
              <View style={styles.left}>
                <AntDesign name="infocirlceo" size={14} color="black" />
                <Text style={styles.texts}>隐私条款</Text>
              </View>
              <AntDesign name="right" size={14} color="black" />
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  User: {
    flex: 1,
    display: "flex",
    justifyContent: "flex-start",
    flexDirection: "column",
  },
  userInfo: {
    height: 180,
    width: "100%",
    boxSizing: "borderBox",
    padding: 20,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#0096fa",
  },
  images: {
    display: "flex",
    flexDirection: "row",
    columnGap: 10,
    alignContent: "center",
  },
  avator: {
    width: 60,
    height: 60,
    aspectRatio: "1/1",
    borderRadius: 9999,
  },
  infos: {
    display: "flex",
    flexDirection: "column",
    rowGap: 10,
  },
  name: {
    fontSize: 16,
  },
  sign: {
    fontSize: 12,
  },
  info: {
    display: "flex",
    flexDirection: "row",
    columnGap: 10,
    fontSize: 16,
  },
  contents: {
    transform: [{ translateY: -30 }],
    padding: 10,
    flex: 1,
    color: "#f0f0f0",
    display: "flex",
    flexDirection: "column",
    rowGap: 14,
  },
  toolBox: {
    padding: 10,
    paddingTop: 14,
    paddingBottom: 14,
    backgroundColor: "#ffffff",
    borderRadius: 4,
    display: "flex",
    flexDirection: "row",
  },
  tool: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    rowGap: 6,
  },
  texts: {
    fontSize: 14,
  },
  settingItem: {
    borderRadius: 4,
    backgroundColor: "#ffffff",
    display: "flex",
    flexDirection: "column",
  },
  setting: {
    padding: 10,
    display: "flex",
    flexDirection: "row",
    borderBottomWidth: 1,
    borderBottomColor: "#e8e8e8",
    justifyContent: "space-between",
    alignContent: "center",
  },
  left: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    columnGap: 4,
  },
});
