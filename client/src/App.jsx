import "./App.css";
import img1 from "./assets/img1.jpg";
import logo from "./assets/logo.png";
import lines from "./assets/lines.png"

function App() {
  return (
    <div className="relative">
      <img src={lines} className="absolute bottom-0 left-0" alt="lines" />
    <div className="flex items-center justify-center h-screen ">
      
      <div className="card card-side shadow-xl flex">
        <figure className="flex-none object-cover">
          <img src={img1} alt="Album" className="object-cover" />
        </figure>
        <div className="card-body bg-[#003d99] p-5">
          <figure className="w-80 h-20 mx-5">
            <img src={logo} alt="logo" className="w-full h-full object-cover" />
          </figure>
          <h2 className="card-title text-white font-bold mt-3 text-lg">Sign In</h2>
          <form class="max-w-sm mx-auto mt-5">
            <div className="mb-4">
              <label
                for="userID"
                class="block mb-2 text-sm font-medium text-white dark:text-white"
              >
                User ID
              </label>
              <input
                type="email"
                id="userID"
                class=" border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-700 focus:border-red-700 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 bg-slate-200"
                placeholder="Email or mobile number"
                required
              />
            </div>
            <div className="mb-4">
              <label
                for="password"
                class="block mb-2 text-sm font-medium text-white dark:text-white"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                class="bg-slate-200 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-700 focus:border-red-700 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 "
                placeholder="Minimun 6 characters"
                required
              />
            </div>
            <div className="flex justify-between">
              <a className="text-white link link-hover">Forgot Password ?</a>
              <button
                type="submit"
                class="text-white bg-blue-500 hover:bg-blue-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Submit
              </button>
            </div>
          </form>
          <div className="flex gap-3 mt-1 justify-center">
            <div className="divider"></div>
            <h1 className="text-white font-thin text-sm">Or Sign In With</h1>
            <div className="divider"></div>
          </div>
          <div className="flex justify-center ">
            <button className="btn btn-square">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="100"
                height="50"
                viewBox="0 0 48 48"
              >
                <path
                  fill="#FFC107"
                  d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
                ></path>
                <path
                  fill="#FF3D00"
                  d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
                ></path>
                <path
                  fill="#4CAF50"
                  d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"
                ></path>
                <path
                  fill="#1976D2"
                  d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"
                ></path>
              </svg>
            </button>
            <button className="btn btn-square">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="100"
                height="65"
                viewBox="0 0 48 33"
              >
                <path d="M15,3C8.373,3,3,8.373,3,15c0,6.016,4.432,10.984,10.206,11.852V18.18h-2.969v-3.154h2.969v-2.099c0-3.475,1.693-5,4.581-5 c1.383,0,2.115,0.103,2.461,0.149v2.753h-1.97c-1.226,0-1.654,1.163-1.654,2.473v1.724h3.593L19.73,18.18h-3.106v8.697 C22.481,26.083,27,21.075,27,15C27,8.373,21.627,3,15,3z"></path>
              </svg>
            </button>
          </div>
          <div className="flex gap-3">
            <h1 className="text-white">Don't have an account?</h1>
              <a className="text-[#17a2b8] link link-hover">Register</a>
            </div>
        </div>
      </div>
    </div>
    </div>
  );
}

export default App;
