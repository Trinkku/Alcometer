import { StatusBar } from 'expo-status-bar';
import { Text, View, SafeAreaView, ScrollView, TextInput, Pressable, Button, Alert } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import Styles from './Styles';
import { useState, useCallback } from 'react';
import Radiobutton from './components/Radiobutton';



export default function App() {


const [weight, setWeight] = useState(0);
const [bottles, setBottles] = useState(0);
const [promilles, setPromilles] = useState(0);
const [hours, setHours] = useState(0);
const [gender, setGender] = useState('Male');

//radiobuttoniin tarvitsemat tilamuuttujat
const genderOptions=[
  {label: 'Male', value: 'Male'},
  {label: 'Female', value: 'Female'},
]

//Dropdown 1- Bottles tarvitsemat toiminallisuudet
const [open, setOpen] = useState(false);
const [items, setItems] = useState([
  {label:'1 bottles', value: 1},
  {label:'2 bottles', value: 2},
  {label:'3 bottles', value: 3},
  {label:'4 bottles', value: 4},
  {label:'5 bottles', value: 5},
  {label:'6 bottles', value: 6}
]
);
//Dropdown 2-Time tilamuuttujat
const [openAnother, setOpenAnother] = useState(false);
const [anotherItems, setAnotherItems] = useState([
  {label:'0 hours', value: 0},
  {label:'1 hours', value: 1},
  {label:'2 hours', value: 2},
  {label:'3 hours', value: 3},
  {label:'4 hours', value: 4},
  {label:'5 hours', value: 5},
  {label:'6 hours', value: 6},
]);
//Asettaa drowdownin scrollview moodiin, koska sitä käytetään tässä
DropDownPicker.setListMode("SCROLLVIEW");

//tätä funktioo suoritetaan, kun drowdown- valikko avataan. Suljetaan toinen dropdown- valikko
const onOpen = useCallback(() => {
  setOpenAnother(false);
}, []);

const onAnotherOpen = useCallback(() => {
  setOpen(false);
}, []);

const calculate = () => {

  if (weight > 0){
    if (bottles === 0){
      Alert.alert(
        "Bottles amount missing!",
        "Select amount of bottles"
      )
      return
    } else if (hours === 0){
      Alert.alert(
        "Time is missing!",
        "Please select time."
      )
      return
    }
    let grams = (bottles * 0.33) * 8 * 4.5;
    let burning = weight / 10;
    let gramsLeft = grams - burning * hours;
    let result;
    if(gender === 'Male'){
      result = gramsLeft / (weight * 0.7)

    } else {
      result = gramsLeft / (weight * 0.6)
    }
    if(result < 0){
      setPromilles(0)
    } else {
      setPromilles(result);
    }
  }
  else {
    Alert.alert(
      "Weight missing",
      "Type in your weight in kg and calculate again"
    )
    return
  } 
}

  return (
    <SafeAreaView style={Styles.container}>
      <Text style={Styles.heading}>Alcometer</Text>
      <ScrollView style={Styles.scrollView}>
      <StatusBar style='auto'/>

      <View style={Styles.form}>
          <Text style={Styles.label}>Weight</Text>
          <TextInput style={Styles.Input} placeholder='Enter your weight' value={weight} onChangeText={text => setWeight(text)} keyboardType='number-pad' ></TextInput>
          <Text style={Styles.label}>Bottles</Text>
        <View style={{zIndex:10}}>
          <DropDownPicker 
          open={open} 
          onOpen={onOpen} 
          value={bottles} 
          items={items}
          setOpen={setOpen} 
          setValue={setBottles} 
          setItems={setItems}/>
        </View>
        <Text style={Styles.label}>Time</Text>
        <View style={{zIndex:9}}>
          <DropDownPicker 
            open={openAnother}
            onOpen={onAnotherOpen}
            value= {hours} 
            items={anotherItems}
            setOpen={setOpenAnother}
            setValue={setHours}
            setItems={setAnotherItems}
             /> 
        </View>
        
          <Text style={Styles.label}>Gender</Text>
          <Radiobutton genderOption={genderOptions} onPress={(value) => {setGender(value)}}/>

      </View>

        <View style={Styles.resultContainer}>
          <Text style={[promilles <= 0.5 ? Styles.resultTextGreen : promilles >= 0.5 && promilles <= 1.2 ? Styles.resultTextRed : Styles.resultTextYellow]}>{promilles.toFixed(2)}</Text>
        </View>

        <Pressable style={Styles.calculateButton} onPress={calculate}>
          <Text style={Styles.buttonText}>Calculate</Text>
        </Pressable> 
       

  
      </ScrollView>


    </SafeAreaView>
  );
}