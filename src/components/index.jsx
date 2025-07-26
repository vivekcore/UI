import { Data } from "../data";
function MyPage() {
    return(
       <div className=" bg-[#e9feff] flex justify-center items-center p-3 font-MyFont">
  <div className="flex md:flex-row flex-col justify-center items-center shadow-2xl rounded-4xl">
    <div className="p-10 rounded-4xl text-white bg-gradient-to-b from-[hsl(252,100%,67%)]  to-[hsl(241,81%,54%)] flex flex-col items-center">
      <div >
        <p className="text-2xl opacity-80">Your Result</p>
      </div>
      <div className="my-10 flex flex-col items-center justify-center h-[200px] w-[200px] rounded-full bg-gradient-to-b from-[hsla(256,72%,46%,1)] to-[hsla(241,72%,46%,0.01)]">
        <p className="text-6xl font-bold">76</p>
        <p className="p-3 opacity-50">of 100</p>
      </div>
      <div>
        <p className="mb-5 text-2xl font-bold">Great</p>
      </div>
      <div>
        <p className="text-center w-[220px]">
          You scored higher than 65% of the people who have taken these tests.
        </p>
      </div>
    </div>
    <div className="p-10 flex flex-col gap-12">
        <div>
            <p className="text-2xl font-bold">Summary</p>
        </div>
        <div className="flex flex-col gap-5  ">
            
            <div className="rounded-2xl bg-[hsla(0,100%,67%,0.09)] flex py-3 px-3 font-base gap-16 justify-between ">
                 <div className="flex gap-2 items-center">
                    <img src="https://raw.githubusercontent.com/vivekcore/my-assests/refs/heads/main/icon-reaction.svg"></img>
                    <p className="font-semibold text-[hsl(0,100%,67%)]">Reaction</p>
                </div>
                <p>
                     <span className="font-bold text-[#303b5a]">80</span><span className="opacity-70">/100</span>
                </p>
            </div>

            <div className="rounded-2xl bg-[hsla(39,100%,56%,0.09)] flex py-3 px-3 font-base gap-16 justify-between ">
                 <div className="flex gap-2 items-center">
                    <img src="https://raw.githubusercontent.com/vivekcore/my-assests/refs/heads/main/icon-memory.svg"></img>
                    <p className="font-semibold text-[hsl(39,100%,56%)]">Memory</p>
                </div>
                <p>
                     <span className="font-bold text-[#303b5a]">92</span><span className="opacity-70">/100</span>
                </p>
            </div>

             <div className="rounded-2xl bg-[hsla(166,100%,37%,0.09)] flex py-3 px-3 font-base gap-16 justify-between ">
                 <div className="flex items-center gap-2">
                    <img src="https://raw.githubusercontent.com/vivekcore/my-assests/refs/heads/main/icon-verbal.svg"></img>
                    <p className="font-semibold text-[hsl(166,100%,37%)]">Verbal</p>
                </div>
                <p>
                     <span className="font-bold text-[#303b5a]">61</span><span className="opacity-70">/100</span>
                </p>
            </div>
         <div className=" rounded-2xl bg-[hsla(234,85%,45%,0.09)] flex py-3 px-3 font-base gap-16 justify-between ">
                 <div className="flex gap-2 items-center">
                    <img src="https://raw.githubusercontent.com/vivekcore/my-assests/refs/heads/main/icon-visual.svg"></img>
                    <p className="font-semibold text-[hsl(234,85%,45%)]">Visual</p>
                </div>
                <p>
                     <span className="font-bold text-[#303b5a]">80</span><span className="opacity-70">/100</span>
                </p>
            </div>
            
        </div>
        <div>
            <button className="font-semibold text-[18px] hover:scale-[1.03] cursor-pointer active:scale-[0.96] transition-all duration-300 rounded-3xl border-0 text-white py-2 px-18 ml-2 text-center bg-[#303b5a]">Continue</button>
        </div>
    </div>
  </div>
</div>
    )
}

export default MyPage;

