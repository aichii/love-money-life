import React from 'react'
import '../cssFiles/FinancialTables.css'

const BalanceSheet = props => (
    <>
        <h1 className="tableTitle">Balance Sheet</h1>
        <hr/>
        <table className="balanceSheet">
            <thead>
                <tr>
                    <th className="financialKeys">Financial Data</th><th ClassName="companyValues">Company</th>
                </tr>
            </thead>
            <tbody>
                {
                    Object.keys(props).map(prop => (
                        <tr key={prop}>
                            <td className="financialKeys">
                                {prop}:
                            </td>
                            <td className="companyValues">
                            {Number(props[prop]).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')}
                            </td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
    </>
)

export default BalanceSheet