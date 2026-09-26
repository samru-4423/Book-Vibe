import React from 'react';
import {
    ResponsiveContainer,
    ComposedChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
} from "recharts";

const data = [
    {
        name: "The Great Gatsby",
        pages: 192,
        color: "#1685E8",
    },
    {
        name: "To kill a mocking bird",
        pages: 281,
        color: "#10BFA5",
    },
    {
        name: "1984",
        pages: 328,
        color: "#FFB923",
    },
    {
        name: "The Alchemist",
        pages: 177,
        color: "#FF7B45",
    },
    {
        name: "Pride and prejudice",
        pages: 279,
        color: "#FF0000",
    },
];

// Custom teardrop shape
const CustomShape = (props) => {
    const { x, y, width, height, payload } = props;

    const center = x + width / 2;
    const bottom = y + height;

    // Width of the shape at the bottom
    const bottomWidth = width * 0.9;

    const left = center - bottomWidth / 2;
    const right = center + bottomWidth / 2;

    const path = `
    M ${center} ${y}
    
    C ${center - 2} ${y + height * 0.15},
      ${center - width * 0.08} ${y + height * 0.45},
      ${left} ${bottom - 8}
      
    C ${left + width * 0.08} ${bottom - 2},
      ${left + width * 0.25} ${bottom},
      ${center} ${bottom}
      
    C ${right - width * 0.25} ${bottom},
      ${right - width * 0.08} ${bottom - 2},
      ${right} ${bottom - 8}
      
    C ${center + width * 0.08} ${y + height * 0.45},
      ${center + 2} ${y + height * 0.15},
      ${center} ${y}
      
    Z
  `;

    return (
        <g>
            <path
                d={path}
                fill={payload.color}
            />

            {/* Value above the shape */}
            <text
                x={center}
                y={y - 10}
                textAnchor="middle"
                fill={payload.color}
                fontSize="11"
                fontWeight="600"
            >
                {payload.pages}
            </text>
        </g>
    );
};

const BookChart = () => {
    return (
        <div className="w-full h-[420px]">
            <ResponsiveContainer width="100%" height="100%">
                <ComposedChart
                    data={data}
                    margin={{
                        top: 40,
                        right: 40,
                        left: 25,
                        bottom: 45,
                    }}
                >
                    <CartesianGrid
                        stroke="#dddddd"
                        strokeDasharray="3 3"
                        vertical={true}
                        horizontal={true}
                    />

                    <XAxis
                        dataKey="name"
                        axisLine={false}
                        tickLine={false}
                        tick={{
                            fill: "#888",
                            fontSize: 10,
                        }}
                        interval={0}
                    />

                    <YAxis
                        domain={[0, 340]}
                        ticks={[0, 85, 170, 255, 340]}
                        axisLine={false}
                        tickLine={false}
                        tick={{
                            fill: "#888",
                            fontSize: 10,
                        }}
                    />

                    <Bar
                        dataKey="pages"
                        barSize={75}
                        shape={<CustomShape />}
                        isAnimationActive={false}
                    />
                </ComposedChart>
            </ResponsiveContainer>
        </div>
    );
};

export default BookChart;