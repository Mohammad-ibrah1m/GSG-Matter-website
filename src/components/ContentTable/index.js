import React from 'react';
import './style.css';
const ContentTable = ({ category }) => {
  return (
    <table class="table">
      <tbody>
        <tr>
          <th scope="row" className="table-row-title">
            {category[0].toUpperCase() + category.slice(1)}
          </th>
          <td>54 Jobs</td>
        </tr>
        <tr>
          <th scope="row" className="table-row-title">
            Partnership
          </th>
          <td>Randall Armstrong</td>
        </tr>
        <tr>
          <th scope="row" className="table-row-title">
            In Collab
          </th>
          <td>Augusta Mendoza</td>
        </tr>
      </tbody>
    </table>
  );
};

export default ContentTable;
