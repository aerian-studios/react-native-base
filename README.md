#  ReactNativeBase
React Native App project setup heavily inspired by the marvellous example set at [Ignite](https://github.com/infinitered/ignite), but with much more documentation.

## About this project
*Please replace this with the specifics of your project and make sure to keep your READMEs up to date as they represent the starting point for all users.*

This project is a base template to be used as a starting point for React Native projects; it has many of the most useful features already baked in and testing galore.

## :arrow_up: How to Setup
**Step 1:** Install [react native](https://facebook.github.io/react-native/docs/getting-started.html) and dependancies

* `brew install node`
* `brew install watchman`
* `yarn global add react-native-cli` or `npm install -g react-native-cli`

**Step 2:** git clone this repo:

**Step 3:** cd to the cloned repo:

**Step 4:** Install the Application dependencies with NPM

* `yarn install` or `npm install`

**Step 5: OPTIONAL** Install [reactotron](https://github.com/reactotron/reactotron/blob/master/docs/installing.md) so that you can debug your application.

* `brew update`
* `brew cask install reactotron`

## :arrow_forward: How to Run App

**Step 1:** cd to the repo,

**Step 2:** Rename the project to your application name - change the string *'com.reactNativeBase'* in all non-generated files (`android/app/build.gradle`, `android/app/src/main/MainApplication.java`, `ios/reactnativeBase.pbxproj`) - this last may be better achieved through Xcode

**NOTE:** You may have to do a global search for 'com.reactNativeBase' and replace with 'com.yourpackagename', also a global search for 'reactNativeBase' and replace with 'yourappname'. Then delete rm 'ios/build' 'ios/reactNativeBaseTests' and 'ios/reactNativeBase.xcodeproj'. Clean the project in xcode, run 'react-native upgrade' and finally 'react-native run-ios'


**Step 3:** link items (you may have to do this a few times as you add new Native Libraries)

* **IF YOU ARE SETTING UP THE PROJECT, not joining the project** run `react-native upgrade`
  - If asked, don't overwrite `.gitignore` file.
* run `react-native link`

**Step 4:** If it doesn't exist, create a file called `.env` in the root folder - this is used for storing API keys, and other secrets.

**Step 5:** Build and run the application:

***iOS:***

* `react-native run-ios` (optionally add `--device "[Name of phone here]"`)
* If you are running on a phone, you will need to open the `./ios` folder in Xcode and chose the Aerian team for both the main product and the test product

***Android:***

* You may need to have an emulator running or a phone plugged in (if you plug in a single phone, this will run on the phone)
* `android avd` to open the android virtual device tool and setup your virtual devices
* `react-native run-android`.

**Tip:** A debug menu can be triggered in the emulators by `cmd + D` on iOS or `cmd + m` on android. You can choose to debug from this menu and use chrome to debug the script.

**NOTE:** if you are having trouble with this, have a look at [the React native setup docs](http://facebook.github.io/react-native/docs/getting-started.html), there are some potential configs that can help.

**NOTE:** if you are trying to run on a device that is less than version 5 of Android then you will need to follow the WiFi setup instructions [here] (https://facebook.github.io/react-native/docs/running-on-device-android.html)

** :bug: When things are misbehaving: **

Sometimes the combination of caches causes odd behaviour... when that happens, it can help to run `yarn run clean` or `npm run-script clean`, which cleans all caches.

## :clapper: Making a release version
### Android
This project comes with a keystore and settings built in **PLEASE DON'T DO THAT ON A REAL PROJECT**. You will need to generate a private signing key and a keystore, then you will need to modify 2 gradle files...

1. If present, delete `android/app/base-release-key.keystore` because we are going to replace this. Git is set to ignore all `.keystore` files so you will need to work out a strategy for team sharing of this file.
2. In terminal navigate to the `android/app` folder - `cd android/app`.
3. Generate the new key and keystore, in terminal run (but change `base-` in the name to a name appropriate to your project. e.g. `base-release-key.keystore` should be named `bcn-release-key.keystore` for the BCN app):

  `keytool -genkey -v -keystore base-release-key.keystore -alias base-key-alias -keyalg RSA -keysize 2048 -validity 10000`

  Follow the keytool instructions, **try to use a password >= 20 characters long** and you will end up with a `yourProjectName-release-key.keystore` in `android/app`. This should ideally not be included in the version control, especially of public repos, but this keystore will need to accompany the project because it uniquely identifies the generated apk files for the Google Play Store. This means that you will need to work out a strategy for storing these in a way that team members can share.

  **NOTE:** you should generate a different keystore for every project and the keystore MUST NOT change once the app is on the store, or it will no longer be considered the same app.
4. Make sure your `.keystore` generated in the above step is in your `android/app` folder.
5. In this project, we setup global gradle properties to be used in the build.

  Copy the code below and paste it into your `~/.gradle/gradle.properties` file:
  ```
  REACTNATIVEBASE_RELEASE_STORE_FILE=base-release-key.keystore
  REACTNATIVEBASE_RELEASE_STORE_PASSWORD=android
  REACTNATIVEBASE_RELEASE_KEY_ALIAS=base-key-alias
  REACTNATIVEBASE_RELEASE_KEY_PASSWORD=android
  ```
  * You will need to change the `base-release-key.keystore` and `base-key-alias` to the name you chose when you generated your key/keystore above.
  * Change the passwords the ones used in the setup for the keystore
  * Change the variable name so that it is appropriate to your project (the bit that starts `REACTNATIVEBASE...`) because the global gradle.properties will likely store more than one project's details.
  * Make sure to also change the refrences in `android/build.gradle`.

6. And in your `android/build.gradle`:
  - then in the `buildTypes` section, add `signingConfig signingConfigs.release`. e.g.
  ```
  buildTypes {
        release {
            minifyEnabled enableProguardInReleaseBuilds
            proguardFiles getDefaultProguardFile("proguard-android.txt"), "proguard-rules.pro"
            signingConfig signingConfigs.release
        }
  }
  ```
  - Finally add a new section after `defaultConfig { ... }` (changing naming as per above):
  ```
  defaultConfig { ... }
  signingConfigs {
    release {
      storeFile file(REACTNATIVEBASE_RELEASE_STORE_FILE)
      storePassword REACTNATIVEBASE_RELEASE_STORE_PASSWORD
      keyAlias REACTNATIVEBASE_RELEASE_KEY_ALIAS
      keyPassword REACTNATIVEBASE_RELEASE_KEY_PASSWORD
    }
  }
  ```

8. Assemble all assets and generate the release APK. run the following **from within the `android` folder**:
  `./gradlew assembleRelease`

  The generated APK can be found under `android/app/build/outputs/apk/app-release.apk`, and is ready to be distributed.
9. Test this on a device `react-native run-android --variant=release` with a device plugged in.

###iOS
These notes are basically from the [react native docs - https://facebook.github.io/react-native/docs/running-on-device-ios.html](https://facebook.github.io/react-native/docs/running-on-device-ios.html):
1. Building an app for distribution in the App Store requires using the Release scheme in Xcode. To do this, go to **Product > Scheme > Edit Scheme** (`cmd + <`), make sure you're in the Run tab from the side, and set the Build Configuration dropdown to `release`.
2. **App Transport Security:** ATS is disabled by default in projects generated using the React Native CLI in order to make development easier. You should re-enable ATS prior to building your app for production by removing the `NSAllowsArbitraryLoads` entry from your `Info.plist` file in the `ios/` folder.
3. Test on a device in the usual way in Xcode
4. Make an archive in the usual way in Xcode.

## :no_entry_sign: Standard Compliant

This project implements the eslint [plugin for React Native](https://github.com/Intellicode/eslint-plugin-react-native). It will run on commit and it is recommended that it is implemented in your editing environment too.

There is also strict typing using the [flow type checker](https://github.com/facebook/flow), which hasn't been implemented into the CI, but it is recommended that you use it in your editor.

**To Test and Lint on Commit**

The project will attempt to run all the tests and eslint when you commit a change. If either tests or code style fails, you will not be able to commit. This is implemented using [ghooks](https://github.com/gtramontina/ghooks). There is no additional setup needed.

**... or NOT to **

If you have to bypass lint for a special commit that you will come back and clean (pushing something to a branch etc.) then you can bypass git hooks with adding `--no-verify` to your commit command. A more healthy option would be to fix your errors fist ;p

  **NOTE:** If you are using SourceTree to commit then you may recieve a 'file not found' error. If this is the case you can try opening the application using   `open /opt/homebrew-cask/Caskroom/sourcetree/2.1/SourceTree.app` Now it should be able to process the git hooks.

**Understanding Linting Errors**

The linting rules are from the [eslint best practices]() and the specifics for React Native

## :closed_lock_with_key: Secrets
This project uses [react-native-config](https://github.com/luggit/react-native-config) to separate config from code and expose config variables to your javascript code in React Native. You can store API keys
and other sensitive information in a `.env` file at the root of the project:

```
API_URL=https://myapi.com
GOOGLE_MAPS_API_KEY=abcdefgh
```

and access them from React Native like so:

```
import Secrets from 'react-native-config'

Secrets.API_URL  // 'https://myapi.com'
Secrets.GOOGLE_MAPS_API_KEY  // 'abcdefgh'
```

The `.env` file is ignored by git keeping those secrets out of your repo.

## :rocket: Setting up the app for release
--The project implements fastlane [Fastlane docs https://fastlane.tools/](https://fastlane.tools/) if you want to integrate with that system.-- Not yet decided.

## :file_folder: Project structure
### Folders and files
* `./android/`: is where android specific platform files will reside
* `./App/`: is the main directory where most of the app files will live. It is split into role named folders. It may be worth taking some time to understand a little bit more about React and Redux if this looks confusing (see Related Articles below), but there are also further READMEs in some of the folders to explain that folder.
    - `./App/Components`: contains stand alone "dumb" components
    - `./App/Config`: contains *application* specific config - .e.g. debug settings, reactotron settings, etc
    - `./App/Containers`: contains "intelligent" componenets that contain other componenets
    - `./App/Fixtures`: contains API default responses, useful for any number of reasons, including testing
    - `./App/I18n`: React-native-I18n stuff should you have multi-language support
    - `./App/Images`: Image assets used in the app
    - `./App/Lib`: Helpers, or standalone elements that are ideally pure functions with no dependencies
    - `./App/Navigation`: contains all set up for routing and navigation views
    - `./App/Redux`: contains Redux components
    - `./App/Sagas`: contains Redux-Saga setup (for handling side effects / server side communication)
    - `./App/Services`: contains services (something that has an effect) as opposed to the pure functions
    - `./App/Themes`: contains app theme styles that can be used across the app.
    - `./App/Transforms`: functions that transform data into other forms for consumption in the app - it could be that this uses some of the pure functions from `Lib` for example
* `./fastlane/`: is where your fastlane (see Setting up the app for release) configs will live
* `./ios/`: is where iOS specific platform files will reside
* `./Tests/`: is where test files live. It should have a similar structure to the `App` folder.
* `./index.android.js`: is the Android start file
* `./index.ios.js`: is the iOS start file

### :bulb: Some notes
There are more specific README notes in each folder, describing the purpose of the folder and files there where necessary.

This project is setup with a number of 'best practices', for example, it not only implements Redux, it also implements, [seamless-immutable](https://github.com/rtfeldman/seamless-immutable) and [Redux-Sagas](https://github.com/yelouafi/redux-saga). To begin with, that may be a bit overwhelming, especially because their aim is to abstract away boilerplate. Where this is the case, focus on the base functionality, redux in this case, and have a look at the notes in the `README.md` for that folder.

## :bike: Where to start
The init file for each platform is ostensibly `./index.ios.js` and `./index.android.js`, but this project has been setup so that they both import `./App/Containers/App.js`, which is the root Container for the React-Native app.

## :hammer: Testing
The testing framework is [AVA](https://github.com/avajs/ava), which runs tests concurrently for speed. This means that using the tests in watch mode is a more pleasant experience and TDD/BDD is easier...

We also use [airbnb's enzyme testing utility for React](https://github.com/airbnb/enzyme) for dealing with the Virtual DOM/render and [Mockery](https://github.com/mfncooper/mockery) to mock dependencies, especially to 3rd party react native plugins

To run in watch mode:
`yarn run test:watch` or `npm run-script test:watch` - it is a really good idea to have this running visibly in your ide all the time

To just run tests (in production mode):
`yarn test` or `npm test`

There is also a test coverage report (try to keep this up in the 90%+ range for healthy code):
`yarn run coverage` or `npm run-script coverage`

There may be an error launching a pretty HTML version of the coverage results, but they are also printed to the console.

## :open_file_folder: Related Articles
* Ignite Documentation (the basis for a lot of this project) - [Ignite Wiki https://github.com/infinitered/ignite/wiki](https://github.com/infinitered/ignite/wiki)
* React Native Documentation - [http://facebook.github.io/react-native/docs/getting-started.html](http://facebook.github.io/react-native/docs/getting-started.html)
  - Redux saga Documentation - [https://github.com/yelouafi/redux-saga](https://github.com/yelouafi/redux-saga)
  - Redux Documentation - [Redux Docs http://redux.js.org/index.html](http://redux.js.org/index.html)
  - Router Documentation - [https://github.com/aksonov/react-native-router-flux](https://github.com/aksonov/react-native-router-flux)
* More React Native resources - [http://reactnative.com/](http://reactnative.com/)
* OS Components - [https://js.coach/react-native](https://js.coach/react-native)

## :zap: Troubleshooting
### After running react-native android you get the following error:
`
   com.android.ide.common.process.ProcessException: org.gradle.process.internal.ExecException:
   Process 'command '     /usr/lib/jvm/java-8-oracle/bin/java'' finished with non-zero exit value 2
`

**Solution:**
`
   cd android
   ./gradlew clean
`

### Error in iOs build referencing fontawesome or icons (dyld`dyld_fatal_error:)
Have you run `react-native link`?

If that doesn't work:
Manually link the RN Vector Icons files:

* Go to 'Build Phases' in Xcode
* Link Binaries with Libraries by clicking on '+'
* Click on 'Add Other'
* Navigate to (project folder) -> node_modules -> react-native-vector-icons
* Select 'RNVectorIcons.xcodeproj'
* Clean Build
* Build Again

Also:
* https://javascript.unicorn.tv/articles/react-native-adding-fonts

### The icons show up as a crossed out box on Android
* Make sure you've copied the font to android/app/src/main/assets/fonts.
* Delete the android/app/build folder.
* Recompile the project.
