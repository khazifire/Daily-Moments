import React from "react";
import {
    ResponsiveContainer,
    LineChart,
    Line,
    XAxis,
    YAxis,
    ReferenceLine, CartesianGrid
}   from 'recharts';
import { countDay } from '.calculation.js';
import dayjs from 'dayjs';
import './MangoChart.css';
import { countDaySeries } from "./calculation";
import { render } from "react-dom";

function formateDate(isoString) {
    return dayjs(isoString).format("DD MM");
}

function MangoChart({ startDay, endDay, size}) {
    const beginDay = dayjs(startDay).substract(15,'days').isostring();
    const data = countDaySeries(startDay, endDay, 10)
    .map((item) => ({...item, date: formateDate(item.date) }));

    render() 
            return (
                <ResponsiveContainer classname="mango-chart" width='100%' height={200}>
                    <LineChart data={data}>
                        <ReferenceLine x={data[10].date} />
                        <CartesianGrid vertical={false} strokeDasharray="3 3"/>
                        <XAxis dataKey="date" ticks={[data[3].date, data[15].date, data[27].date]}/>

                        <Line type="natural" dot={false} dataKey="workDay" classname="workDay" />
                    </LineChart>
                </ResponsiveContainer>
        )
    };

export default MangoChart;