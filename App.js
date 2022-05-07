import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, ScrollView  } from 'react-native';
import CardInformation from './CardInformation';
import data from './assets/informationCard.json';

export default function App() {
  return (
    <ScrollView >
      <StatusBar style="auto" />
      {data.map((element,index)=>
        <CardInformation 
          paragraphs={element.about} 
          key={element.id}
          author={element.author}
          email={element.email}
          tags={element.tags}
          comments={element.comments}
          />)
      }
      
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
