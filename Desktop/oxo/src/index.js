import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
const borderTable = {
  border: '2px solid red'
}


class FilterableProductTable extends React.Component {
  render() {
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
            <tr><th colSpan="2">Sporting goods</th></tr>

            <tbody>
              <tr>
                <td>Footbal</td>
                <td>$49.99</td>
              </tr>
              <tr>
                <td>Baseball</td>
                <td>$9.99</td>
              </tr>
              <tr>
                <td>Basketball</td>
                <td>$29.99</td>
              </tr>
            </tbody>
            <tr><th colSpan="2">elctronics</th></tr>
            <tbody>
              <tr>
                <td>IpadTouch</td>
                <td>$239.99</td>
              </tr>
              <tr>
                <td>Iphone 5</td>
                <td>$129.99</td>
              </tr>
              <tr>
                <td>Nexus</td>
                <td>$29.99</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    )
  }
}

ReactDOM.render(<FilterableProductTable />, document.getElementById('root'));