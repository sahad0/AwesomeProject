React Native App - Dummy Data Display
This is a simple React Native app that fetches dummy data from an external API and displays it in a list format. This project was created using React Native version 0.63.4.

Getting Started
Before you can run the app, you will need to make sure you have the following software installed on your machine:

Node.js (version 14 or higher)
npm or yarn
Xcode or Android Studio (depending on whether you want to run the app on iOS or Android)
Once you have installed these dependencies, follow these steps to get started:

Clone this repository to your local machine.
Open a terminal window and navigate to the project directory.
Run npm install or yarn install to install the project dependencies.
Run npx pod-install (for iOS) or npx jetify (for Android) to install any required native dependencies.
Run npm start or yarn start to start the Metro bundler.
Open another terminal window and run npm run ios or npm run android to launch the app in the iOS Simulator or Android emulator, respectively.
Usage
When you launch the app, you should see a list of dummy data displayed on the screen. You can scroll through the list to see all the items.

The app fetches the data from an external API using the axios() method, which returns a Promise that resolves to the response object. Once the response has been received, the data is converted to JSON format and stored in the app's state using the useState() hook. The list is then rendered using the FlatList component from the React Native core library.


You can bookmark and remove Quotes with the help of Redux State management.



Screenshots


![Screenshot from 2023-04-07 15-35-48](https://user-images.githubusercontent.com/88948601/230591301-fee9b73b-be82-495e-ab21-4f9877e302e5.png)



![Screenshot from 2023-04-07 15-35-55](https://user-images.githubusercontent.com/88948601/230591313-36cd2fbc-72d9-4fd5-a422-6523bed17712.png)


![Screenshot from 2023-04-07 17-20-34](https://user-images.githubusercontent.com/88948601/230604276-6d1266e2-8732-47b3-bdda-180dd9708792.png)



![Screenshot from 2023-04-07 17-20-39](https://user-images.githubusercontent.com/88948601/230604285-083e051b-a752-4d5d-89ef-ef174032ef6f.png)







