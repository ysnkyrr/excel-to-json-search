import React from "react";

const Table = ({ data }) => {
  console.log(data);
  return (
    <tr>
      <td>{data?.Number}</td>
      <td>{data?.First}</td>
      <td>{data?.Last}</td>
      <td>{data?.Gender}</td>
      <td>{data?.Country}</td>
      <td>{data?.Age}</td>
      <td>{data?.Date}</td>
      <td>{data?.Id}</td>
    </tr>
  );
};
export default Table;
