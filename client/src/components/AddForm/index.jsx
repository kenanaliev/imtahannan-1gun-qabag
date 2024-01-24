import React, { useEffect, useState } from 'react'
import "./index.scss"
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from "axios"

const AddForm = () => {
    const [data, setdata] = useState([])
    const [search, setsearch] = useState('')

    const fetchData = async () => {
        const res = await axios.get("http://localhost:7000/")
        setdata(res.data)
    }

    useEffect(() => {
        fetchData()
    }, [])

    const deleteData = async (id) => {
        await axios.delete(`http://localhost:7000/${id}`)
        fetchData()
    }


    return (
        <div>
            <Formik
                initialValues={{ title: '', image: '', price: '' }}
                validationSchema={Yup.object({
                    title: Yup.string().required('Required'),
                    image: Yup.string().required('Required'),
                    price: Yup.number().required('Required').positive("menfi olmaz")
                })}
                onSubmit={async (values, { setSubmitting }) => {
                    await axios.post("http://localhost:7000/", values);
                    fetchData()
                }}
            >
                <Form>
                    <label htmlFor="title">Title</label>
                    <Field name="title" type="text" />
                    <ErrorMessage name="title" />

                    <label htmlFor="image">Image</label>
                    <Field name="image" type="text" />
                    <ErrorMessage name="image" />

                    <label htmlFor="price">Price</label>
                    <Field name="price" type="price" />
                    <ErrorMessage name="price" />

                    <button type="submit">Submit</button>
                </Form>
            </Formik>

            <div>
                <input type="text" onChange={(e) => setsearch(e.target.value)} placeholder='Search' />
            </div>

            <table>
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Image</th>
                        <th>Price</th>
                        <th>Buttons</th>
                    </tr>
                </thead>
                <tbody>
                    {data &&
                        data.filter(x => x.title.toLowerCase().includes(search)).map((item) => (
                            <tr key={item._id}>
                                <td>{item.title}</td>
                                <td>
                                    <img height={"100px"} src={item.image} alt="" />
                                </td>
                                <td>{item.price}</td>
                                <td>
                                    <button onClick={() => deleteData(item._id)}>x</button>
                                </td>
                            </tr>
                        ))}

                </tbody>

            </table>
        </div>
    )
}

export default AddForm

