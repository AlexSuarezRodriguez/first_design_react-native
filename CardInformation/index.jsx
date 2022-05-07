import { StyleSheet, Text, View, Image, Button, Alert } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 

const CardInformation = ({paragraphs,author,email,tags,comments}) => {
const paragrap = paragraphs.split(' ').splice(0,25).join(' ')
const butons=tags.splice(4)

  return (
    <View style={styles.card}>
      <View style={styles.image}>
        <Image
            style={styles.imageIn}
            source={{ uri: "https://reactjs.org/logo-og.png" }}
          />
      </View>
      <View style={styles.descriptioon}>
        <Text>{paragrap}</Text>
        <View>
          <Text style={styles.titleText}> Author: {author}</Text>
          <Text style={styles.titleText}> Email: {email}</Text>
        </View>
        <View style={styles.buttons} >
          {butons.map((element)=>      
          <Button
            style={styles.buton}
            title={element}
            onPress={() => Alert.alert(`a seleccionado el boton ${element}`)}
          />
          )}
        </View>
        <View style={{flexDirection: "row"}}>
        <MaterialCommunityIcons name="message-text-outline" size={24} color="black" />
          <Text>{comments.length} Comments</Text>
        </View>
      </View>
    </View>
  )
}
//const palabras = logo.split(' ').splice(0,10).join(' ')
export default CardInformation;

const styles = StyleSheet.create({
  card:{
    padding: 5,
    width: '95%',
    height:250,
    backgroundColor:'#ecf0f1',
    marginTop:'2%',
    flexDirection: "row",
    borderRadius:10,
    borderWidth: 3,
  },
  image: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '40%',
    height: '100%',
  },
  imageIn: {
    width: 150,
    height: 150,
    borderRadius: 75,
  },
  descriptioon: {
    width: '60%',
    height: '100%',
    justifyContent:'space-evenly'
  },
  titleText: {
    fontSize: 15,
    fontWeight: 'bold',
  },
  buttons:{
    flexDirection: 'row',
    justifyContent:'space-evenly'
  },
  buton:{
    marginRight: 25,
  }
});