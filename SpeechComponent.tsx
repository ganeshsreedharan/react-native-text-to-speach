import React, { memo, useState, Component } from "react";
import { Text, View, StyleSheet, Button, TextInput } from "react-native";
import Constants from "expo-constants";
import * as Speech from "expo-speech";
import PropTypes from "prop-types";
interface IProps {
  playOrPause: string;
}

interface IState {
  playOrPause: string;
}
export default class SpeechComponent extends Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      playOrPause: "",
    };
  }
  speak = () => {
    var thingToSay = this.state.playOrPause
      ? this.state.playOrPause
      : "Please type something!";

    Speech.speak(thingToSay);
  };
  render() {
    return (
      <View style={styles.container}>
        <TextInput
          style={{ height: 100, borderColor: "blue", fontSize: 30 }}
          placeholder="Type here to translate!"
          editable
          maxLength={40}
          onChangeText={(text) =>
            this.setState({ playOrPause: text }, () => {
              console.log("state changed");
            })
          }
        ></TextInput>
        <Button title="Type and hear!" onPress={this.speak} />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingTop: Constants.statusBarHeight,
    backgroundColor: "#ecf0f1",
    padding: 8,
  },
});
