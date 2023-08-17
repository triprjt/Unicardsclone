import React from "react";
import "./index.css";
import nx_wave_hero from "./images/nx_wave/nx_wave_hero.png";
import logo_uni_dbc4c88973 from "./images/logo_uni_dbc4c88973.png";
import nxt_wave_bg from "./videos/nxt_wave_bg.mp4";
import { useState } from "react";
function App() {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [isCheckboxChecked, setIsCheckboxChecked] = useState(false);
  const [isFormValid, setIsFormValid] = useState(false);

  const isPhoneNumberValid = phoneNumber.length === 10;

  const handlePhoneNumberChange = (e) => {
    const value = e.target.value;

    if (value.length <= 10 && (/^\d+$/.test(value) || value === "")) {
      setPhoneNumber(value);
      setIsFormValid(value.length === 10 && isCheckboxChecked);
    }
  };

  const [isInputVisible, setIsInputVisible] = useState(false);

  const handleApplyNowClick = () => {
    setIsInputVisible(true);
  };

  const handleCheckboxChange = (e) => {
    setIsCheckboxChecked(e.target.checked);
    setIsFormValid(phoneNumber.length === 10 && e.target.checked);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-1 flex justify-center items-center">
      <div className="relative h-[100vh] w-full flex items-center justify-center">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover z-[1]"
        >
          <source src={nxt_wave_bg} type="video/mp4" />
        </video>

        <div className="flex flex-col md:flex-row-reverse mx-auto max-w-[1280px] w-full justify-center z-1 bg-transparent">
          <img
            src={nx_wave_hero}
            alt="card_asset"
            className="h-auto w-[225px] md:w-[420px] md:h-[420px] max-w-[420px] z-[1] mx-6"
          />

          <div className="z-10 w-full mt-7 md:mt-0 md:my-auto flex flex-col self-end md:self-center px-6">
            <h1 className="font-normal max-w-[300px] md:max-w-[700px] text-3xl md:text-[3.4rem] md:leading-[54px] text-black md:mb-6">
              <span>
                <strong>NX Wave.</strong> The next-gen credit card for those who
                love rewards.
              </span>
            </h1>
            <div className="mt-4 md:mt-0">
              <p className="font-medium text-sm md:text-base md:mb-9">
                1% Cashback
                <svg
                  className="mx-[8px] mb-[2px] inline leading-5"
                  width="12"
                  height="12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="m6 0 1.273 4.727L12 6 7.273 7.273 6 12 4.727 7.273 0 6l4.727-1.273L6 0Z"
                    fill="#000"
                    style={{ mixBlendMode: "darken" }}
                  ></path>
                </svg>
                5x Rewards
                <svg
                  className="mx-[8px] mb-[2px] inline leading-5"
                  width="12"
                  height="12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="m6 0 1.273 4.727L12 6 7.273 7.273 6 12 4.727 7.273 0 6l4.727-1.273L6 0Z"
                    fill="#000"
                    style={{ mixBlendMode: "darken" }}
                  ></path>
                </svg>
                Zero Forex Markup
              </p>
            </div>
            <div className="hidden md:block">
              <div className="flex justify-between items-center max-w-[94vw]">
                <div className="flex flex-col">
                  <form>
                    <div className="flex bg-black p-1 pl-2 rounded-xl justify-between">
                      <div className="flex items-center">
                        <input
                          className="bg-black border-0 outline-none text-white p-1 placeholder-[#7E8587] w-44"
                          placeholder="Enter Phone Number"
                          value={phoneNumber}
                          onChange={handlePhoneNumberChange}
                        />
                        {phoneNumber &&
                          (isPhoneNumberValid ? (
                            <span className="text-green-500 ml-2">
                              &#x2714;
                            </span>
                          ) : (
                            <span className="text-red-500 ml-2">!</span>
                          ))}
                      </div>
                      <button
                        type="submit"
                        className={`text-center text-sm leading-7 justify-between pt-2 ml-2 bg-yellow-400 rounded-xl z-10 py-2 px-4 ${
                          !isFormValid ? "disabled:cursor-not-allowed" : ""
                        }`}
                        disabled={!isFormValid}
                      >
                        <span>Apply Now</span>
                      </button>
                    </div>
                  </form>

                  <div className="consent flex items-center py-4 px-2 max-w-xs">
                    <input
                      type="checkbox"
                      id="consent-msg"
                      checked={isCheckboxChecked}
                      onChange={handleCheckboxChange}
                      maxLength={10}
                    />
                    <label
                      htmlFor="consent-msg"
                      className="consent text-white md:text-black text-[10px] leading-3"
                    >
                      You agree to be contacted by Uni Cards over Call, SMS,
                      Email or WhatsApp to guide you through your application.
                    </label>
                  </div>
                </div>
              </div>
              <div className="flex hidden max-w-xs flex-col justify-start">
                <div className="w-full max-w-[300px]">
                  <a
                    href="https://uni-growth.onelink.me/v6cm/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block google-btn-2 font-medium p-4 rounded-lg z-10 bg-[#FDEF78] text-black -mt-2 disabled:bg-[#AEAB8C]"
                  >
                    <div className="w-full flex justify-center items-center">
                      <span>Download</span>
                    </div>
                  </a>
                </div>
                <div className="my-2">
                  <p className="text-white md:text-black text-[10px] leading-3">
                    Thank you for your interest in the Uni Card.
                    <br />
                    Download the Uni Cards app now and get your Uni Card in
                    minutes.
                  </p>
                </div>
              </div>
            </div>

            <div className="md:hidden">
              {!isInputVisible ? (
                <button
                  onClick={handleApplyNowClick}
                  className="w-full text-center text-sm leading-7 justify-between pt-2 bg-yellow-400 rounded-xl z-10 py-2 px-4"
                >
                  Apply Now
                </button>
              ) : (
                <div>
                  {/* The input and checkbox components */}
                  <form>
                    <div className="flex bg-black p-1 pl-2 rounded-xl justify-between">
                      <div className="flex items-center w-full">
                        <input
                          className="bg-black border-0 outline-none text-white p-1 placeholder-[#7E8587] w-full"
                          placeholder="Enter Phone Number"
                          value={phoneNumber}
                          onChange={handlePhoneNumberChange}
                        />
                        {phoneNumber &&
                          (isPhoneNumberValid ? (
                            <span className="text-green-500 ml-2">
                              &#x2714;
                            </span>
                          ) : (
                            <span className="text-red-500 ml-2">!</span>
                          ))}
                      </div>
                    </div>
                  </form>

                  <div className="consent flex items-center py-4 px-2">
                    <input
                      type="checkbox"
                      id="consent-msg"
                      checked={isCheckboxChecked}
                      onChange={handleCheckboxChange}
                      maxLength={10}
                    />
                    <label
                      htmlFor="consent-msg"
                      className="consent text-white text-[10px] leading-3"
                    >
                      You agree to be contacted by Uni Cards over Call, SMS,
                      Email or WhatsApp to guide you through your application.
                    </label>
                  </div>

                  <div className="w-full max-w-[300px]">
                    <a
                      onClick={(e) => {
                        setPhoneNumber(e.target.value);
                      }}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block google-btn-2 font-medium p-4 rounded-lg z-10 bg-[#FDEF78] text-black -mt-2 disabled:bg-[#AEAB8C]"
                    >
                      <div className="w-full flex justify-center items-center">
                        <span>Apply Now</span>
                      </div>
                    </a>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
