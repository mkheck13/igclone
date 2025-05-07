import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import StoriesComponent from './StoriesComponent'
import mike from '../assets/mike.jpg'
import pirate from '../assets/pirate.jpg'

export default function PostComponent() {
  const [post, setPost] = useState([
    {
      profilePicture: mike,
      userName: "Mike",
      postImage: pirate,
      numOfLikes: "9.5K",
      description: "ARRRRRRR!!!!",
      comments: [
        {
          userWhoCommented: "SomeDude_56",
          usersComment: "YO BOI!"
        }
      ]
    },
    {
      profilePicture: pirate,
      userName: "SomeDude_56",
      postImage: mike,
      numOfLikes: "19.5K",
      description: "Dude!!!",
      comments: [
        {
          userWhoCommented: "Mike",
          usersComment: "ARRRR Matey!!!!"
        }
      ]
    }
  ]);


  return (
    <ScrollView>
      <StoriesComponent />

      {
        post.map((post, idx) => {

          return (
            <View key={idx}>
              {/* This view will contain your Username profile image and three dots*/}
              <View style={styles.profileNav}>
                <View style={{ paddingTop: 10 }}>
                  <Image source={post.profilePicture} style={styles.profileImg} />
                </View>
                {/* Username container */}
                <View style={styles.userNameContainer}>
                  <Text style={styles.userNameText}>{post.userName}</Text>
                </View>
                {/* Three dots */}
                <View style={styles.dotsContainer}>
                  <Text style={styles.dotsText}>.</Text>
                  <Text style={styles.dotsText}>.</Text>
                  <Text style={styles.dotsText}>.</Text>
                </View>
              </View>
              {/* Container for our ImagePost */}
              <View>
                <Image source={post.postImage} style={styles.postImg} />
              </View>

              {/* Parent container for our icons and likes */}
              <View>
                
              </View>

            </View>
          )
        })
      }
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  profileNav: {
    flexDirection: "row",
    paddingBottom: 10
  },
  profileImg: {
    height: 40,
    width: 40,
    borderRadius: 50
  },
  userNameText: {
    color: "white",
    fontSize: 15,
    fontWeight: "bold"
  },
  userNameContainer: {
    paddingLeft: 15,
    justifyContent: "center",
    paddingBottom: 10
  },
  dotsContainer: {
    flex: 1,
    alignItems: "flex-end",
    justifyContent: "center",
    paddingRight: 10
  },
  dotsText: {
    color: "white",
    fontSize: 30,
    lineHeight: 10
  },
  postImg: {
    height: 400,
    width: "100%"
  }
})