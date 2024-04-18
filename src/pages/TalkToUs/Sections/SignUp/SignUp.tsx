import SignUpForm from "@/components/Forms/SignUp/SignUp";
import styles from "./sign-up.module.css";

const SignUpSection = () => {
  return (
    <div className={styles["sign-up-section"]}>
      <div className={styles["sign-up-section-heading"]}>
        <div className={styles["sign-up-section-heading-content"]}>
          <span className={styles["sign-up-section-heading-content-preview"]}>
            TALK TO US
          </span>
          <span className={styles["sign-up-section-heading-content-title"]}>
            Sign up for a talk with us
          </span>
        </div>
        <span className={styles["sign-up-section-heading-tip"]}>
          Looking for a solution for measuring or reporting sustainability
          impact? Book a call with us - tell us about your needs, and
          requirements
        </span>
      </div>
      <SignUpForm />
    </div>
  );
};

export default SignUpSection;