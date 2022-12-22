import React from 'react';

import { Button, StyleSheet, Text, View } from "react-native";

import { createNativeStackNavigator, NativeStackScreenProps } from "@react-navigation/native-stack";
import {NavigationContainer} from '@react-navigation/native';

// const Section: React.FC<
//   PropsWithChildren<{
//     title: string;
//   }>
// > = ({children, title}) => {
//   const isDarkMode = useColorScheme() === 'dark';
//   return (
//     <View style={styles.sectionContainer}>
//       <Text
//         style={[
//           styles.sectionTitle,
//           {
//             color: isDarkMode ? Colors.white : Colors.black,
//           },
//         ]}>
//         {title}
//       </Text>
//       <Text
//         style={[
//           styles.sectionDescription,
//           {
//             color: isDarkMode ? Colors.light : Colors.dark,
//           },
//         ]}>
//         {children}
//       </Text>
//     </View>
//   );
// };

type RootStackParamList = {
  Home: undefined;
  Profile: {userId: string};
  Feed: {sort: 'latest' | 'top'} | undefined;
};
type homeProps = NativeStackScreenProps<RootStackParamList, "Home">;
type profileProps = NativeStackScreenProps<RootStackParamList, "Profile">;
type feedProps = NativeStackScreenProps<RootStackParamList, "Feed">;

const RootStack = createNativeStackNavigator<RootStackParamList>();

function HomeScreen({ navigation}: homeProps) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Button
        title="Go to Feed"
        onPress={() => navigation.navigate('Feed')}
      />
    </View>
  );
}

function FeedScreen() {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Details Screen</Text>
    </View>
  );
}

const App = () => {
  return (
    <NavigationContainer>
      <RootStack.Navigator initialRouteName="Home">
        <RootStack.Screen name="Home" component={HomeScreen} />
        <RootStack.Screen name="Feed" component={FeedScreen} />

        {/*<RootStack.Screen*/}
        {/*  name="Profile"*/}
        {/*  component={Profile}*/}
        {/*  initialParams={{ userId: user.id }}*/}
        {/*/>*/}
        {/*<RootStack.Screen name="Feed" component={Feed} />*/}
      </RootStack.Navigator>
    </NavigationContainer>
  );
  // const isDarkMode = useColorScheme() === 'dark';
  //
  // const backgroundStyle = {
  //   backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  // };
  //
  // return (
  //   <SafeAreaView style={backgroundStyle}>
  //     <StatusBar
  //       barStyle={isDarkMode ? 'light-content' : 'dark-content'}
  //       backgroundColor={backgroundStyle.backgroundColor}
  //     />
  //
  //     <View
  //       style={{
  //         backgroundColor: isDarkMode ? Colors.black : Colors.white,
  //         alignItems: 'center',
  //         justifyContent: 'center',
  //       }}>
  //       <Image
  //         source={require('ScoopWithTemplate/assets/images/Ellipse252.png')}
  //         style={styles.greyCircle}
  //       />
  //       <Text style={[styles.catchPhrase, {fontWeight: 'bold'}]}>
  //         친구 없어서 운동을 못한다고?
  //       </Text>
  //       <Text style={[styles.catchPhrase, {fontWeight: 'bold'}]}>
  //         그런 고민은 이제 그만!
  //       </Text>
  //       <Image
  //         source={require('ScoopWithTemplate/assets/images/Group218.png')}
  //         style={styles.groupDots}
  //       />
  //       <View
  //         style={{
  //           backgroundColor: isDarkMode ? Colors.black : Colors.white,
  //           alignItems: 'center',
  //           justifyContent: 'center',
  //         }}>
  //         <View
  //           style={{
  //             backgroundColor: isDarkMode ? Colors.black : Colors.white,
  //             position: 'relative',
  //           }}>
  //           <Text
  //             style={[
  //               styles.loginButtonText,
  //               {
  //                 fontWeight: 'bold',
  //                 position: 'absolute',
  //                 zIndex: 1,
  //                 left: 120,
  //                 top: 20,
  //                 marginBottom: 30,
  //               },
  //             ]}>
  //             로그인
  //           </Text>
  //           <Image
  //             style={{zIndex: 0}}
  //             source={require('ScoopWithTemplate/assets/images/Frame1.png')}
  //           />
  //         </View>
  //         <Text
  //           style={[
  //             styles.catchPhrase,
  //             {fontSize: 12, alignItems: 'center', marginTop: 10},
  //           ]}>
  //           회원가입하기
  //         </Text>
  //       </View>
  //     </View>
  //     {/*<ScrollView*/}
  //     {/*  contentInsetAdjustmentBehavior="automatic"*/}
  //     {/*  style={backgroundStyle}>*/}
  //     {/*  <Header />*/}
  //
  //     {/*  <View*/}
  //     {/*    style={{*/}
  //     {/*      backgroundColor: isDarkMode ? Colors.black : Colors.white,*/}
  //     {/*    }}>*/}
  //     {/*    <Section title="Step One">*/}
  //     {/*      Edit <Text style={styles.highlight}>App.tsx</Text> Okay lemme see how it's done*/}
  //     {/*    </Section>*/}
  //     {/*    <Section title="Press R To See Your Changes">*/}
  //     {/*      <ReloadInstructions />*/}
  //     {/*    </Section>*/}
  //     {/*    <Section title="Debug">*/}
  //     {/*      <DebugInstructions />*/}
  //     {/*    </Section>*/}
  //     {/*    <Section title="Learn More">*/}
  //     {/*      Read the docs to discover what to do next:*/}
  //     {/*    </Section>*/}
  //     {/*    <LearnMoreLinks />*/}
  //     {/*  </View>*/}
  //     {/*</ScrollView>*/}
  //   </SafeAreaView>
  // );
};

// const styles = StyleSheet.create({
//   sectionContainer: {
//     marginTop: 32,
//     paddingHorizontal: 24,
//   },
//   sectionTitle: {
//     fontSize: 24,
//     fontWeight: '600',
//   },
//   sectionDescription: {
//     marginTop: 8,
//     fontSize: 18,
//     fontWeight: '400',
//   },
//   highlight: {
//     fontWeight: '700',
//   },
//   greyCircle: {
//     marginTop: 100,
//     marginBottom: 100,
//   },
//   groupDots: {
//     marginTop: 40,
//     marginBottom: 70,
//   },
//   catchPhrase: {
//     color: 'black',
//     fontSize: 18,
//   },
//   loginButtonText: {
//     color: 'black',
//     fontSize: 18,
//   },
// });

export default App;
