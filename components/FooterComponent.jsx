import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faClapperboard, faHomeAlt, faSearch } from '@fortawesome/free-solid-svg-icons'
import { faPlusSquare } from '@fortawesome/free-regular-svg-icons'
import mike from '../assets/mike.jpg'

export default function FooterComponent() {
  return (
    <View style={styles.FooterContainer}>
      <FontAwesomeIcon icon={faHomeAlt} style={{color: "white"}} size={27} />
      <FontAwesomeIcon icon={faSearch} style={{color: "white"}} size={27} />
      <FontAwesomeIcon icon={faPlusSquare} style={{color: "white"}} size={27} />
      <FontAwesomeIcon icon={faClapperboard} style={{color: "white"}} size={27} />
      <Image source={mike} style={{width: '27', height: '27', borderRadius: 13.5}}/>

    </View>
  )
}

const styles = StyleSheet.create({
  FooterContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingBottom: 30,
    marginTop: 15
  }
})