import css from "./HomePage.module.css";

const HomePage = () => {
    return (
        <div className={css["page"]}>
            <h1 className={css["title"]}>Task manager welcome page{' '}
          <span role="img" aria-label="Greeting icon">
            💁‍♀️
          </span></h1>
        </div>
    )
};

export default HomePage;