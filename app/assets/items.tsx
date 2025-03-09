import { View, Text, StyleSheet, Button, Image } from 'react-native'
import Status from "@/components/Status";
import CheckStatus from '@/components/CheckStatus'
import avator from "@/assets/images/user.jpeg";
import { useState } from "react";
export default function AssetsItem(props: any) {
  const {
    title,
    categopry,
    department,
    number,
    status,
    assetsStatus,
    belong,
    updator,
    update,
  } = props?.target;


  return (
    <View style={styles.AssetsItem}>
      <View style={styles.currentStatus}>
        <CheckStatus status={status} />
      </View>
      <View style={styles.status}>
        <View style={styles.assetsStatus}>
          <Text style={styles.title}>资产编号：</Text>
          <Text style={styles.value}>{number}</Text>
        </View>
        {/* <View style={styles.assetsStatus}>
          <Text style={styles.title}>盘点状态：</Text>
          <Text style={styles.value}>{status}</Text>
        </View> */}
        <View style={styles.assetsStatus}>
          <Text style={styles.title}>资产状态：</Text>
          <Status status={assetsStatus} />
        </View>
      </View>
      <View style={styles.infos}>
        <Image style={styles.image} source={avator} />
        <View style={styles.info}>
          <View style={styles.infobox}>
            <View style={styles.titlebox}>
              <Text style={styles.title}>资产类别：</Text>
            </View>
            <Text style={styles.value}>{categopry}</Text>
          </View>
          <View style={styles.infobox}>
            <View style={styles.titlebox}>
              <Text style={styles.title}>所属部门：</Text>
            </View>
            <Text style={styles.value}>{department}</Text>
          </View>
          <View style={styles.infobox}>
            <View style={styles.titlebox}>
              <Text style={styles.title}>资产型号：</Text>
            </View>
            <Text style={styles.valuebox}>{title}</Text>
          </View>
          <View style={styles.infobox}>
            <View style={styles.titlebox}>
              <Text style={styles.title}>更新日期：</Text>
            </View>
            <Text style={styles.value}>{update}</Text>
          </View>
          <View style={styles.infobox}>
            <View style={styles.titlebox}>
              <Text style={styles.title}>持有人员：</Text>
            </View>
            <Text style={styles.value}>{belong}</Text>
          </View>
          <View style={styles.infobox}>
            <View style={styles.titlebox}>
              <Text style={styles.title}>使用人员：</Text>
            </View>
            <Text style={styles.value}>{updator}</Text>
          </View>
        </View>
      </View>
      <View style={styles.opts}>
        {/* <View style={styles.opt}>
          <Button title="盘盈" />
        </View>

        <View style={styles.opt}>
          <Button title="盘亏" />
        </View> */}

        {/* <View style={styles.opt}>
          <Button title="变更" />
        </View> */}

        <View style={styles.opt}>
          <Button title="报废" />
        </View>
        <View style={styles.opt}>
          <Button title="正常" />
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  AssetsItem: {
    flex: 1,
    backgroundColor: "#ffffff",
    borderColor: "#e8e8e8",
    borderWidth: 1,
    borderRadius: 6,
    position: "relative",
  },
  currentStatus: {
    position: "absolute",
    right: 10,
    top: 0,
  },
  statusText: {
    color: "#FFFFFF",
    fontSize: 16,
  },
  status: {
    padding: 10,
    display: "flex",
    flexDirection: "column",
    rowGap: 10,
  },
  assetsStatus: {
    display: "flex",
    flexDirection: "row",
  },
  title: {
    fontSize: 16,
  },
  value: {
    fontSize: 14,
    color: "#969696",
  },
  image: {
    width: 100,
    height: 100,
    objectFit: "contain",
  },
  infos: {
    padding: 10,
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    borderBottomWidth: 1,
    borderTopWidth: 1,
    borderColor: "#e8e8e8",
    columnGap: 4,
  },
  info: {
    display: "flex",
    flexDirection: "column",
    rowGap: 6,
  },
  infobox: {
    display: "flex",
    flexDirection: "row",
  },
  titlebox: {
    width: 90,
    display: "flex",
    flexDirection: "row",
  },
  valuebox: {
    flex: 1,
    fontSize: 14,
    color: "#969696",
  },
  opts: {
    padding: 10,
    display: "flex",
    flexDirection: "row",
    columnGap: 10,
  },
  opt: {
    flex: 1,
  },
});