import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import StoriesComponent from './StoriesComponent'
import mike from '../assets/mike.jpg'
import pirate from '../assets/pirate.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faHeart, faPaperPlane, faComment, faBookmark } from '@fortawesome/free-regular-svg-icons'

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

      {Array.isArray(post) && post.map((post, idx) => (
        <View key={idx}>
          {/* User profile header */}
          <View style={styles.profileNav}>
            <View style={{ paddingTop: 10 }}>
              <Image source={post.profilePicture} style={styles.profileImg} />
            </View>

            <View style={styles.userNameContainer}>
              <Text style={styles.userNameText}>{post.userName}</Text>
            </View>

            <View style={styles.dotsContainer}>
              <Text style={styles.dotsText}>.</Text>
              <Text style={styles.dotsText}>.</Text>
              <Text style={styles.dotsText}>.</Text>
            </View>
          </View>

          {/* Post image */}
          <View>
            <Image source={post.postImage} style={styles.postImg} />
          </View>

          {/* Post actions: like, comment, send, bookmark */}
          <View style={{ flexDirection: "row" }}>
            <View style={{ flexDirection: "row", flex: 1, alignItems: "center", paddingLeft: 14, paddingTop: 10 }}>
              <FontAwesomeIcon icon={faHeart} style={{ color: "white", marginRight: 10 }} size={25} />
              <Text style={{ color: "white", fontWeight: "bold", marginRight: 10 }}>{post.numOfLikes}</Text>
              <FontAwesomeIcon icon={faComment} style={{ color: "white", transform: [{ rotateY: "180deg" }], marginRight: 20 }} size={25} />
              <FontAwesomeIcon icon={faPaperPlane} style={{ color: "white" }} size={25} />
            </View>

            <View style={{ paddingTop: 10, justifyContent: "center", marginRight: 10 }}>
              <FontAwesomeIcon icon={faBookmark} style={{ color: "white" }} size={25} />
            </View>
          </View>

          {/* Post description */}
          <View style={{ flex: 1, flexDirection: "row", paddingTop: 5 }}>
            <Text style={{ color: "white", fontWeight: "bold", paddingLeft: 14 }}>{post.userName}</Text>
            <Text style={{ color: "white", paddingLeft: 5 }}>{post.description}</Text>
          </View>

          {/* Comments */}
          {post.comments && post.comments.map((comment, idx) => (
            <View key={idx} style={{ flex: 1, flexDirection: "row" }}>
              <Text style={{ color: "white", fontWeight: "bold", paddingLeft: 14, paddingRight: 5, paddingTop: 5 }}>
                {comment.userWhoCommented}
              </Text>
              <Text style={{ color: "white", paddingTop: 5 }}>{comment.usersComment}</Text>
            </View>
          ))}

          {/* Add comment section */}
          <View style={{ flex: 1, flexDirection: "row" }}>
            <Image source={post.profilePicture} style={{ height: 30, width: 30, borderRadius: 50, marginLeft: 14, marginTop: 10 }}/>
            <Text style={{color: "gainsboro", paddingLeft: 13, paddingTop: 8, alignSelf: "center"}}>Add a Comment...</Text>
          </View>

          {/* Date of post */}
          <View>
            <Text style={{ color: "gainsboro", paddingLeft: 14, paddingTop: 6 }}>12 hours ago</Text>
          </View>
        </View>
      ))}
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