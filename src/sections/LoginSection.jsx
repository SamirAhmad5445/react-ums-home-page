import { LoginFormImage } from "../assets";
import Button from "../components/Button";

const LoginSection = () => {
  return (
    <section
      id="loginSection"
      className="max-w-[1200px] mx-auto pt-16 px-4 flex max-lg:flex-col justify-center items-center gap-4 lg:gap-8 overflow-hidden"
    >
      <img src={LoginFormImage} alt="" className="max-w-[470px]" />
      <div className="flex-1 px-6">
        <h2 className="text-5xl text-dark font-medium py-8">Login</h2>
        <form className="grid grid-cols-1 gap-4">
          <label htmlFor="college">College</label>
          <input
            id="college"
            type="text"
            placeholder="Faculty Of Science"
            className="border border-primary-200 rounded-md shadow-md py-1.5 px-3 focus:outline-0 focus:shadow-[0_0_1rem_0.0625rem] focus:shadow-primary-300"
          />

          <label htmlFor="username">User Name</label>
          <input
            id="username"
            type="text"
            placeholder="User Name"
            className="border border-primary-200 rounded-md shadow-md py-1.5 px-3 focus:outline-0 focus:shadow-[0_0_1rem_0.0625rem] focus:shadow-primary-300"
          />

          <label htmlFor="">Password</label>
          <input
            type="Password"
            placeholder="Password"
            className="border border-primary-200 rounded-md shadow-md py-1.5 px-3 focus:outline-0 focus:shadow-[0_0_1rem_0.0625rem] focus:shadow-primary-300"
          />

          <div className="py-4">
            <div className="grid mx-auto max-w-[min(300px,100%)]">
              <Button>Login</Button>
            </div>
          </div>

          <div className="flex items-center">
            <input
              type="checkbox"
              id="remember"
              className="accent-primary-400 mr-1"
            />
            <label htmlFor="remember">Remember me</label>
          </div>
        </form>
        <div className="flex justify-between gap-4 flex-wrap mt-8 text-dark">
          <a href="/" className="hover:text-accent">
            Can&apos;t Login ? Contact Technical Support
          </a>
          <a href="/" className="hover:text-accent">
            Can&apos;t Remember Your Password?
          </a>
        </div>
      </div>
    </section>
  );
};

export default LoginSection;
