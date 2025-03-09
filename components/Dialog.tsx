import AntDesign from "@expo/vector-icons/AntDesign";
import QRCode from "react-native-qrcode-svg";
import React, { useState } from "react";
import {
  Alert,
  Modal,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
  Button,
} from "react-native";

export const Dialog = (props: any) => {
  const { visible, close, contents } = props;
  return (
    <View style={styles.Dialog}>
      <Modal animationType="slide" transparent={true} visible={visible}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.title}>{contents?.number}</Text>
            <QRCode value={JSON.stringify(contents)} size={220} />
          </View>
          <Text
            onPress={() => {
              close();
            }}
          >
            <AntDesign name="closecircleo" size={40} color="#FFFFFF" />
          </Text>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  Dialog: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 22,
    color: "0d0d0d",
    textAlign: "left",
  },
  centeredView: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    rowGap: 20,
    backgroundColor: "#0000007f",
  },
  modalView: {
    backgroundColor: "white",
    borderRadius: 6,
    padding: 20,
    display: "flex",
    flexDirection: "column",
    rowGap: 10,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  qrcode: {},
  close: {},
});
