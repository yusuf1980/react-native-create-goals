import { useState } from "react";
import { StyleSheet, View, TextInput, Button } from "react-native";

function GoalInput(props) {
  const [enterGoalText, setEnterGoalText] = useState("");

  function goalInputHandler(enteredText) {
    setEnterGoalText(enteredText);
  }

  function addGoalHandler() {
    props.onAddGoal(enterGoalText)
    setEnterGoalText('')
  }

  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.textInput}
        placeholder="Your course goal!"
        onChangeText={goalInputHandler}
        value={enterGoalText}
      />
      <Button title="Add Goal" onPress={addGoalHandler} />
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: "#cccccc",
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#cccccc",
    width: "70%",
    marginRight: 8,
    padding: 8,
  }
});

export default GoalInput;
