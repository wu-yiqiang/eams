import { View, Text, Button, StyleSheet } from "react-native";
import { Link, router } from "expo-router";

export default function Status(props: any) {
  const status = props?.status;
  // 报废 正常 闲置
  return (
    <View style={styles.Status}>
      {status == 0 ? (
        <View style={styles.scrap}>
          <Text style={styles.text}>已报废</Text>
        </View>
      ) : null}
      {status == 1 ? (
        <View style={styles.used}>
          <Text style={styles.text}>使用中</Text>
        </View>
      ) : null}
      {status == 2 ? (
        <View style={styles.unused}>
          <Text style={styles.text}>已闲置</Text>
        </View>
      ) : null}
    </View>
  );
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
  scrap: {
    padding: 4,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'red',
    borderRadius: 4
  },
  used: {
    padding: 4,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#0096fa',
    borderRadius: 4
  },
  unused: {
    padding: 4,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'grey',
    borderRadius: 4
  }
})
