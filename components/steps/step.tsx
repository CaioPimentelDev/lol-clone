interface StepProps{
    number: string
}

export const Step = ({number}: StepProps) => {
    return (
        <div className="relative w-[27px] h-[27px] my-[30px]">
                <div className="before:absolute before:h-[7px] before:w-[7px] before:top-[-70%] before:left-[38%] before:bg-[#997338] before:rounded-[50%] absolute top-[100%] left-[-60%] whitespace-nowrap text-[#c4b998]  after:absolute after:h-[13px] after:w-[13px] after:top-[-83%] after:left-[33%]  after:border after:border-solid after:border-[#997338] after:rounded-[50%]">
                    <span className="opacity-[.3] text-[14px]">{number}º PASSO</span>
                </div>
            </div>
    )
}