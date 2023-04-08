import React, { useState, useEffect } from 'react'
import '../style.css'
const ApiData = () => {
    const [status, setStatus] = useState(true)
    const [filteredData, setFilteredData] = useState([]);
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/todos')
            .then(res => res.json())
            .then(result => {
                localStorage.setItem('data', JSON.stringify(result.filter((a) => {
                    return a.userId === 1
                })));
                setFilteredData(result.filter((a) => {
                    return a.userId === 1
                }))
            }
            )
            .catch(() => {
                let storedData = localStorage.getItem('data')
                setFilteredData(JSON.parse(storedData))
                setStatus(false)
            })
    }, []);

    // const handleClick = () => {

    //     console.log(filteredData)
    //     console.log(filteredData[16].completed)

    // }
    return (
        <>
            {/* <button onClick={handleClick}>Console</button> */}
            {!status &&(
                <p className='text-center'>Offline</p>
            )}
            {filteredData.length > 0 && (
                <div style={{display: "flex", justifyContent: 'center'}}>
                <table className='table'>
                    <tr style={{backgroundColor: 'orange'}}>
                        <th colSpan={3} align='center'>Id</th>
                        <th colSpan={6} align='center'>Title</th>
                        <th colSpan={3} align='center'>Completed</th>
                    </tr>
                    {filteredData.map((a) =>
                        <tr>
                            <td colSpan={3} align='center'>{a.id}</td>
                            <td colSpan={6}>{a.title}</td>
                            <td colSpan={3} align='center'>{`${a.completed}`}</td>
                        </tr>
                    )}
                </table>
                </div>
            )}
        </>
    )
}
export default ApiData;