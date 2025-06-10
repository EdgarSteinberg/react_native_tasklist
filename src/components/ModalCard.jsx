import { StyleSheet, Modal, View, Button, Text } from "react-native";

const ModalCard = ({ isModalVisible , taskSelected, setIsModalVisible, deleteTask}) => {

    return (
        <>
            <View>
                <Modal
                    visible={isModalVisible}
                    animationType='slide'
                >
                    <Text>Estas seguro de eliminar {taskSelected.value}?</Text>
                    <View style={styles.buttonContainer}>
                        <Button title='Cancelar' color='#ccc' onPress={() => setIsModalVisible(!isModalVisible)} />
                        <Button title='si, eliminar' color='red' onPress={() => deleteTask(taskSelected.id)} />
                    </View>

                </Modal>
            </View>
        </>
    )
}

export default ModalCard;

const styles = StyleSheet.create({
    buttonContainer: {
        flexDirection: 'row',
    }
})