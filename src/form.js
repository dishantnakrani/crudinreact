import React, { useState } from 'react'
import Table from './table'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Form() {

    const [fname, setFname] = useState('')
    const [mname, setMname] = useState('')
    const [sname, setSname] = useState('')
    const [dommy, setdommy] = useState('')
    const [id, setId] = useState('')
    const [alldata, setAlldata] = useState([])
    const [clickk, setclick] = useState(false)//merge edit and submit button in one button.
    const [show, setShowImage] = useState(false) //when image is not inside frame frame not appear at upload.
    // const [edit, setEdit] = useState    


    const fnamechange = (e) => {
        setFname(e.target.value)
    }

    const mnamechange = (e) => {
        setMname(e.target.value)
    }
    const snamechange = (e) => {
        setSname(e.target.value)
    }

    const handelEdit = (e) => {
        setFname(e.fname)
        setMname(e.mname)
        setSname(e.sname)
        setId(e.id)
        setclick(false)
    }
    const handleDelete = (id) => {

        let mydata = alldata
        mydata = mydata.filter((item) => item.id !== id);
        setAlldata(mydata)
        setclick(false)

        // window.location.href = "./"
        console.log("object");
        setFname('')
        setSname('')
        setMname('')




    }
    const update = () => {
        let dummydata = alldata
        let objIndex = dummydata.findIndex((obj => obj.id === id));

        dummydata[objIndex].fname = fname
        dummydata[objIndex].mname = mname
        dummydata[objIndex].sname = sname


        console.log("After update: ", dummydata[objIndex])
        setclick(true)
        setAlldata(alldata)


        setdommy('sd')
        // setclick(true)


    }
    const ok = () => {
        if (id == '') {
            submit()
            alert('submit')
            // toast("Submit!");

        }
        else {
            update()
            alert('update')
            // toast("Update");


        }
    }

    const submit = () => {
        let obj = {
            fname: fname,
            mname: mname,
            sname: sname,
            id: Date.now()

        }

      
        setAlldata([...alldata, obj])
        console.log(alldata)
        setFname('')
        setSname('')
        setMname('')
        setclick(true)
        const ok = () => toast("Wow so easy!");

    };
    return (
        <>{
            clickk ?
                <Table data={alldata} edit={handelEdit} remove={handleDelete} />
                : <div>
                    <label htmlFor='fname'>First Name:</label>
                    <input type='text' id='fname' value={fname} onChange={fnamechange} /> <br></br> <br></br>

                    <label htmlFor='fname'>Middle Name:</label>
                    <input type='text' id='fname' value={mname} onChange={mnamechange} /> <br></br> <br></br>

                    <label htmlFor='fname'>Surname:</label>
                    <input type='text' id='fname' value={sname} onChange={snamechange} /> <br></br> <br></br>
                    {/* <button onClick={submit} >Submit</button> */}
                    {/* <button onClick={update} >Update</button> */}
                    <button onClick={ok} >Ok</button>
                    <ToastContainer />
                </div>
        }
            <>

            </>

        </>
    )
}   
