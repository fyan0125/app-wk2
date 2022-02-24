import React from "react";
import { StyleSheet, Text, View, Image, ScrollView } from "react-native";
import albumData from "../json/albums";

const Albumlist = () => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <Image 
          style={styles.artist} 
          source={{uri: "https://i.kfs.io/artist/global/11427816,0v2/fit/300x300.jpg"}}
        />
      </View>
      <Text style={styles.topic}>熱門發行</Text>
      <View style={styles.container}>
        <View style={styles.content}>
          <Image 
            style={styles.image} 
            source={{uri:albumData[0].image}}
          />
          <Text style={styles.name}>{albumData[0].name}</Text>
          <Text style={styles.intro}>{albumData[0].album}</Text>
          <Text style={styles.intro}>{albumData[0].year}</Text>
        </View>
        <View style={styles.content}>
          <Image 
            style={styles.image} 
            source={{uri:albumData[1].image}}
          />
          <Text style={styles.name}>{albumData[1].name}</Text>
          <Text style={styles.intro}>{albumData[1].album}</Text>
          <Text style={styles.intro}>{albumData[1].year}</Text>
        </View>
        <View style={styles.content}>
          <Image 
            style={styles.image} 
            source={{uri:albumData[2].image}}
          />
          <Text style={styles.name}>{albumData[2].name}</Text>
          <Text style={styles.intro}>{albumData[2].album}</Text>
          <Text style={styles.intro}>{albumData[2].year}</Text>
        </View>
        <View style={styles.content}>
          <Image 
            style={styles.image} 
            source={{uri:albumData[3].image}}
          />
          <Text style={styles.name}>{albumData[3].name}</Text>
          <Text style={styles.intro}>{albumData[3].album}</Text>
          <Text style={styles.intro}>{albumData[3].year}</Text>
        </View>
        <View style={styles.content}>
          <Image 
            style={styles.image} 
            source={{uri:albumData[4].image}}
          />
          <Text style={styles.name}>{albumData[4].name}</Text>
          <Text style={styles.intro}>{albumData[4].album}</Text>
          <Text style={styles.intro}>{albumData[4].year}</Text>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container:{
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    // Android Only
    elevation: 4,
  },
  artist:{
    height: 250,
    width: 250,
    borderRadius:5,
    borderWidth:2,
    borderColor: "#fff",
  },
  topic:{
    margin:30,
    fontSize:20,
    fontWeight:'700',
    color: "#fff",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    // Android Only
    elevation: 4,
  },
  content:{
    justifyContent: "center",
    alignItems: "center",
    marginBottom:30,
  },
  image:{
    height:200,
    width:200,
    borderRadius:2,
  },
  name:{
    color:"#fff",
    margin:10,
    fontSize:16,
  },
  intro:{
    color:"#B8B8B8",
  }
});

export default Albumlist;
