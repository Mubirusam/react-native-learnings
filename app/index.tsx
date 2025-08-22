import {Text, View, StyleSheet, ImageBackground, FlatList, ScrollView, Image, TextInput} from "react-native";
import {useState} from "react";
import Ionicons from '@expo/vector-icons/Ionicons';


const menuItems = [
    {name: 'sausage hawayan', id: 'pizza1'},
    {name: 'meat festival', id: 'pizza2'},
    {name: 'mexican beef', id: 'pizza3'},
    {name: 'Gold crast', id: 'pizza4'},
    {name: 'chicken royale', id: 'pizza5'},
    {name: 'steak pizza', id: 'pizza6'},


]


export default function Index() {
    const [data, setData] = useState([
        {id: 1, image: require('../assets/images/istockphoto-617759204-612x612-removebg-preview.png')},
        {id: 2, image: require('../assets/images/premium_photo-1675864532183-8f37e8834db5-removebg-preview.png')},
        {id: 3, image: require('../assets/images/photo-1606149059549-6042addafc5a-removebg-preview.png')},
        {id: 4, image: require('../assets/images/photo-1643886027883-1a23fe41ee2a-removebg-preview (1).png')},
        {id: 5, image: require('../assets/images/pexels-photo-2338407-removebg-preview.png')}
    ]);
    const renderItem = ({item}) => {
       return ( <View style={styles.dishesContainer}>
            <Text style={styles.dishes}>{item.name}</Text>
        </View>);
    };
  return (
    <View style={styles.container}>
        <ImageBackground
        source={{uri: 'https://images.unsplash.com/photo-1637710847214-f91d99669e18?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2hpY2tlbiUyMGJ1cmdlcnxlbnwwfHwwfHx8MA%3D%3D'}}
        resizeMode="cover"
        style={styles.backgroundPic}
        >
            <View style={styles.section}>
                <View style={{position: "relative"}}>
                    <TextInput  style={styles.inputField} placeholderTextColor="white" placeholder="Search your dishes "/>
                    <View style={{position: "absolute", left: 22, top: 15, backgroundColor: 'rgba(43,41,41,0.9)', padding: 3, borderRadius: 20 }}>
                        <Ionicons name="fast-food-outline" size={24} color="white" />
                    </View>
                </View>

                <ScrollView style={styles.scroll}
                horizontal={true}
                showsHorizontalScrollIndicator={false}>
                    {data.map((item, index) => (
                        <View key={item.id} style={styles.imageViewScroll}>
                            <Image source={item.image} style={styles.scrollImage}/>
                        </View>
                    ))}

                </ScrollView>
                <FlatList
                    data={menuItems}
                    renderItem={renderItem}
                    keyExtractor={(item) => item.id.toString()}
                    style={styles.flat}

                />
            </View>



        </ImageBackground>

    </View>
  );
}
const styles = StyleSheet.create({
    container:{
        flex: 1,


    },
    backgroundPic:{
        width: "100%",
        height: "100%",

    },

    section:{
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.7)',
        // paddingHorizontal: 5,
        paddingVertical: 15,

    },
    inputField:{
        paddingHorizontal: 55,
        marginHorizontal: 10,
        backgroundColor: 'transparent',
        borderWidth: 1,
        borderStyle: 'solid',
        color: 'white',
        fontStyle: 'italic',
        fontSize: 18,
        borderRadius: 20,
        borderColor: 'white',
        marginBottom: 15,
        height: 55,



    },
    scroll:{
        flexGrow: 0.1,

    },
    flat:{
        backgroundColor: 'rgba(0,0,0,0.9)',
        height: '75%',


    },
    dishesContainer:{

    },
    dishes:{
       color: '#ffffff',
        flexDirection: 'row',
        paddingHorizontal: 15,
        paddingVertical: 15,
        backgroundColor: 'blue'

    },
    imageViewScroll:{
        backgroundColor: "yellow",
        width: 210,
        height: 210,
        borderRadius: '50%',

    },
    scrollImage: {
        width: 200,
        height: 200,
    },


})
