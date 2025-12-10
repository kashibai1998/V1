import React from 'react'
import './TableComponent.css'

function TableComponent() {
  const arr = [
    { si_no: '100', emp_name: 'Lakkappa', emp_salary: 120000 },
    { si_no: '200', emp_name: 'Appu', emp_salary: 200000 },
    { si_no: '300', emp_name: 'Adi', emp_salary: 500000 },
  ]
  return (
    <div>
      <h1>W3School Table components</h1>
      {/*  SI.No    Emp_Name    Emp_Salary
                 100      Lakkappa    1,00,000
             */}
      <div>
        <table className="table" style={{ width: '100%' }}>
          <caption>Emplyoee Details</caption>
          <tr>
            <th className="th" width="30%">
              SI.No
            </th>
            <th className="th" colSpan={1} width="50%">
              Emp_Name
            </th>
            <th className="th" width="10%">
              Emp_Salary
            </th>
          </tr>
          {arr.map((item) => {
            return (
              <tr className="tr">
                <td className="td">{item.si_no}</td>
                <td className="td">{item.emp_name}</td>
                <td className="td">{item.emp_salary}</td>
              </tr>
            )
          })}
        </table>
      </div>
    </div>
  )
}
export default TableComponent
