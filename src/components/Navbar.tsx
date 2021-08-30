import { useDarkmode } from '../hooks/useDarkmode';
import { Toggle } from './Toggle';

export default function Navbar() {
  const [darkMode, setDarkMode] = useDarkmode();

  return (
    <div className="navbar">
      <Toggle darkMode={darkMode} setDarkMode={setDarkMode} />
    </div>
  );
}
