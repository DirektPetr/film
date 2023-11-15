import main from './../Main/Main.module.css';

export const Main = () => {
  return (
    <section className={main.main}>
      <div className={main.main__content__left}>
        <h2 className={main.film__title}>МОНСТР</h2>
        <div className={main.film__overview}>Ужасы. 2023 год. USA</div>
        <div className={main.film__content}>
          Группа дайверов, искателей кладов,
          отправляется к Индийскому океану.
          В надежде найти древние сокровища...
        </div>
        <button className={main.button__film}>Смотреть</button>
      </div>
      <div className={main.main__content__right}>
        <button className={main.button__next}>Случайный фильм</button>
      </div>
    </section>
  )
}
