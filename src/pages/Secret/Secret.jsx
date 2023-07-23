/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../providers/AuthProvider";
import Swal from "sweetalert2";
import { useNavigation } from "react-router-dom";



const Secret = () => {
    const { register, handleSubmit } = useForm();
    const { signIn, user } = useContext(AuthContext)
    const navigate = useNavigation();


    console.log('user', user);

    const onSubmit = data => {


        fetch("http://localhost:5000/student", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
            }).catch(err => console.log(err))











        // signIn(data.email, data.name, data.subject, data.date, data.number)
        //     .then(result => {
        //         // const user = result.user;
        //         console.log(user);

        //         if (user) {
        //             const savStudent = { name: data.name, email: data.email, subject: data.subject, date: data.date, number: data.number }
        //             console.log('savStudent', savStudent);
        //             fetch('http://localhost:5000/student', {
        //                 method: 'POST',
        //                 headers: {
        //                     'content-type': 'application/json'
        //                 },
        //                 body: JSON.stringify(savStudent)
        //             })
        //                 .then(res => res.json())
        //                 .then(data => {
        //                     if (data.insertedId) {
        //                         Swal.fire({
        //                             title: 'Student Added Successfull',
        //                             showClass: {
        //                                 popup: 'animate__animated animate__fadeInDown'
        //                             },
        //                             hideClass: {
        //                                 popup: 'animate__animated animate__fadeOutUp'
        //                             }
        //                         }).then((result) => {
        //                             if (result.isConfirmed) {
        //                                 navigate('/login')
        //                             }
        //                         })
        //                     }
        //                 })
        //         }

        //     })
        //     .catch(error => console.log(error))
    };
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row">

                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl  bg-red-300">
                    <div className="card-body">
                        <h1 className="text-3xl font-bold text-center">Student Address Form</h1>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" {...register("name", { required: true })} placeholder="name" name='name' className="input input-bordered" />

                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="text" {...register("email", { required: true })} placeholder="email" name='email' className="input input-bordered" />

                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Subject</span>
                                </label>
                                <input type="subject" {...register("subject", { required: true })} placeholder="subject" name='subject' className="input input-bordered" />

                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Date Of Birth</span>
                                </label>
                                <input type="subject" {...register("date", { required: true })} placeholder="date of birht" name='date' className="input input-bordered" />

                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Phone Number</span>
                                </label>
                                <input type="number" {...register("number", { required: true })} placeholder="number" name='number' className="input input-bordered" />

                            </div>
                            <div className="form-control mt-6">
                                <input className="btn btn-success bg-blue-700" type="submit" value="submit" />
                            </div>
                        </form>

                    </div>
                </div>

            </div>
        </div>
    );
};

export default Secret;