import { registerRootComponent } from 'expo';
import App from './src/App'; // Ajusta la ruta a donde se encuentra tu App.js o App.tsx

// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// It also ensures that whether you load the app in the Expo client or in a native build,
// the environment is set up appropriately
registerRootComponent(App);
