import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  FlatList,
  Pressable,
  Image,
  Dimensions,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import React, { useEffect, useState } from "react";
import HomeHeader from "../components/HomeHeader";
import { Icon } from "react-native-elements";
import {
  btn,
  btn_light,
  paddings,
  Colors,
  margins,
  flexDirection,
} from "../global/styles";
import { CategoriesData, restaurants } from "../global/Data";
import { FoodCard } from "../components/FoodCard";
import CountDown from "react-native-countdown-component";
import SearchBar from "../components/SearchBar";
import {restos} from "../global/Data"
const SCREEN_WIDTH = Dimensions.get("window").width;

export default function HomeScreen(props) {
  const [delivery, setDelivery] = useState(false);
  const [ckeckedIndex, setCheckedIndex] = useState(1);
  const [restaurantsData, setRestaurantData] = useState([]);
  const [city,setCity]= useState("San Francisco")

  const getRestaurant = () => {  
      const yelpUrl = `https://api.yelp.com/v3/businesses/search?term=restaurants&location=${city}`;
      const YELP_API_KEY=`PWmH2vgaI_1-pOCu4XTPAwwKwOOJaD95CGsiogTofZU6zpvGzxwpkGXXoiYwgeiHU3MynpCC852-T26JOWnrQJ0R6bQqzKO5UTqnFYBpByfb2atFqZX-ac1aKg2CY3Yx`
      const options = {
        headers: {
          Authorization: `Bearer ${YELP_API_KEY}`
        }}
  

    return fetch(yelpUrl,options)
      .then((res) => res.json())
      .then((res) => {setRestaurantData(res.businesses);console.log("resssssssssssss:",res)})
    .catch((error) => alert("error :"+error.message))
  };

  useEffect(() => {
    console.log("request*******************************************")
    getRestaurant();

  },[]);

  return (
    <View>
      <HomeHeader />
      <View>
          {/* ************************Delivery Buttons************************** */}
          <View
            style={[
              styles.container,
              paddings.Vrt.moy,
              paddings.Vrt.s,
              styles.backgroundButtons,
            ]}
          >
            <TouchableOpacity
              onPress={() => {
                setDelivery(false);
                props.navigation.navigate("MapScreen");
              }}
            >
              <View
                style={
                  delivery ? [margins.Hrz.s, btn_light] : [margins.Hrz.s, btn]
                }
              >
                <Text
                  style={delivery ? [styles.btnTextLight] : [styles.btnText]}
                >
                  Pick Up
                </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                setDelivery(true);
              }}
            >
              <View
                style={
                  delivery
                    ? [margins.Hrz.s, btn, styles.btnText]
                    : [btn_light, styles.btnTextLight]
                }
              >
                <Text
                  style={delivery ? [styles.btnText] : [styles.btnTextLight]}
                >
                  Delivery
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
        {/***********************************location******************************/}
       <View>
       <View style={[styles.container, { backgroundColor: "#D3D3D3" }]}>
          <View style={[styles.container, margins.Hrz.moy]}>
            <Icon
              type="material-community"
              name="map-marker"
              size={33}
              color={Colors.gray}
            />
            <Text onPress={()=>{props.navigation.navigate('RestaurantDetails')}}>Bennane , Monastir, 5025</Text>
          </View>
          <View style={[styles.container, margins.Hrz.moy]}>
            <Icon
              type="material-community"
              name="clock-time-four"
              size={28}
              color={Colors.gray}
            />
            <Text>Now</Text>
          </View>
        </View>
       </View>
        <SearchBar   />
        {/*****************************menu categories ***************** */}
    
      <ScrollView  showsVerticalScrollIndicator={true}>
       
        <View style={margins.Vrt.s}>
          <Text style={styles.homeSubHeader}>Categories</Text>
        </View>

        <View>
          <FlatList
            horizontal={true}
            showsVerticalScrollIndicator={false}
            keyExtractor={(item, index) => {
              return index.id;
            }}
            data={CategoriesData}
            renderItem={({ item }) => (
              <Pressable
                onPress={() => {
                  setCheckedIndex(item.id);
                }}
              >
                <View style={styles.container_vertical}>
                  <View
                    style={
                      ckeckedIndex == item.id
                        ? [styles.selectedCard]
                        : [styles.unselectedCard]
                    }
                  >
                    <View style={styles.backgroundImage}>
                      <Image source={item.image} style={styles.image} />
                    </View>
                  </View>
                  <Text style={styles.textMenu}>{item.name}</Text>
                </View>
              </Pressable>
            )}
          />
        </View>

        {/* ****************restaurants list *********************** */}

        <View style={margins.Vrt.s}>
          <Text style={styles.homeSubHeader}>Free Delivery</Text>
        </View>

        <View>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Text style={{ color: Colors.gray, fontWeight: "bold", margin: 5 }}>
              Options changing
            </Text>
          </View>
          <FlatList
            horizontal={true}
            showsVerticalScrollIndicator={false}
            data={restaurantsData}
            style={margins.Vrt.moy}
            keyExtractor={(item, index) => {
              return item.id.toString();
            }}
            renderItem={({ item }) => (
              <View key={item.id}>
                <FoodCard
                
                  image={item.image_url}
                  restaurantName={item.name}
                  numberOfReview={item.review_count}
                  businessAdress={item.location.state+" "+item.location.city+
                  " "+item.location.address1+item.location.address2+item.location.address3}
                  farAway={item.distance}
                  averageReview={item.rating}
                  screenWidth={SCREEN_WIDTH}
                />
              </View>
            )}
          />
        </View>

        {/* ****************promotion list *********************** */}



        {/* ****************Restaurants in your Area list *********************** */}
        <View style={margins.Vrt.s}>
          <Text style={styles.homeSubHeader}>Restaurants in your Area</Text>
        </View>
        <View>
          {restaurantsData.map((item) => (
           <TouchableOpacity
            Key={item.id}
            onPress={()=>props.navigation.navigate("RestaurantDetails",item) } >
              <View>
              <FoodCard
                  navigateVersDetails={()=>{navigation.navigate("RestaurantDetails")}}
                  image={item.image_url}
                  restaurantName={item.name}
                  numberOfReview={item.review_count}
                  businessAdress={item.location.state+" "+item.location.city+
                  " "+item.location.address1+item.location.address2+item.location.address3}
                  farAway={item.distance}
                  averageReview={item.rating}
                  screenWidth={SCREEN_WIDTH}
              />
            </View>
           </TouchableOpacity>
          ))}
        </View> 
       


      </ScrollView>
{/* *****************************************icons map********************************* */}
      <View style={[styles.container_vertical, styles.mapIconStyle]}>
        <TouchableOpacity
          onPress={() => navigation.navigate("MapScreen")
          }
        >
          <Icon
            type="material-community"
            name="map-marker"
            size={33}
            color={Colors.gray}
          />
          <Text style={{ color: Colors.gray }}>map</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  container_vertical: {
    justifyContent: "center",
    alignItems: "center",
  },
  backgroundButtons: {
    backgroundColor: Colors.white,
  },
  mapIconStyle: {
    backgroundColor: Colors.thirdColor,
    alignItems: "center",
    width: 70,
    height: 70,
    borderRadius: 50,
    position: "absolute",
    bottom: 110,
    right: 10,
    elevation: 10,
  },
  btnText: {
    color: Colors.thirdColor,
    fontSize: 15,
    fontWeight: "bold",
  },
  btnTextLight: {
    color: Colors.secondColor,
    fontSize: 15,
    fontWeight: "bold",
  },
  homeSubHeader: {
    fontWeight: "bold",
    color: Colors.mainColor,
    fontSize: 17,
    backgroundColor: "#daedf4",
    padding: 10,
    letterSpacing: 2,
  },
  selectedCard: {
    backgroundColor: Colors.secondColor,
    borderColor: Colors.lightGray,
    borderWidth: 5,
    borderWidth: 2,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
    width: 100,
    height: 100,
    margin: 10,
  },
  unselectedCard: {
    backgroundColor: Colors.mainColor,
    borderColor: Colors.mainColor,
    borderWidth: 5,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
    width: 100,
    height: 100,
    margin: 10,
  },
  backgroundImage: {
    backgroundColor: Colors.thirdColor,
    height: 90,
    width: 90,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    height: 85,
    width: 85,
    borderRadius: 50,
  },
  textMenu: {
    fontWeight: "bold",
  },
});
