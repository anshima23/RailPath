export default function Tags() {
  return (
    <div className="flex flex-col box-sizing-border">
      <div className="m-[0_0_0.9rem_0] inline-block self-start break-words font-['Josefin_Sans'] font-[var(--h-43125-px-font-weight,700)] text-[2rem] leading-[var(--h-43125-px-line-height,1.512)] var(--h-43125-px-text-transform, uppercase) text-[var(--text,#232233)]">
      Tags
      </div>
      <div className="flex flex-col w-[100%] box-sizing-border">
        <div className="m-[0_0_1.1rem_0] flex flex-row justify-between w-[100%] box-sizing-border">
          <span className="m-[0_0.9rem_0_0] w-[10.3rem] break-words font-['Josefin_Sans'] font-semibold text-[1.3rem] underline leading-[1.5] uppercase text-[var(--text,#232233)]">
          ecommers app
          </span>
          <span className="break-words font-['Josefin_Sans'] font-semibold text-[1.3rem] underline leading-[1.5] uppercase text-[var(--text,#232233)]">
          Music app
          </span>
        </div>
        <div className="flex flex-row justify-between self-start w-[15.8rem] box-sizing-border">
          <span className="m-[0_0.9rem_0_0] w-[6.4rem] break-words font-['Josefin_Sans'] font-semibold text-[1.3rem] underline leading-[1.5] uppercase text-[var(--text,#232233)]">
          bank app
          </span>
          <span className="break-words font-['Josefin_Sans'] font-semibold text-[1.3rem] underline leading-[1.5] uppercase text-[var(--text,#232233)]">
          social app
          </span>
        </div>
      </div>
    </div>
  )
}