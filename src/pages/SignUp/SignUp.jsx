import { Link, useNavigate} from "react-router-dom";
import logo from '../../../image/signUp.jpg'
import { useForm } from "react-hook-form";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import Swal from "sweetalert2";
// import Swal from "sweetalert2";



const SignUp = () => {
    const { register, reset, handleSubmit, formState: { errors } } = useForm();
    const { createUser } = useContext(AuthContext);
    const navigate=useNavigate();


    const onSubmit = (data) => {
        console.log(data)
        createUser(data.email, data.password, data.name)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);


                console.log('uer profile Update');
                reset();
                Swal.fire({
                    title: 'User Created  successfull.',
                    width: 600,
                    padding: '3em',
                    color: '#716add',
                    background: '#fff url(/images/trees.png)',
                    backdrop: `
                                            rgba(0,0,123,0.4)
                                            url("/images/nyan-cat.gif")
                                            left top
                                            no-repeat
                                            `
                })
                navigate('/login')


                    .catch(error => console.log(error))
            })
    }
    return (
        <div className="hero min-h-screen bg-base-200">

            <div className="hero-content flex-col lg:flex-row">
                <div className="mr-20 w-1/2">
                    <img className="h-[700px]" src={logo} alt="" />
                </div>

                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-violet-400">
                    <div className="card-body">
                        <h1 className="text-3xl font-bold text-center">Sign Up</h1>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" {...register("name", { required: true })} placeholder="email" name='name' className="input input-bordered" />
                                {errors.name && <span className="text-red-500">Name is required</span>}
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="text" {...register("email", { required: true })} placeholder="email" name='email' className="input input-bordered" />
                                {errors.email && <span className="text-red-500">Email is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" {...register("password", { required: true, minLength: 6, maxLength: 20 })} placeholder="password" name='password' className="input input-bordered" />
                                {errors.password?.type === 'minLength' && <span className="text-red-400">Password must be 6 characters</span>}
                            </div>
                            <div className="form-control mt-6">
                                <input className="btn btn-success bg-green-600" type="submit" value="sign up" />
                            </div>
                        </form>
                        <p>Already have an account? <Link to='/login'><span className='text-orange-600 font-bold'>Login</span></Link></p>

                    </div>
                </div>

            </div>
        </div>
    );
};

export default SignUp;