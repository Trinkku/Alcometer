import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, ScrollView, TextInput, Pressable, Button, Alert } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import Styles from './Styles';
import { useState, useCallback } from 'react';
import Radiobutton from './components/Radiobutton';
import Calculation from './components/Calculation';



export default function App() {


const [weight, setWeight] = useState(0);
const [bottles, setBottles] = useState(0);
const [total, setTotal] = useState(0);
const [hours, setHours] = useState(0);
const [gender, setGender] = useState(0);
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
const [openAnother, setOpenAnother] = useState(0);
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
  setOpenAnother(false);
}, []);

const onAnotherOpen = useCallback(() => {
  setOpen(false);
}, []);

const calculatePromilles = () => {

  if(weight >0){
    if (bottles === 0){
      Alert.alert(
        "Amount of bottles is missing",
        "Please select amount of drank bottles"
      )
      return
    } else if (hours === 0){
      Alert.alert(
        "Time is missing",
        "Please select time"
      )
      return
    }
  }
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
if(result < 0){
  setTotal(result.toFixed(2));
}else
setTotal(0.00);
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
               value= {hours} setValue={setHours}
               items={anotherItems}
               setOpen={setOpenAnother}
               setItems={setAnotherItems}
             /> 
          </View>
        <View style={Styles.form}>
          <Text style={Styles.label}>Gender</Text>
          <Radiobutton genderOption={genderOptions} onPress={(value) => {setGender}}/>
        </View>
        <View style={Styles.resultContainer}>
          <Text style={[total <= 0.5 ? Styles.resultTextGreen : total >= 0.5 && total <= 1.2 ? Styles.resultTextYellow : Styles.resultTextRed]}>{total}</Text>
         {/*  <Button onPress={()=> calculatePromilles()} title={'Calculate'}></Button> */}
         <Pressable onPress={calculatePromilles} title= {'calculate'}>
        
        
        </Pressable>
        </View>
      <StatusBar style='auto'/>
      </ScrollView>


    </SafeAreaView>
  );
}


