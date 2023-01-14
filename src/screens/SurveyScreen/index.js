import React, { useEffect, useState } from "react";
import { Animated, Alert, ScrollView, StyleSheet, Text, TouchableOpacity, View, StatusBar } from "react-native";
import surveyData from '../../assets/surveyData'
import LinearGradient from 'react-native-linear-gradient';
import RadioForm from 'react-native-simple-radio-buttons';

function SurveyScreen({ navigation }) {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [currentOptionSelected, setCurrentOptionSelected] = useState(null);
  const [value, setValue] = useState("")

  const handleNext = () => {
    if (currentQuestionIndex == surveyData.length - 1) {
      navigation.navigate('DoneScreen')
    } else {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setCurrentOptionSelected(null);
    }
    Animated.timing(progress, {
      toValue: currentQuestionIndex + 1,
      duration: 100,
      useNativeDriver: false
    }).start();
  }
  const items = surveyData[currentQuestionIndex]?.options.map((option) => ({
    label: option,
    value: option
  }))

  const [progress, setProgress] = useState(new Animated.Value(0));
  const progressAnim = progress.interpolate({
    inputRange: [0, surveyData.length],
    outputRange: ['0%', '100%']
  })
  useEffect(() => {
    setTimeout(() => {
      Alert.alert('Time Out')
      navigation.navigate('DoneScreen')
    }, 60000);
  }, []);
  return (
    <>
      <LinearGradient colors={['#dfcfe9', '#eabfcc', '#fcaaa8']} style={{ flex: 1 }}>
        <StatusBar barStyle="light-content" backgroundColor='#dfcfe9' />
        <View style={{
          width: '100%',
          height: 5,
          borderRadius: 20,
          backgroundColor: '#00000020',
          marginBottom: '3%'
        }}>
          <Animated.View style={[{
            height: 5,
            borderRadius: 20,
            marginBottom: '3%',
            backgroundColor: '#8d7fbb'
          }, {
            width: progressAnim
          }]}>
          </Animated.View>
        </View>
        <View style={styles.wrapperCard}>
          <Text style={styles.cardHeader}>Q{currentQuestionIndex + 1}</Text>
          <Text style={styles.wrapperQuestion}>
            {surveyData[currentQuestionIndex]?.question}
          </Text>
          <RadioForm
            items={items}
            value={value}
            setValue={setValue}
            withLabels={true}
            buttonOuterSize={35}
            buttonOuterColor={'#6959a5'}
            buttonInnerSize={29}
            buttonInnerColor={'#6959a5'}
            radioFormStyle={{ marginRight: '5%', marginBottom: '3%', }}
            radioButtonItemStyle={{
              marginBottom: 15,
            }}
            radioButtonLabelStyle={{ color: '#6959a5', fontFamily: 'OpenSans-SemiBold', fontSize: 20, marginLeft: '5%', }}
          />
        </View>
        {surveyData[currentQuestionIndex]?.options.includes(value) ? (<TouchableOpacity
          onPress={handleNext}
          style={[styles.buttonNext, styles.shadowProp]}>
          <Text style={{ fontSize: 20, color: 'white', textAlign: 'center' }}>Next</Text>
        </TouchableOpacity>) : null}
      </LinearGradient>

    </>
  )
}

const styles = StyleSheet.create({
  wrapperCard: {
    height: '70%',
    marginVertical: '7%',
    marginHorizontal: '10%',
    padding: '8%',
    backgroundColor: '#ffffff',
    borderRadius: 10,
  },
  cardHeader: {
    marginBottom: '5%',
    color: '#e0deea',
    fontSize: 40,
    fontFamily: 'OpenSans-SemiBold'
  },

  wrapperQuestion: {
    fontSize: 26,
    fontFamily: 'OpenSans-SemiBold',
    color: '#7060a3',
    marginTop: '5%',
    marginBottom: '10%'
  },
  buttonNext: {
    backgroundColor: '#7060a3',
    margin: '10%',
    marginBottom: '10%',
    padding: '5%',
    borderRadius: 30,
  },
  shadowProp: {
    shadowColor: '#171717',
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },

})
export default SurveyScreen;
