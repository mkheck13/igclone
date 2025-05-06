import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { LinearGradient } from 'expo-linear-gradient'
import mike from '../assets/mike.jpg'

export default function StoriesComponent() {
  return (
    // we are creating a carousel by adding horizontal to your scroll view component
    <ScrollView horizontal>

      {/* Container to hold our stories */}
      <View style={styles.container}>
        {/* Gradian border around our image */}
        <LinearGradient style={styles.linearGradient} colors={["#feda75", "#Fede1e", "#d62976", "#962fbf", "#4f5bd5"]}>

          {/* This view will be our Image Wrapper */}
          <View style={styles.imageWrapper}>
            {/* Profile Image */}
            <Image source={mike} style={styles.image} />
          </View>
        </LinearGradient>
        <Text style={styles.labelText}>Mike</Text>
      </View>

      <View style={styles.container}>
        {/* Gradian border around our image */}
        <LinearGradient style={styles.linearGradient} colors={["#feda75", "#Fede1e", "#d62976", "#962fbf", "#4f5bd5"]}>

          {/* This view will be our Image Wrapper */}
          <View style={styles.imageWrapper}>
            {/* Profile Image */}
            <Image source={mike} style={styles.image} />
          </View>
        </LinearGradient>
        <Text style={styles.labelText}>Mike</Text>
      </View>

      <View style={styles.container}>
        {/* Gradian border around our image */}
        <LinearGradient style={styles.linearGradient} colors={["#feda75", "#Fede1e", "#d62976", "#962fbf", "#4f5bd5"]}>

          {/* This view will be our Image Wrapper */}
          <View style={styles.imageWrapper}>
            {/* Profile Image */}
            <Image source={mike} style={styles.image} />
          </View>
        </LinearGradient>
        <Text style={styles.labelText}>Mike</Text>
      </View>

      <View style={styles.container}>
        {/* Gradian border around our image */}
        <LinearGradient style={styles.linearGradient} colors={["#feda75", "#Fede1e", "#d62976", "#962fbf", "#4f5bd5"]}>

          {/* This view will be our Image Wrapper */}
          <View style={styles.imageWrapper}>
            {/* Profile Image */}
            <Image source={mike} style={styles.image} />
          </View>
        </LinearGradient>
        <Text style={styles.labelText}>Mike</Text>
      </View>

      <View style={styles.container}>
        {/* Gradian border around our image */}
        <LinearGradient style={styles.linearGradient} colors={["#feda75", "#Fede1e", "#d62976", "#962fbf", "#4f5bd5"]}>

          {/* This view will be our Image Wrapper */}
          <View style={styles.imageWrapper}>
            {/* Profile Image */}
            <Image source={mike} style={styles.image} />
          </View>
        </LinearGradient>
        <Text style={styles.labelText}>Mike</Text>
      </View>

      <View style={styles.container}>
        {/* Gradian border around our image */}
        <LinearGradient style={styles.linearGradient} colors={["#feda75", "#Fede1e", "#d62976", "#962fbf", "#4f5bd5"]}>

          {/* This view will be our Image Wrapper */}
          <View style={styles.imageWrapper}>
            {/* Profile Image */}
            <Image source={mike} style={styles.image} />
          </View>
        </LinearGradient>
        <Text style={styles.labelText}>Mike</Text>
      </View>

      <View style={styles.container}>
        {/* Gradian border around our image */}
        <LinearGradient style={styles.linearGradient} colors={["#feda75", "#Fede1e", "#d62976", "#962fbf", "#4f5bd5"]}>

          {/* This view will be our Image Wrapper */}
          <View style={styles.imageWrapper}>
            {/* Profile Image */}
            <Image source={mike} style={styles.image} />
          </View>
        </LinearGradient>
        <Text style={styles.labelText}>Mike</Text>
      </View>

    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    margin: 10
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 50
  },
  imageWrapper: {
    width: 87,
    height: 87,
    borderRadius: 50,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center'
  },
  linearGradient: {
    width: 94,
    height: 94,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center'
  },
  labelText: {
    color: 'white',
    fontSize: 15,
    marginTop: 5
  }
})