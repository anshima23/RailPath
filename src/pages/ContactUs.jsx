export default function ContactUs() {
  return (
    <div className="rounded-[1.9rem] bg-[#FFFFFF] flex flex-row justify-between p-[3.6rem_0_3.5rem_3.1rem] w-[73.1rem] box-sizing-border">
      <div className="m-[0.5rem_0_0.6rem_0] flex flex-row box-sizing-border">
        <div className="rounded-[3.1rem] bg-[#5956E9] relative m-[0_1.1rem_0_0] flex p-[2.2rem_0_2rem_0.2rem] w-[6.3rem] h-[6.3rem] box-sizing-border">
          <div className="flex w-[2.7rem] h-[2.7rem] box-sizing-border">
            <img className="w-[2.3rem] h-[2.1rem]" />
          </div>
        </div>
        <div className="m-[2.4rem_0_1.5rem_0] inline-block break-words font-['Josefin_Sans'] font-semibold text-[1.6rem] leading-[1.5] lowercase text-[var(--text,#232233)]">
        info@youremail.com
        </div>
      </div>
      <div className="flex flex-row box-sizing-border">
        <div className="bg-[#6C6C72] m-[0_2.9rem_0_0] w-[7.3rem] h-[0rem]">
        </div>
        <div className="m-[0.5rem_0_0.6rem_0] flex flex-row box-sizing-border">
          <div className="rounded-[3.1rem] bg-[#5956E9] relative m-[0_1.1rem_0_0] flex p-[2.2rem_0_2rem_0.2rem] w-[6.3rem] h-[6.3rem] box-sizing-border">
            <div className="flex w-[2.7rem] h-[2.7rem] box-sizing-border">
              <img className="w-[2.1rem] h-[2.1rem]" />
            </div>
          </div>
          <div className="m-[2.4rem_0_1.5rem_0] inline-block break-words font-['Josefin_Sans'] font-semibold text-[1.6rem] leading-[1.5] text-[var(--text,#232233)]">
          +880 321 655 9985
          </div>
        </div>
      </div>
    </div>
  )
}