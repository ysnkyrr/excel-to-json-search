import React from "react";
import Table from "../Table";

export const Data = ({ excelData,title }) => {
    console.log("ffff",title)
  return (
    <table>
      <tbody>
        <tr className="title">
          {title.map((item,index)=>(
            <th key={index}>
                {item}
            </th>
          ))}
        </tr>
        {excelData?.map((index) => (
          <Table data={index} />
        ))}
      </tbody>
    </table>
  );
};
