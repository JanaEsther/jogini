import { render } from '@czechitas/render';
import './header.css';

export const Header = (props) => {
  return (
    <header>
      <h1 className="site-title">{props.title}</h1>
    </header>
  );
};
