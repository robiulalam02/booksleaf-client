import React from 'react';
import { PieChart, Pie, Sector, Cell, ResponsiveContainer, Tooltip, Legend } from 'recharts';

const CategoryPiechart = ({ chartData }) => {
    // Color palette
    const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

    // const RADIAN = Math.PI / 180;
    // const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
    //     const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    //     const x = cx + radius * Math.cos(-midAngle * RADIAN);
    //     const y = cy + radius * Math.sin(-midAngle * RADIAN);

        return (
            <div className='h-[400px] w-[400px] flex items-center justify-center'>
                <PieChart height={400} width={400}>
                    <Pie
                        data={chartData}
                        labelLine={false}
                        cx="50%"
                        cy="50%"
                        outerRadius={80}
                        fill="#8884d8"
                        dataKey="count"
                        nameKey="category"
                        label={({ payload }) => String(payload.count).padStart(2, '0')} 
                    >
                        {chartData.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                    </Pie>
                    <Tooltip />
                    <Legend />
                </PieChart>
            </div>
        );
    };

    export default CategoryPiechart;