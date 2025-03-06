import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import styles from './styles';

const DetailScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      {/* Image Section */}
      <View style={styles.imageContainer}>
      
        <Image
          source={{
            uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2WmQ8FC7GRX_uFW5JqG-SucRJRqdjPrwQMw&s',
          }}
          style={styles.image}
        />
      
        <TouchableOpacity onPress={() => {
          navigation.navigate('mountui2');
        }}
         style={styles.backButton}>
          <Image
            source={{
              uri: 'https://cdn-icons-png.flaticon.com/128/9312/9312240.png',
            }}
            style={styles.icon}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.saveButton}>
          <Image
            source={{
              uri: 'https://cdn-icons-png.flaticon.com/128/5662/5662990.png',
            }}
            style={styles.icon}
          />
        </TouchableOpacity>

        {/* Card inside image */}
        <View style={styles.cardInsideImage}>
          <Text style={styles.cardTitle}>Andes Mountain</Text>
          <View style={styles.cardDetailsInsideImage}>
            <View style={styles.locationInsideImage}>
              <Image
                source={{
                  uri: 'https://cdn-icons-png.flaticon.com/128/2838/2838912.png',
                }}
                style={styles.locationIcon}
              />
              <Text style={styles.locationTextInsideImage}>South, America</Text>
            </View>
            <Text style={styles.priceInsideImage}>$230</Text>
          </View>
        </View>
      </View>

      {/* Overview Section */}
      <View style={styles.tabSection}>
        <Text style={styles.overviewTab}>Overview</Text>
        <Text style={styles.detailsTab}>Details</Text>
      </View>

      {/* Info Section */}
      <View style={styles.infoSection}>
        <View style={styles.infoItem}>
          <Image
            source={{
              uri: 'https://cdn-icons-png.flaticon.com/128/3884/3884295.png',
            }}
            style={styles.infoIcon}
          />
          <Text style={styles.infoText}>8 hours</Text>
        </View>
        <View style={styles.infoItem}>
          <Image
            source={{
              uri: 'https://cdn-icons-png.flaticon.com/128/3222/3222791.png',
            }}
            style={styles.infoIcon}
          />
          <Text style={styles.infoText}>16°C</Text>
        </View>
        <View style={styles.infoItem}>
          <Image
            source={{
              uri: 'https://cdn-icons-png.flaticon.com/128/149/149763.png',
            }}
            style={styles.infoIcon}
          />
          <Text style={styles.infoText}>4.5</Text>
        </View>
      </View>

      {/* Description Section */}
      <ScrollView style={styles.descriptionSection}>
        <Text style={styles.descriptionText}>
        The Andean Mountains, commonly referred to as the Andes,
         stretch along the western edge of South America,
          forming the longest continental mountain range in the world.
           Spanning over 7,000 kilometers (4,300 miles) through seven countries—Venezuela,
            Colombia, Ecuador, Peru, Bolivia, Chile, and Argentina—the Andes are a testament
             to the Earth’s geological history and natural beauty.
           Formation and Geography
            The Andes were formed over millions of years through the subduction of the Nazca and 
            Antarctic tectonic plates beneath the South American plate. This tectonic activity not only
             created the towering peaks but also gave rise to frequent earthquakes and volcanic activity in the region.
              The mountain range is divided into three primary regions: the Northern Andes, the Central Andes
              , and the Southern Andes, each with unique geographical and ecological characteristics.
        </Text>
      </ScrollView>

      {/* Book Now Button */}
      <TouchableOpacity style={styles.bookButton}>
        <Text style={styles.bookButtonText}>Book Now</Text>
      </TouchableOpacity>
    </View>
  );
};

export default DetailScreen;