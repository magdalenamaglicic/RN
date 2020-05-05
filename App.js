/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import React from 'react';
import { WebView } from 'react-native-webview';
import { SafeAreaView, StyleSheet, ScrollView, View } from 'react-native';

import { Colors } from 'react-native/Libraries/NewAppScreen';

const App = () => {
  return (
    <>
      <SafeAreaView>
        <ScrollView style={styles.scrollView}>
          <View style={styles.body}>
            <WebView
              source={{
                uri:
                  'http://picniic-mobile-web-stage.s3-website-us-east-1.amazonaws.com/',
              }}
            />
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
    height: 7000,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default App;
