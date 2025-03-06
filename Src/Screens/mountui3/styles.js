import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  imageContainer: {
    position: 'relative',
  },
  image: {
    width: '100%',
    height: 450,
    borderRadius:20,
},
  backButton: {
    position: 'absolute',
    top: 20,
    left: 20,
    backgroundColor: '#FFFFFF',
    padding: 10,
    borderRadius: 20,
  },
  saveButton: {
    position: 'absolute',
    top: 20,
    right: 20,
    backgroundColor: '#FFFFFF',
    padding: 10,
    borderRadius: 20,
  },
  icon: {
    width: 20,
    height: 20,
  },
  cardInsideImage: {
    position: 'absolute',
    bottom: 10,
    left: 20,
    right: 20,
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    padding: 15,
    borderRadius: 10,
   
},
  cardTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  cardDetailsInsideImage: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 30,
  },
  locationInsideImage: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  locationIcon: {
    width: 16,
    height: 16,
    marginRight: 5,
  },
  locationTextInsideImage: {
    fontSize: 14,
    color: '#FFFFFF',
  },
  priceInsideImage: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  tabSection: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 20,
  },
  overviewTab: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  detailsTab: {
    fontSize: 16,
    color: '#8E8E8E',
  },
  infoSection: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20,
  },
  infoItem: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  infoIcon: {
    width: 20,
    height: 20,
    marginRight: 5,
  },
  infoText: {
    fontSize: 14,
    color: '#555555',
  },
  descriptionSection: {
    marginHorizontal: 20,
    marginBottom: 20,
  },
  descriptionText: {
    
    fontSize: 18,
    color: '#666666',
    textAlign: 'justify',
 
},
  bookButton: {
    
    backgroundColor: '#000000',
    paddingVertical: 20,
    alignItems: 'center',
    justifyContent: 'center',
   marginHorizontal: 20,
    borderRadius: 10,
  },
  bookButtonText: {
    fontSize: 16,
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
});

export default styles;