import React, {useState} from 'react';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  Touchable,
  TouchableOpacity,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

function App(): JSX.Element {
  const [randomBackgroundColor, setRandomBackgroundColor] = useState('#fff');

  const generateColor = () => {
    const hexRange = '0123456789ABCDEF';

    let color = '#';
    for (let index = 0; index < 6; index++) {
      color += hexRange[Math.floor(Math.random() * 16)];
    }

    setRandomBackgroundColor(color);
  };
  return (
    <>
      <StatusBar backgroundColor={randomBackgroundColor} />
      <View
        style={[styles.container, {backgroundColor: randomBackgroundColor}]}>
        <TouchableOpacity onPress={generateColor}>
          <View style={styles.actionBtn}>
            <Text style={styles.actionBtnTxt}>Press Me</Text>
          </View>
        </TouchableOpacity>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  actionBtn: {
    borderRadius: 12,
    backgroundColor: '#6A1B4D',
    paddingVertical: 10,
    paddingHorizontal: 40,
  },
  actionBtnTxt: {
    color: '#fff',
    textTransform: 'uppercase',
  },
});

export default App;
