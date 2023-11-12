import {FC} from "react";

interface CircleProps {
    colour: string;
    pct: number;
}

interface TextProps {
    percentage: number;
}

interface ProgressCircleProps {
    percentage: number;
    colour: string;
}

const cleanPercentage = (percentage: number): number => {
    const tooLow = !Number.isFinite(+percentage) || percentage < 0;
    const tooHigh = percentage > 100;
    return tooLow ? 0 : tooHigh ? 100 : +percentage;
};

const Circle: FC<CircleProps> = ({colour, pct}) => {
    const r = 70;
    const circ = 2 * Math.PI * r;
    const strokePct = ((100 - pct) * circ) / 100;
    return (
        <circle r={r} cx={100} cy={100} fill="transparent" stroke={strokePct !== circ ? colour : ""}
                strokeWidth={"2rem"} strokeDasharray={circ} strokeDashoffset={pct ? strokePct : 0}
                strokeLinecap="round">
        </circle>
    );
};

const Text: FC<TextProps> = ({percentage}) => {
    return (
        <text x="50%" y="50%" dominantBaseline="central" textAnchor="middle" fontSize={"1.5em"}>
            {percentage.toFixed(0)}%
        </text>
    );
};

export const ProgressCircle: FC<ProgressCircleProps> = ({percentage, colour}) => {
    const pct = cleanPercentage(percentage);
    return (
        <svg width={200} height={200}>
            <g transform={`rotate(-90 ${"100 100"})`}>
                <Circle colour="lightgrey" pct={0}/>
                <Circle colour={colour} pct={pct}/>
            </g>
            <Text percentage={pct}/>
        </svg>
    );
};
