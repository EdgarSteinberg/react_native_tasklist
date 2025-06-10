import { StyleSheet, View, FlatList } from "react-native";

const RenderList = ({taskList, renderTaskItem}) => {

    return (
        <>
             <View>
                {/*    {
                    taskList.map((task) => (
                      <Text key={task.id}>{task.value}</Text>
                    ))
                  } */}
                <FlatList
                  data={taskList}
                  renderItem={renderTaskItem} //Funcion
                  keyExtractor={item => item.id}
                />
        
              </View>
        </>
    )
}

export default RenderList;


const styles = StyleSheet.create({

})