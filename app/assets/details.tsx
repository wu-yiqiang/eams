import { View, Text, StyleSheet, Button, Image } from 'react-native'
import Status from '@/components/Status'
import CheckStatus from '@/components/CheckStatus'
// import { Dialog } from '@/components/Dialog'
import avator from '@/assets/images/user.jpeg'
import { Link, Stack } from 'expo-router'
import { useEffect, useState } from "react";
export default function AssetsDetails() {
  let [loading, setLoading] = useState(true)
    const [visible, setVisible] = useState(false)
    const handleQrCode = () => {
      setVisible(true)
    }
    const handleQrCodeClose = () => {
      setVisible(false)
    }
  useEffect(() => {
    setLoading(false)
  }, [])
  if (loading) return <Text>暂无数据</Text>
  return (
    <View style={styles.Details}>
      <Stack.Screen
        options={{
          title: '维修详情'
        }}
      />
      <View style={styles.currentStatus}>
        <CheckStatus status={1} />
      </View>
      <View style={styles.status}>
        <View style={styles.assetsStatus}>
          <Text style={styles.title}>维修编号：</Text>
          <Text style={styles.value}>number</Text>
        </View>
        {/* <View style={styles.assetsStatus}>
                <Text style={styles.title}>盘点状态：</Text>
                <Text style={styles.value}>{status}</Text>
              </View> */}
        <View style={styles.assetsStatus}>
          <Text style={styles.title}>维修状态：</Text>
          <Status status={1} />
        </View>
      </View>
      <View style={styles.infos}>
        <Image style={styles.image} source={avator} />
        <View style={styles.info}>
          <View style={styles.infobox}>
            <View style={styles.titlebox}>
              <Text style={styles.title}>维修类别：</Text>
            </View>
            <Text style={styles.value}>categopry</Text>
          </View>
          <View style={styles.infobox}>
            <View style={styles.titlebox}>
              <Text style={styles.title}>所属部门：</Text>
            </View>
            <Text style={styles.value}>departmen</Text>
          </View>
          <View style={styles.infobox}>
            <View style={styles.titlebox}>
              <Text style={styles.title}>维修型号：</Text>
            </View>
            <Text style={styles.valuebox}>title</Text>
          </View>
          <View style={styles.infobox}>
            <View style={styles.titlebox}>
              <Text style={styles.title}>更新日期：</Text>
            </View>
            <Text style={styles.value}>update</Text>
          </View>
          <View style={styles.infobox}>
            <View style={styles.titlebox}>
              <Text style={styles.title}>持有人员：</Text>
            </View>
            <Text style={styles.value}>belong</Text>
          </View>
          <View style={styles.infobox}>
            <View style={styles.titlebox}>
              <Text style={styles.title}>使用人员：</Text>
            </View>
            <Text style={styles.value}>updator</Text>
          </View>
        </View>
      </View>
      <View style={styles.opts}>
        <View style={styles.qrcode}>
          <Button title="生成二维码" onPress={handleQrCode} />
        </View>
      </View>
      {/* <Dialog visible={visible} contents="sdsd" close={handleQrCodeClose} /> */}
    </View>
  )
}

const styles = StyleSheet.create({
  Details: {
    flex: 1,
    padding: 10
  },
  currentStatus: {
    position: 'absolute',
    right: 10,
    top: 0
  },
  statusText: {
    color: '#FFFFFF',
    fontSize: 16
  },
  status: {
    padding: 10,
    display: 'flex',
    flexDirection: 'column',
    rowGap: 10
  },
  assetsStatus: {
    display: 'flex',
    flexDirection: 'row'
  },
  title: {
    fontSize: 16
  },
  value: {
    fontSize: 14,
    color: '#969696'
  },
  image: {
    width: 100,
    height: 100,
    objectFit: 'contain'
  },
  infos: {
    padding: 10,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    borderBottomWidth: 1,
    borderTopWidth: 1,
    borderColor: '#e8e8e8',
    columnGap: 4
  },
  info: {
    display: 'flex',
    flexDirection: 'column',
    rowGap: 6
  },
  infobox: {
    display: 'flex',
    flexDirection: 'row'
  },
  titlebox: {
    width: 90,
    display: 'flex',
    flexDirection: 'row'
  },
  valuebox: {
    flex: 1,
    fontSize: 14,
    color: '#969696'
  },
  opts: {
    padding: 10,
    display: 'flex',
    flexDirection: 'row',
    columnGap: 10
  },
  opt: {
    flex: 1
  },
  qrcode: {
    flex: 2
  }
})