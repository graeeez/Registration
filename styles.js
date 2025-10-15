import { StyleSheet } from 'react-native';

export const BUTTON_COLOR = "#1d382fff";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#c8ccc8ff',
    padding: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },

  pageTitle: {
    fontSize: 28,
    fontWeight: '700',
    color: '#143f34ff',
    marginBottom: 10,
    textTransform: 'uppercase',
  },

  buttonContainer: {
    marginTop: 20,
    width: '40%',
    minWidth: 200,
    borderRadius: 8,
    overflow: 'hidden',
    color: BUTTON_COLOR,
  },

  pageTitle: {
    fontSize: 28,
    fontWeight: '700',
    color: '#143f34ff',
    marginBottom: 10,
    textTransform: 'uppercase',
  },

  formTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: '#143f34ff',
    marginBottom: 20,
  },

  input: {
    width: '30%',
    minWidth: 250,
    height: 50,
    backgroundColor: '#fff',
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 15,
    marginBottom: 15,
  },

  button: {
    width: '100%',
    minWidth: 250,
    height: 50,
    backgroundColor: BUTTON_COLOR,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },

  buttonLabel: {
    fontSize: 18,
    fontWeight: '600',
    color: '#ffffff',
  },

  reviewContainer: {
    backgroundColor: '#ffffff',
    padding: 20,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    width: '100%',
    maxWidth: 400,
    marginBottom: 20,
  },

  reviewItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#cfcfcfff',
  },

  label: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
  },

  value: {
    fontSize: 16,
    color: '#666',
  },

  homepageImage: {
    width: 170,
    height: 170,
    alignSelf: 'center',
  },

  userItem: {
    backgroundColor: '#ffffff',
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  userName: {
    fontSize: 16,
    fontWeight: '500',
    color: '#333',
   
  
  },
  userEmail: {
    fontSize: 14,
    color: '#666',
  },

  userGender: {
    fontSize: 14,
    color: '#666',
  },
  input: {
    width: '30%',
    minWidth: 250,   
    height: 50,
    backgroundColor: '#fff',
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 15,
    marginBottom: 15,
  },
  



});

export default styles;