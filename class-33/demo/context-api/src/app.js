import SettingsProvider from './context/settings';
import ThemeProvider from './context/theme';
import Main from './components/main';
function App() {
  return (
    <ThemeProvider>
      <SettingsProvider>
        <Main />
      </SettingsProvider>
    </ThemeProvider>
  );
}

export default App;
