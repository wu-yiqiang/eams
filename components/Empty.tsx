import { View, Text, StyleSheet, Image, TextInput, SafeAreaView, Button } from 'react-native'
import empty from '@/assets/images/empty.png'
export default function Empty(props: any) {
  const {description} = props
  return (
    <View style={styles.Empty}>
      <Image style={styles.image} source={empty} />
      <Text style={styles.text}>{description ? description : '暂无数据'}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  Empty: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    rowGap: 10,
    backgroundColor: '#ffffff',
    borderRadius: 4,
    padding: 10,
  },
  text: {
    fontSize: 16,
    fontWeight: 500,
    color: '#A3A3A3'
  },
  image: {
    width: 80,
    height: 80
  }
})
