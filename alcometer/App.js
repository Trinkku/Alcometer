import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, ScrollView, TextInput, Pressable } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import Styles from './Styles';
import { useState, useCallback } from 'react';
import Radiobutton from './components/Radiobutton';
import Calculation from './components/Calculation;'


export default function App() {


const [weight, setWeight] = useState(0)
const [bottles, setBottles] = useState(0)
const [time, setTime] = useState(0)
const [gender, setGender] = useState(0)
const [promilles, setPromilles] = useState(1)

//radiobuttoniin tarvitsemat tilamuuttujat
const genderOptions=[
  {label: 'Woman', value: 'Woman'},
  {label: 'Male', value: 'Male'},
]

//Dropdown 1- Bottles tarvitsemat toiminallisuudet
const [open, setOpen] = useState(false);
const [value, setValue] = useState(null);
const [items, setItems] = useState([
  {label:'1 bottles', value: 1},
  {label:'2 bottles', value: 2},
  {label:'3 bottles', value: 3},
  {label:'4 bottles', value: 4},
  {label:'5 bottles', value: 5},
  {label:'6 bottles', value: 6},

]);
//Dropdown 2-Time tilamuuttujat
const [openAnother, setOpenAnother] = useState(false);
const [anotherValue, setAnotherValue] = useState(null);
const [anotherItems, setAnotherItems] = useState([
  {label: '1 hours', value: 1},
  {label: '2 hours', value: 2},
  {label: '3 hours', value: 3},
  {label:'4 hours', value: 4},
  {label:'5 hours', value: 5},
  {label:'6 hours', value: 6},
]);
//Asettaa drowdownin scrollview moodiin, koska sitä käytetään tässä
DropDownPicker.setListMode("SCROLLVIEW");

//tätä funktioo suoritetaan, kun drowdown- valikko avataan. Suljetaan toinen dropdown- valikko
const onOpen = useCallback(() => {
  setopenAnother(false);
}, []);

const onAnotherOpen = useCallback(() => {
  setOpen(false);
}, []);

const calculate = () => {

let grams = (bottles * 0.33) * 8 * 4.5;
let burning = weight / 10;
let gramsLeft = grams - burning * hours;
let result; 

if (gender === 'Woman'){
  result = gramsLeft/ (weight * 0.6)
}
else{
  result = gramsLeft /(weight* 0.7)
}
setPromilles(result);
}

  return (
    <SafeAreaView style={Styles.container}>
      <Text style={Styles.heading}>Alcometer</Text>
      <ScrollView style={Styles.scrollView}>
        <View style={Styles.form}>
          <Text style={Styles.label}>Weighhsst</Text>
          <TextInput placeholder='Enter your weight' value={weight} onChangeText={text => setWeight(text)} keyboardType='number-pad' ></TextInput>
          <Text style={Styles.label}>Bottles</Text>
        </View> 
        <View style={{zIndex:10}}>
          <DropDownPicker 
          open={open} setOpen={setOpen} onOpen={onOpen} 
          value={value} setValue={setValue} 
          items={items} setItems={setItems}/>
        </View>
        <View style={Styles.form}>
          <Text style={Styles.label}>Time</Text>
        </View>
          <View style={{zIndex:8}}>
          <DropDownPicker 
               open={openAnother}
               onOpen={onAnotherOpen}
               value={anotherValue}
               items={anotherItems}
               setOpen={setOpenAnother}
               setValue={setAnotherValue}
               setItems={setAnotherItems}
             /> 
          </View>
        <View style={Styles.form}>
          <Text style={Styles.label}>Gender</Text>
          <Radiobutton genderOption={genderOptions} onPress={(value) => {setGender}}/>
        </View>
   <View>
<c
<Text style={Styles.result}> {promilles}</Text>
   </View>
  

      <StatusBar style='auto'/>
      </ScrollView>


    </SafeAreaView>
  );
}


