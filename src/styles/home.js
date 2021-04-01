import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  inputStyle: {
    color: 'gray',
    paddingLeft: 15,
    paddingRight: 15,
    borderBottomWidth: 1,
	  height: 40,
	  width: '80%',
    marginVertical: 10,
    flexDirection: 'row',
	  justifyContent: 'center',
    backgroundColor: 'rgba(55, 55, 55, 0.05)',
    borderRadius: 10
  },
  labels:{
    alignSelf: 'flex-start', 
    paddingLeft: '10%',
    marginTop: 10,
    fontSize: 12
  },
  button: { 
    height: 40, 
    width: '80%', 
    borderRadius: 10, 
    backgroundColor: 'grey', 
    alignSelf: 'center', 
    alignItems: 'center', 
    justifyContent: 'center',
		marginBottom: 20
  },
	item: {
		backgroundColor: 'gray',
		padding: 20,
		marginVertical: 8,
		marginHorizontal: 16,
		borderRadius: 10,
		flexDirection: 'row',
	},
	textRow: {
		flexDirection: 'row', 
		justifyContent: 'space-between',
		width: '100%' 
	},
	line: {
		height: 1,
    marginHorizontal: 10,
		marginVertical: 8,
    backgroundColor: '#e2e2e2',
	}, 
	centeredView: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: "rgba(0, 0, 0, 0.5)",
	},
	modalView: {
		backgroundColor: "white",
		borderRadius: 20,
		padding: 10,
		alignItems: "center",
		shadowColor: "#000",
		width: '80%',
		height: '80%'
	},
	textStyle: {
		color: "white",
		fontWeight: "bold",
		textAlign: "center"
	},
	modalText: {
		marginBottom: 15,
		textAlign: "center"
	}
});

export default styles;