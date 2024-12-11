import bg from "../src/assets/bg.png";
import hero from "../src/assets/OBJECTS.png";
import { CiSearch } from "react-icons/ci";
import test from "../src/assets/online-test 1.png";
import exam from "../src/assets/exam 1.png";
import certificate from "../src/assets/certification 1.png";
import Lesson from "./components/Lesson";
function App() {
  // flex flex-col items-center justify-center
  return (
    <div className=" w-full h-auto ">
      <div className="lg:px-28 px-2 w-full bg-[#FDF8EE] lg:h-[710px] md:h-[500px] flex items-center ">
        <div
          className=" w-full pt-4 lg:h-[700px] md:h-[500px]  grid lg:grid-cols-2 md:grid-cols-2  sm:grid-cols-1 items-center justify-center "
          style={{
            backgroundImage: `url(${bg})`,
            backgroundSize: "contain",
            backgroundPosition: "center",
          }}
        >
          <div className=" w-full  lg:h-[443px] h-[300px] flex flex-col items-start justify-center ">
            <h1 className=" font-bold lg:text-6xl text-4xl ">
              The <span className=" text-orange-500 ">Smart</span> <br />
              Choice For <span className=" text-orange-500 ">Future</span>
            </h1>
            <p className=" py-5 ">
              Elearn is a global training provider based across the UK that
              specialises in accredited and bespoke training courses. We crush
              the...
            </p>
            <div className=" relative  w-full h-[60px] flex items-center justify-between bg-white rounded-full shadow-lg ">
              <div className=" w-full px-4 flex items-center justify-center  ">
                <CiSearch size={40} />
                <input
                  type="text"
                  className=" w-full h-[50px] focus:outline-none px-2 "
                />
                <button className=" rounded-full w-[158px] h-[50px] bg-[#4D2C5E] text-white ">
                  Continue
                </button>
              </div>
            </div>
          </div>
          <div className=" w-full lg:h-[443px] h-[300px] ">
            <img
              src={hero}
              alt="hero-image"
              className=" w-full h-full object-contain "
            />
          </div>
        </div>
      </div>
      {/* ============Hero banner============ */}
      <div className=" lg:px-28 px-2 py-10 w-full h-auto bg-white flex flex-col items-center ">
        <div className=" bg-[#4D2C5E] w-[80%] lg:h-[277px] h-auto rounded-2xl  grid lg:grid-cols-3 grid-cols-1 p-6 gap-10 text-white ">
          <div className=" w-full flex lg:flex-row md:flex-row landscape:flex-row flex-col items-center gap-3 ">
            <div className=" w-[60px] h-[60px] rounded-lg bg-[#FFFFFF33]  ">
              <img src={test} alt="test-mage" className=" w-full h-full p-2 " />
            </div>
            <div className=" w-full ">
              <h1 className=" font-bold text-xl ">Learn The Latest Skills</h1>
              <p className=" font-light ">
                Contrary to popular belief, Lorem Ipsum is not simply random
                text. It has roots in a BC, making it over 2000 years old.
              </p>
            </div>
          </div>
          <div className=" w-full flex lg:flex-row md:flex-row landscape:flex-row flex-col items-center gap-3 ">
            <div className=" w-[60px] h-[60px] rounded-lg bg-[#FFFFFF33]">
              <img src={exam} alt="exam-mage" className=" w-full h-full p-2 " />
            </div>
            <div className=" w-full ">
              <h1 className=" font-bold text-xl ">Get Ready For a Career</h1>
              <p className=" font-light ">
                Contrary to popular belief, Lorem Ipsum is not simply random
                text. It has roots in a BC, making it over 2000 years old.
              </p>
            </div>
          </div>
          <div className=" w-full flex lg:flex-row md:flex-row landscape:flex-row flex-col items-center gap-3 ">
            <div className=" w-[60px] h-[60px] rounded-lg bg-[#FFFFFF33]">
              <img
                src={certificate}
                alt="certificate-mage"
                className=" w-full h-full p-2 "
              />
            </div>
            <div className=" w-full ">
              <h1 className=" font-bold text-xl ">Earn a Certificate</h1>
              <p className=" font-light ">
                Contrary to popular belief, Lorem Ipsum is not simply random
                text. It has roots in a BC, making it over 2000 years old.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* ===============Lessson================= */}
      <Lesson />
      {/* ============buttom banner============ */}
      <div className=" lg:px-28 px-2 py-10 w-full h-auto bg-white flex flex-col items-center ">
        <div className=" bg-[#4D2C5E] text-white w-[80%] lg:h-[277px] h-auto rounded-2xl flex flex-col items-center justify-center p-5 gap-5 ">
          <h1 className=" font-bold lg:text-4xl text-xl ">
            Subscribe to our newsletter
          </h1>
          <p className="font-light">
            Lorem Ipsum is simply dummy text of the printing.
          </p>

          <div className=" relative lg:w-[600px] w-full px-4 flex items-center justify-center  ">
            {/* <CiSearch size={40} /> */}
            <input
              type="text"
              className=" w-[600px] h-[50px] focus:outline-none p-2 text-black rounded-full px-6 "
            />
            <button className=" absolute right-5 rounded-full w-[158px] h-[40px] bg-[#4D2C5E] text-white ">
              Continue
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
