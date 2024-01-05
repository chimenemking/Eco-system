'use client'

import React from 'react'
import { Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'

type Props = {}

const salesData = [
    {
      name: 'Jan',
      revenue: 4000,
      profit: 2400,
    },
    {
      name: 'Feb',
      revenue: 3000,
      profit: 1398,
    },
    {
      name: 'Mar',
      revenue: 9800,
      profit: 2000,
    },
    {
      name: 'Apr',
      revenue: 3908,
      profit: 2780,
    },
    {
      name: 'May',
      revenue: 4800,
      profit: 1890,
    },
    {
      name: 'Jun',
      revenue: 3800,
      profit: 2390,
    },
  ];
  

const BarChartComponent = (props: Props) => {
  return (
    <>
    <ResponsiveContainer width="100%" height="100%">
        <BarChart width={500} height={400} data={salesData} margin={{right: 30}}>
          <YAxis/>
          <XAxis dataKey="name"/>
          <CartesianGrid strokeDasharray="5 5"/>

          <Tooltip content={<CustomTooltip/>}/>
          <Legend/>
          <Bar
            type="monotone"
            dataKey="revenue"
            stroke="#2563eb"
            fill="#3b82f6"
            stackId={1}
          />

          <Bar
            type="monotone"
            dataKey="profit"
            stroke="#7c3aed"
            fill="#9b82f6"
            stackId={1}
          />
        </BarChart>
      </ResponsiveContainer>
    </>
  );
};

// to use our customtooltip, we need to pass it to the tooltip component above as a prop

//active indicates if the tooltip is active or not,
//payload is an array of objects that contains the data for the tool tip
//label is the label of the data point.

const CustomTooltip: React.FC<any> = ({active, payload, label}) =>{
    if (active && payload && payload.length){
        return(
            <div className="p-4 bg-slate-900 flex flex-col gap-4 rounded-md">
                <p className="text-medium text-lg">{label}</p>
                <p className="text-sm text-blue-400">
                    Product 1:
                <span className="ml-2">${payload[0].value}</span>
                </p>
                <p className="text-sm text-indigo-400">
                    product 2:
                <span className="ml-2">${payload[1].value}</span>
                </p>
            </div>
        )
    }
}

export default BarChartComponent