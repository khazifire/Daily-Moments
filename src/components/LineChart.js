import React from "react";
import { LineChart, Line, YAxis, XAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

class LineRechartComponent extends React.Component {

    data = [
        {
            "Date": "04 Nov 2020",
            "Hours Work": 3,
         
        },
        {
            "Date": "05 Nov 2020",
            "Hours Work": 8,
         
        },
        {
            "Date": "06 Nov 2020",
            "Hours Work": 1,
         
        },
        {
            "Date": "07 Nov 2020",
            "Hours Work": 7,
         
        },
        {
            "Date": "08 Nov 2020",
            "Hours Work": 4,
         
        },
       
        
    ]

    render() {
        return (
            <LineChart width={1000} height={300} data={this.data}
                margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="Date" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="Hours Work" stroke="#0095FF" />
           
            </LineChart>
        )
    };
}

export default LineRechartComponent;