import { View, Text, Button, StyleSheet } from "react-native";
import { Link, router } from "expo-router";

export default function CheckStatus(props: any) {
  const status = props?.status;
  // 报废 正常 闲置
  return (
    <View style={styles.Status}>
      {status == 0 ? (
        <View style={styles.checked}>
          <Text style={styles.text}>待点验</Text>
        </View>
      ) : null}
      {status == 1 ? (
        <View style={styles.uncheck}>
          <Text style={styles.text}>已点验</Text>
        </View>
      ) : null}
    </View>
  )
}

const styles = StyleSheet.create({
  Status: {},
  statusbox: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  text: {
    fontSize: 14,
    color: '#FFFFFF'
  },
  uncheck: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'green',
    padding: 10,
    borderBottomRightRadius: 3,
    borderBottomLeftRadius: 3
  },
  checked: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'grey',
    padding: 10,
    borderBottomRightRadius: 3,
    borderBottomLeftRadius: 3
  }
})
