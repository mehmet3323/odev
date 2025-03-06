import React from 'react';
import { View, Text, Image, StyleSheet, Touchable, TouchableOpacity } from 'react-native';
import styles from './styles';

const ProfileScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      {/* Üst Profil Başlığı */}
      <View style={styles.header}>
      <TouchableOpacity onPress={() => {
          navigation.navigate('mountui2');
        }}>
        <Image
          source={{ uri: 'https://cdn-icons-png.flaticon.com/128/9312/9312240.png' }}
          style={styles.icon}
        />
       </TouchableOpacity>
        <Text style={styles.headerTitle}>Profile</Text>
        <Image
          source={{ uri: 'https://cdn-icons-png.flaticon.com/128/2099/2099058.png' }}
          style={styles.icon}
        />
      </View>

      {/* Profil Resmi ve Bilgiler */}
      <View style={styles.profileContainer}>
        <Image
          source={{ uri: 'https://media.licdn.com/dms/image/v2/D4D03AQF4JAt0wEfPtA/profile-displayphoto-shrink_400_400/B4DZPJrADJHUAg-/0/1734255313735?e=1741219200&v=beta&t=NCOAvcsc9yOJXF44ZqFKaz8tVQCLepgq1_CTScXn3eg' }} // Örnek profil resmi
          style={styles.profileImage}
        />
        <Text style={styles.name}>Çağatay Savun</Text>
        <Text style={styles.designation}>Senior Android Devaloper</Text>
        <View style={styles.statsContainer}>
          <Text style={styles.statsText}>1000 Followers</Text>
          <Text style={styles.statsText}>1200 Following</Text>
        </View>
      </View>

      {/* İletişim Bilgileri */}
      <View style={styles.infoContainer}>
        <View style={styles.infoRow}>
          <Image
            source={{ uri: 'https://cdn-icons-png.flaticon.com/128/646/646094.png' }}
            style={styles.infoIcon}
          />
          <Text style={styles.infoText}>cagataysavun@gmail.com</Text>
        </View>
        <View style={styles.infoRow}>
          <Image
            source={{ uri: 'https://cdn-icons-png.flaticon.com/128/545/545245.png' }}
            style={styles.infoIcon}
          />
          <Text style={styles.infoText}>+90 531 503 15 72</Text>
        </View>
        <View style={styles.infoRow}>
          <Image
            source={{ uri: 'https://cdn-icons-png.flaticon.com/128/739/739257.png' }}
            style={styles.infoIcon}
          />
          <Text style={styles.infoText}>@cagatay27</Text>
        </View>
        <View style={styles.infoRow}>
          <Image
            source={{ uri: 'https://cdn-icons-png.flaticon.com/128/10110/10110371.png' }}
            style={styles.infoIcon}
          />
          <Text style={styles.infoText}>www.behance.net/cagatay27</Text>
        </View>
        <View style={styles.infoRow}>
          <Image
            source={{ uri: 'https://cdn-icons-png.flaticon.com/128/13266/13266170.png' }}
            style={styles.infoIcon}
          />
          <Text style={styles.infoText}>www.facebook.com/cagatay27</Text>
        </View>
      </View>
    </View>
  );
};

export default ProfileScreen;
