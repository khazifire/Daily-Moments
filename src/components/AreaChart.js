import React from "react";
import { AreaChart, Area, YAxis, XAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

class AreaRechartComponent extends React.Component {

    data = [
        {
            "name": "11 November 2020",
            "Clocked In": 1
            
        },
        {
            "name": "12 Novermber 2020",
            "Clocked In": 5
            
        },
        {
            "name": "13 November 2020",
            "Clocked In": 7
   
        },
        {
            "name": "14 November 2020",
            "Clocked In": 3
       
        },
        {
            "name": "15 November 2020",
            "Clocked In": 4
      
        }
    ]

    render() {
        return (
            <AreaChart width={1200} height={250} data={this.data}
                margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                <defs>
                    <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
                        <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
                    </linearGradient>
                    <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
                        <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
                    </linearGradient>
                </defs>
                <XAxis dataKey="name" />
                <YAxis />
                <CartesianGrid strokeDasharray="3 3" />
                <Tooltip />
                <Legend />
                <Area type="monotone" dataKey="Clocked In" stroke="#8884d8" fillOpacity={1} fill="url(#colorUv)" />
                {/* <Area type="monotone" dataKey="Procuct B" stroke="#82ca9d" fillOpacity={1} fill="url(#colorPv)" /> */}
            </AreaChart>
        )
    };
}

export default AreaRechartComponent;
