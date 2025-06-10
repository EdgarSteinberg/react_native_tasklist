import { StatusBar } from 'expo-status-bar';
import { Button, FlatList, StyleSheet, Text, TextInput, View, Modal } from 'react-native';
import { useState } from 'react';
import TaskInput from './src/components/TaskInput';
import RenderList from './src/components/RenderList';
import ModalCard from './src/components/ModalCard';

export default function App() {
  const [userInput, setUserInput] = useState('');
  const [taskList, setTaskList] = useState([]);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [taskSelected, setTaksSelected] = useState({});

  //console.log('valor de taskselected', taskSelected);

  //Funcion Agregar tarea
  const handleAddTask = () => {
    if (userInput !== '') {
      setTaskList((prevState) => [...prevState, { id: Math.random(), value: userInput }])
      setUserInput('')
    }
  }

  const handleDeleteTask = (item) => {
    setIsModalVisible(!isModalVisible)
    setTaksSelected(item)
  }

  //Funcion elimiar tarea
  const deleteTask = (id) => {
    setTaskList(taskList.filter((task) => task.id !== id))
    setIsModalVisible(false)
  }

  //Funcion mostrar tarea
  const renderTaskItem = ({ item }) => (
    <View style={styles.taskContainer}>
      <Text>{item.value}</Text>
      <Button title='X' onPress={() => handleDeleteTask(item)} />
    </View>
  )

  return (
    <>
      <View style={styles.container}>
        <StatusBar style="auto" />
        <Text style={styles.text}>App de Tareas!!</Text>

        {/* componente TaskInput */}
        <TaskInput
          userInput={userInput}
          setUserInput={setUserInput}
          handleAddTask={handleAddTask}
        />

        {/* componente RenderList */}
        <RenderList
          taskList={taskList}
          renderTaskItem={renderTaskItem}
        />

        {/* componente ModalCard */}
        <ModalCard
        isModalVisible={isModalVisible}
        taskSelected={taskSelected}
        setIsModalVisible={setIsModalVisible}
        deleteTask={deleteTask}
        />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: 50
  },
  text: {
    color: 'red',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20
  },
  taskContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    gap: 8,
    marginVertical: 8
  }
});
