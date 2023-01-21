import React from "react";
import RootNavigator from "./src/Navigation/RootNavigator";
import configureStore from "./Redux/store/store";
import { Provider as ReduxProvider } from "react-redux";
let store = configureStore();
export default function App() {
  return <ReduxProvider store={store}>
   <RootNavigator />
  </ReduxProvider>
   
}
