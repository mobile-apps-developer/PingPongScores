# Run instructions

##### iOS:

commands -

```sh
- cd "~/PingPongScores"
- yarn
- cd ios && pod install
- cd ..
- npx react-native run-ios Or Open PingPongScores/ios/PingPongScores.xcworkspace in Xcode and click the Run button
```

##### Android:

Should have an Android emulator running (quickest way to get started), or a device connected.
Then run below command -

```sh
- cd "~/PingPongScores"
- yarn
- npx react-native run-android or open project in Android studio and clcik the run button after gradle build
```

# Directory structure

- components: Contains all the reusable components in the application.
- screens: Contains screens/views (Functional components).
- constants: Colors, Fonts etc.
- navigator: Application Navigation stack.
- utils: helper functions.
- tests: contains tests cases files.

### Note

- Application currently developed using JS, but for better type and complile time safey Typescript can be used
- For linter I have used - eslint
- I have used React Hooks and functional components

### Demo
![Demo image](https://github.com/sumitr25/PingPongScore/blob/master/demo.gif)