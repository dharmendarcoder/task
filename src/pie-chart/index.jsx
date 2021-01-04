import React from "react";
import Chart from "react-google-charts";

const data = [
  {
    city: "Mumbai",
    state: "Maharastra",
    people: { male: 2000, female: 2200 },
  },
  {
    city: "Patna",
    state: "Bihar",
    people: { male: 1800, female: 1500 },
  },
  {
    city: "Kanpur",
    state: "Uttar Pradesh",
    people: { male: 1850, female: 1700 },
  },
];

export default function PieChart() {
  return data.map((item, index) => (
    <Chart
      width={"500px"}
      height={"300px"}
      chartType="PieChart"
      loader={<div>Loading Chart</div>}
      data={[
        ["People", "Male and Female Ratio"],
        ["Male", item.people.male],
        ["Female", item.people.female],
      ]}
      options={{
        title: `${item.city},  ${item.state}`,
        is3D: true,
      }}
      rootProps={{ "data-testid": "2" }}
    />
  ));
}
