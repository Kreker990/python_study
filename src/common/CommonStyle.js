import { Dimensions, StyleSheet, View } from "react-native";

// dismensions
export const screenWidth = Dimensions.get('window').width
export const screenHeight = Dimensions.get('window').height
// scale
export const widthScale = screenWidth / 375
export const heightScale = screenHeight / 812

export const colors = {
    white: '#FFFFFF',
    black: '#000000',
    blue: 'rgba(66, 103, 178,1)',
    blue25: 'rgba(66, 103, 178,0.25)',
    phon: '#F7F8FA'
}

export const block = StyleSheet.create({
    container: {
        width: widthScale * 335,
        marginHorizontal: widthScale * 20,
    },
    upperIndent: {
        marginTop: 70
    },
    shadowBlock: {
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    }
})

export const verticalIndent = (height) => <View style={{ height: height }}></View>
export const horizontalIndent = (width) => <View style={{ width: width }}></View>