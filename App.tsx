import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

import * as React from "react";
import Constants from "expo-constants";
import * as Speech from "expo-speech";
import SpeechComponent from "./SpeechComponent";
export default function App() {
  return <SpeechComponent playOrPause={""}></SpeechComponent>;
}
