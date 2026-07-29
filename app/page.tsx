import css from './page.module.css';
import LinkButton from '@/components/LinkButton/LinkButton';

export default function Home() {
  return (
    <section className={css.hero}>
      <div className={'container ' + css.heroContainer}>
        <div className={css.heroContent}>
          <h1 className="homeTitle">Campers of your dreams</h1>
          <p className={'homeText ' + css.heroText}>
            You can find everything you want in our catalog
          </p>
        </div>
        <LinkButton link="/catalog" text="View Now" />
      </div>
    </section>
  );
}
