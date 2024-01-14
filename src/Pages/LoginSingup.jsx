import style from "./CSS/LoginSingup.module.css";

const LoginSingup = () => {
  return (
    <div className={style.loginsingup}>
      <div className={style["loginsingup-container"]}>
        <h1>Sing Up</h1>
        <div className={style["loginsingup-fields"]}>
          <input type="text" placeholder="Your Name" />
          <input type="email" placeholder="Your E-Mail" />
          <input type="password" placeholder="Your Password" />
        </div>
        <button>Continue</button>
        <p className={style["loginsingup-login"]}>
          Already Have An Account? <span>Login Here</span>
        </p>
        <div className={style["loginsingup-agree"]}>
          <input type="checkbox" />
          <p>By Continuing , i agree to the term of use & privacy police.</p>
        </div>
      </div>
    </div>
  );
};

export default LoginSingup;
