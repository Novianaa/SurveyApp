import React from 'react'
import { Image, Text, View } from 'react-native'
import Done from '../../assets/imgs/Completed-pana.png'
import LinearGradient from 'react-native-linear-gradient';

function DoneScreen() {
  return (
    <LinearGradient colors={['#dfcfe9', '#eabfcc', '#fcaaa8']} style={{ flex: 1 }}>
      <View style={{ flex: 1, }}>
        <Image source={Done} style={{ width: '100%', height: '50%', marginTop: '40%' }} />
      </View>
    </LinearGradient>
  )
}

export default DoneScreen