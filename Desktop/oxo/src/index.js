import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import axios from 'axios';
const borderTable = {
  border: '2px solid red'
}

function FilterableProductTable() {

  const [data, setData] = useState([]);
  useEffect(() => {
    fetch('https://cruth.phpnet.org/epfc/caviste/public/index.php/api/wines')
      .then(res => res.json())
      .then(
        (result) => {
          setData(result);
        }

      )
  }, [])

  return (
    <div>
      <input type="text" className="search-boxs" placeholder="search..." />
      <input type="checkbox" />only show products
      <div>
        <table style={borderTable}>
          <thead>
            <tr>
              <th>Name</th>
              <th>Price</th>
            </tr>
          </thead>

          <tbody>
            <tr><td>Catégorie</td></tr>
            <tr>

              <td >
                <ul>
                  {data.map(item => (
                    <li key={item.id}> {item.name}</li>
                  ))}
                </ul>

              </td>

            </tr>
          </tbody>
        </table>
      </div>
    </div>

  )

}
export default FilterableProductTable;
ReactDOM.render(<FilterableProductTable />, document.getElementById('root'));