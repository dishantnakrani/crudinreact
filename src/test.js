import React from 'react'

export default function Test(props) {
    return (
        <>
            <table border={2} >
                <tr>
                    <th>First Name</th>
                    <th>Second Name</th>
                    <th>Surname</th>
                    <th colSpan={2}>Crud</th>
                </tr>
                {props.data.map((i) => {
                    return (
                        <tr>
                            <td>{i.fname}</td>
                            <td>{i.mname}</td>
                            <td>{i.sname}</td>
                            <td><button onClick={() => props.edit(i)}>Edit</button></td>
                            <td><button onClick={() => props.remove(i.id)}>Delete</button></td>

                        </tr>
                    )
                }

                )}
            </table>
        </>
    )
}
