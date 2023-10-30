import style from "./NewsLetter.module.css";

const NewsLetter = () => {
  return (
    <div className={style.newsLetter}>
      <h1>Get Exclusive Email On Your E-Mail</h1>
      <p>Subscribe to our newsLetter and stay updated </p>
      <div>
        <input type="email" placeholder="Your E-Mail id" />
        <button>Subscribe</button>
      </div>
    </div>
  );
};

export default NewsLetter;
