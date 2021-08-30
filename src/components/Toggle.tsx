import { useMediaQuery } from '../hooks/useMediaQuery';

export const Toggle = (props: any) => {
  const backgroundColor = useMediaQuery(
    ['(min-width: 1500px)', '(min-width: 1000px)', '(max-width: 600px)'],
    ['red', 'blue', 'green'],
    'black'
  );

  return (
    <div className="dark-mode-toggle">
      <button
        type="button"
        style={{ backgroundColor }}
        onClick={() => props.setDarkMode(false)}
      >
        ☀️
      </button>
      <span className="toggle-control">
        <input
          className="dmcheck"
          id="dmcheck"
          type="checkbox"
          checked={props.darkMode}
          onChange={() => props.setDarkMode(!props.darkMode)}
        />
        <label htmlFor="dmcheck" />
      </span>
      <button type="button" onClick={() => props.setDarkMode(true)}>
        🌙
      </button>
    </div>
  );
};
