import { Line } from "./line"
import { Step } from "./step"

export const Steps = () => {
    return (
        <div className="flex items-center justify-between w-[80vw] max-w-[368px]">
            <Step number="1"/>
            <Line/>
            <Step number="2"/>
            <Line/>
            <Step number="3"/>
        </div>
    )
}