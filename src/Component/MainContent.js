import Footer1 from "./Footer1";
import Nav from "./Nav";
export default function MainContent() {
  return (
    <>
      <Nav></Nav>
      <h1 className="text-center font-bold md:text-3xl text-black">
        Please verify your email...
      </h1>
      <div className="flex justify-center">
        <img
          src="./images/email.jpeg"
          alt="email"
          className="px-10 py-10 md:px-15 md:py-15"
        />
      </div>
      <p className="text-center mt-2">
        Please verify your email address. We've sent a confirmation email to:
      </p>
      <p className="text-center font-bold mt-4">account@refero.design</p>
      <p className="text-center mt-2">
        Click the confiramtion link in the email to begin using Dribble
      </p>
      <p className="text-center mt-2">
        Didn't receive the email?Check you Spam folder,it may have been caught
        by a filter.<br></br>If you still don't see it,you can
        <span className="text-pink-500">
          <a href="#"> resend the confiramtion email.</a>
        </span>
      </p>
      <p className="text-center mt-4">
        Wrong Email address?
        <span className="text-center text-pink-500">
          <a href="#">Change it</a>
        </span>
      </p>
      <Footer1 />
    </>
  );
}
