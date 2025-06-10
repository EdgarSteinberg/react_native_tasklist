import { StyleSheet, TextInput, View, Button } from "react-native";

const TaskInput = ({ userInput, setUserInput, handleAddTask }) => {
    return (
        <>

            <View style={styles.inputContainer}>
                <TextInput
                    onChangeText={(text) => setUserInput(text)}
                    style={styles.textInput}
                    value={userInput}
                />
                <Button
                    onPress={handleAddTask}
                    title='+' />
            </View>

        </>
    )
}

export default TaskInput;


const styles = StyleSheet.create({

    inputContainer: {
        flexDirection: 'row',
        gap: 8,
        alignItems: 'center',
      
    },
    textInput: {
        borderWidth: 2,       // 👈 ancho del borde
        borderColor: 'black', // 👈 color del borde
        borderRadius: 12,     // 👈 radio de las esquinas
        padding: 12,           // 👈 (opcional) para darle algo de espacio interior
        width: '70%',
     
    }
});