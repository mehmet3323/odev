import React from 'react';
import {
  View,
  Text,
  TextInput,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import styles from './styles';

const App = ({navigation}) => {
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <View>  
          <Text style={styles.greeting}>Hi, Çağatay 👋</Text>
          <Text style={styles.subtitle}>Explore the world</Text>
        </View>
        <Image
          source={{
            uri: 'https://media.licdn.com/dms/image/v2/D4D03AQF4JAt0wEfPtA/profile-displayphoto-shrink_400_400/B4DZPJrADJHUAg-/0/1734255313735?e=1740614400&v=beta&t=VpqppvrM7nie9xrtQSUJiq9WxrQiy5wmq3g3NkDhwUQ',
          }}
          style={styles.userImage}
        />
      </View>

      {/* Search Section */}
      <View style={styles.searchSection}>
        <TextInput
          placeholder="Search places"
          style={styles.searchInput}
        />
        <TouchableOpacity style={styles.searchButton}>
          <Image
            source={{
              uri: 'https://cdn-icons-png.flaticon.com/128/159/159751.png',
            }}
            style={styles.searchIcon}
          />
        </TouchableOpacity>
      </View>

      {/* Popular Places Section */}
      <View style={styles.popularSection}>
        <Text style={styles.popularTitle}>Popular places</Text>
        <TouchableOpacity>
          <Text style={styles.viewAll}>View all</Text>
        </TouchableOpacity>
      </View>

      {/* Filter Tabs */}
      <View style={styles.filterTabs}>
        <Text style={styles.filterTabActive}>Most Viewed</Text>
        <Text style={styles.filterTab}>Nearby</Text>
        <Text style={styles.filterTab}>Latest</Text>
      </View>

      
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.scrollContainer}>
       
        <View style={styles.card}>
         <TouchableOpacity onPress={() => {
          navigation.navigate('mountui4');
        }}>
          <Image
            source={{
              uri: 'https://i0.wp.com/ryokougirl.com/wp-content/uploads/2023/03/1-Fuji-intro.png?resize=960%2C544&ssl=1',
            }}
            style={styles.cardImage}
          />
              </TouchableOpacity>
         
          <View style={styles.cardTextContainer}>
            <Text style={styles.cardTitle}>Mount Fuji, Tokyo</Text>
            <View style={styles.cardLocation}>
              <Image
              
               source={{
                  uri: 'https://cdn-icons-png.flaticon.com/128/2838/2838912.png',
                }}
                style={styles.cardLocationIcon}
              />
              <Text style={styles.cardLocationText}>Tokyo, Japan</Text>
            </View>
          </View>
        </View>

        {/* Second Card */}
        <View style={styles.card}>
        <TouchableOpacity onPress={() => {
          navigation.navigate('mountui3');
        }}>
          <Image
            source={{
              uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2WmQ8FC7GRX_uFW5JqG-SucRJRqdjPrwQMw&s',
            }}
            style={styles.cardImage}
          />
         </TouchableOpacity>
          <View style={styles.cardTextContainer}>
            <Text style={styles.cardTitle}>Andes, South America</Text>
            <View style={styles.cardLocation}>
              <Image
                source={{
                  uri: 'https://cdn-icons-png.flaticon.com/128/2838/2838912.png',
                }}
                style={styles.cardLocationIcon}
              />
              <Text style={styles.cardLocationText}>South America</Text>
            </View>
          </View>
        </View>
      </ScrollView>

      {/* Bottom Navigation */}
      <View style={styles.bottomNav}>
        <TouchableOpacity onPress={() => {
          navigation.navigate('mountui1');
        }} >
          <Text style={styles.navIcon}>🏠</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.navIcon}>🕓​</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.navIcon}>❤️</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {
          navigation.navigate('mountui5');
        }} >
          <Text style={styles.navIcon}>​🙍🏽‍♂️​</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default App;
