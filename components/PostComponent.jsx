import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import StoriesComponent from './StoriesComponent'

export default function PostComponent() {
  return (
    <View>
      <StoriesComponent />
      <Text style={{color: "white"}}>PostComponent</Text>
    </View>
  )
}

const styles = StyleSheet.create({})