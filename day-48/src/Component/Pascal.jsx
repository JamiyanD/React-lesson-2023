import React, { useState } from "react";

const PascalTriangle = () => {
  const [depth, setDepth] = useState(0);
  const [rows, setRows] = useState([]);

  const createTriangle = (depth) => {
    if (depth === 0) {
      return [[1]];
    } else {
      const prevRows = createTriangle(depth - 1);
      const lastRow = prevRows[prevRows.length - 1];
      const newRow = [1];
      for (let i = 0; i < lastRow.length - 1; i++) {
        newRow.push(lastRow[i] + lastRow[i + 1]);
      }
      newRow.push(1);
      return [...prevRows, newRow];
    }
  };

  const handleInput = (event) => {
    setDepth(event.target.value);
    setRows(createTriangle(event.target.value));
  };

  return (
    <div>
      <label>
        Enter the depth of the triangle:
        <input type="number" value={depth} onChange={handleInput} />
      </label>
      <table>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i}>
              {row.map((cell, j) => (
                <td key={j}>{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PascalTriangle;
