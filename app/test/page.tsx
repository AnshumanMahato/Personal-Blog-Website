function Test() {
  return (
    <div className="w-[1200px] h-[600px]">
      <div className="flex items-center justify-center w-full h-full relative">
        <img
          src={`/assets/images/blogcover1.jpg`}
          className="w-full h-full absolute inset-0"
          alt={"test"}
          style={{ objectFit: "cover", objectPosition: "center" }}
        />
        <div className="flex absolute w-[360px] h-[300px] top-0 left-0 z-10 drop-shadow-xl ">
          <div
            className="flex w-[360px] h-[300px]"
            style={{
              padding: "5rem",
              clipPath: "polygon(0 0, 100% 0, 0 100%)",
              backgroundImage:
                "linear-gradient(to right, #17c964 0%, #45d483 100%)",
            }}
          ></div>
        </div>
        <div className="flex absolute w-[360px] h-[300px] bottom-0 right-0 z-10 -drop-shadow-xl ">
          <div
            className="flex absolute w-[360px] h-[300px]"
            style={{
              padding: "5rem",
              clipPath: "polygon(100% 0, 100% 100%, 0 100%)",
              backgroundImage:
                "linear-gradient(to right, #17c964 0%, #45d483 100%)",
            }}
          ></div>
        </div>
        <div className="flex shadow-2xl shadow-black/40 absolute bg-white/90 p-[5rem] rounded-[5rem] h-[450px] w-[1050px] justify-center items-center text-center">
          <h1 className="text-black font-light text-[36px] leading-[200%]">
            Blogs tagged with
            <br />
            <span className="text-[#17c964] text-[72px] font-medium">
              #Tagname
            </span>
          </h1>
        </div>
      </div>
    </div>
  );

  // return (
  //   <div className="w-[1200px] h-[600px]">
  //     <div className="flex items-center bg-white justify-start w-full h-full relative">
  //       <div className="h-full w-[700px] p-[75px]">
  //         <h1 className="text-black text-[48px] leading-[200%]">
  //           Blogs tagged with
  //           <br />
  //           <span className="text-[#17c964] text-[128px]">#Tagname</span>
  //         </h1>
  //       </div>
  //     </div>
  //   </div>
  // );
}

export default Test;
