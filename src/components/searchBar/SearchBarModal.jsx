
const SearchBarModal = ({ visible }) => {
  return (
    <div
      className={`${
        visible == true ? "opacity-100" : "opacity-0  pointer-events-none"
      } transition ease-in-out duration-300  absolute w-screen h-[calc(100vh-76px)] bg-[#3d3d3dcb] z-20 md:hidden`}
    >
      <div
        className={`bg-[#EEF2F6] flex flex-col justify-center w-full h-[150px] rounded-b-lg transition ease-in-out duration-300 ${
          visible == true ? "translate-y-0" : "-translate-y-[150px]"
        } z-20`}
      >
        <div className="flex flex-col gap-3 px-10">
          <div className="relative">
            <svg
              className="absolute top-[25%] left-2"
              width="19"
              height="19"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15.25 15.625L11.8062 12.1812M13.6667 7.70833C13.6667 11.2061 10.8311 14.0417 7.33333 14.0417C3.83553 14.0417 1 11.2061 1 7.70833C1 4.21053 3.83553 1.375 7.33333 1.375C10.8311 1.375 13.6667 4.21053 13.6667 7.70833Z"
                stroke="#BDBDBD"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>

            <input
              className="indent-7 border border-[#F8D5A2] rounded-xl p-[6px] w-full"
              type="text"
              name=""
              id=""
              placeholder="cargo, profissão e etc"
            />
          </div>
          <div className="relative">
            <svg
              className="absolute top-[25%] left-2"
              width="17"
              height="20"
              viewBox="0 0 14 17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M13 7.13636C13 11.9091 7 16 7 16C7 16 1 11.9091 1 7.13636C1 5.5089 1.63214 3.94809 2.75736 2.7973C3.88258 1.64651 5.4087 1 7 1C8.5913 1 10.1174 1.64651 11.2426 2.7973C12.3679 3.94809 13 5.5089 13 7.13636Z"
                stroke="#BDBDBD"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M7 9.18182C8.10457 9.18182 9 8.26604 9 7.13636C9 6.00669 8.10457 5.09091 7 5.09091C5.89543 5.09091 5 6.00669 5 7.13636C5 8.26604 5.89543 9.18182 7 9.18182Z"
                stroke="#BDBDBD"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>

            <input
              className="indent-7 border border-[#F8D5A2] rounded-xl p-[6px] w-full"
              type="text"
              name=""
              id=""
              placeholder="cidade"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default SearchBarModal;
