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
            uri: 'https://i0.wp.com/ryokougirl.com/wp-content/uploads/2023/03/1-Fuji-intro.png?resize=960%2C544&ssl=1',
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
        The Andes consist of a vast series of extremely
         high plateaus surmounted by even higher peaks
          that form an unbroken rampart over a distance 
          of some 5,500 miles (8,900 kilometers)—from the
           southern tip of South America to the continent’s 
           northernmost coast on the Caribbean. They separate
            a narrow western coastal area from the rest of the 
            continent, affecting deeply the conditions of life
             within the ranges themselves and in surrounding areas.
             The Andean mountain system is the result of global
              plate-tectonic forces during the Cenozoic Era (roughly the past 65 million years) 
              that built upon earlier geologic activity. About 250 million years ago the crustal
               plates constituting the Earth’s landmass were joined together into the 
               supercontinent Pangaea. The subsequent breakup of Pangaea and of its 
               southern portion, Gondwana, dispersed these plates outward, where they 
               began to take the form and position of the present-day continents.
       
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
