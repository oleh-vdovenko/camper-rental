import css from './LinkButton.module.css';
import Link from 'next/link';

interface LinkButtonProps {
  link?: string;
  type?: 'submit' | 'reset' | 'button';
  text: string;
}

const LinkButton = ({ link, type, text }: LinkButtonProps) => {
  if (link) {
    return (
      <Link className="btn-dark" href={link}>
        {text}
      </Link>
    );
  } else {
    return (
      <button className={css.btn} type={type}>
        {text}
      </button>
    );
  }
};
export default LinkButton;
