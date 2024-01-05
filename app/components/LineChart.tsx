'use client'

import React from 'react'
import {LineChart, Line, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis} from 'recharts'

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
  


const LineChartComponent = (props: Props) => {
  return (
    <>
        <ResponsiveContainer width="100%" height="100%">
        <LineChart width={500} height={400} data={salesData} margin={{right: 30}}>
          <YAxis/>
          <XAxis dataKey="name"/>
          <CartesianGrid strokeDasharray="5 5"/>

          <Tooltip content={<CustomTooltip/>}/>
          <Legend/>
          <Line
            type="monotone"
            dataKey="revenue"
            stroke="#2563eb"
            fill="#3b82f6"
           
          />

          <Line
            type="monotone"
            dataKey="profit"
            stroke="#7c3aed"
            fill="#9b82f6"
          
          />
        </LineChart>
      </ResponsiveContainer>
    </>
  )
}

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
};

export default LineChartComponent