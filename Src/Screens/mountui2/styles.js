import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9F9F9',
    padding: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  greeting: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 16,
    color: '#8E8E8E',
  },
  userImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  searchSection: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  searchInput: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    padding: 10,
    borderRadius: 10,
    marginRight: 10,
  },
  searchButton: {
    backgroundColor: '#EFEFEF',
    padding: 10,
    borderRadius: 10,
  },
  searchIcon: {
    width: 20,
    height: 20,
  },
  popularSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  popularTitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  viewAll: {
    fontSize: 16,
    color: '#8E8E8E',
  },
  filterTabs: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20,
    marginTop:20,

},
  filterTab: {
    fontSize: 16,
    color: '#8E8E8E',
  },
  filterTabActive: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  scrollContainer: {
    flexDirection: 'row',
  },
  card: {
   marginTop:20,
    backgroundColor: '#FFFFFF',
    borderRadius: 40,
    marginRight: 20,
    overflow: 'hidden',
    width: 300,
    height:500,
   
},
  cardImage: {
    width: '100%',
    height: 350,
    
},
  cardTextContainer: {
    padding: 10,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  cardLocation: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  cardLocationIcon: {
    width: 16,
    height: 16,
    marginRight: 5,
  },
  cardLocationText: {
    fontSize: 14,
    color: '#8E8E8E',
  },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    position: 'absolute',
    bottom: 20,
    left: 0,
    right: 0,
  },
  navIcon: {
    fontSize: 24,
  },
  backButton: {
    position: 'absolute',
    top: 20,
    left: 20,
    backgroundColor: '#FFFFFF',
    padding: 10,
    borderRadius: 20,
  },
});

export default styles;
