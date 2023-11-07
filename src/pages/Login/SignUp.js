import { async } from '@firebase/util';
import React, { useEffect, useState } from 'react';
import { useAuthState, useCreateUserWithEmailAndPassword, useSignInWithGoogle, useUpdateProfile } from 'react-firebase-hooks/auth';
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import useToken from '../../hooks/useToken';
import Loading from '../Shared/Loading';



const SignUp = () => {
    const hallName = localStorage.getItem('hallname');
    const [userInfos, setUserInfos] = useState({});
    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);
    const [updateProfile, updating, updateError] = useUpdateProfile(auth);
    let signInError;

    //server site e put(/user/:email) er jonno == eikhane (useToken) hooks er modde useToken state ta banayce
    const [token] = useToken(user || gUser);

    const navigate = useNavigate()
    const location = useLocation();
    let from = location.state?.from?.pathname || "/";

    useEffect(() => {
        if(token){
            navigate(from, {replace: true} );
        }
    },[token, from, navigate])

    console.log('user',user);

    if (loading || gLoading || updating) {
        return <Loading />
    }

    if (error || gError || updateError) {
        signInError = <p className='text-red-500'><small>{error?.message || gError?.message || updateError?.message}</small></p>
    }
    
    const onSubmit = async (data) => {
        console.log(data);
        //email && password amra react hook from er thake pasce direct amader r state e rakha lagtese na
        await createUserWithEmailAndPassword(data.email, data.password) //createUserWithEmailAndPassword er age await kron user create hoyor por updateProfile e jabe, await jothy na ditam tahole user create hoyor age e updateProfile e chole jeto
        await updateProfile({ displayName: data.name}) // displayName er naam diye ekta object pathasce r sei jonno object er ekta maan thaka lagbe tai data.name ta disce  
    }

    
    return (
        <div className='flex h-screen justify-center items-center'>
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="text-center text-2xl font-bold">SignUp</h2>

                    <form onSubmit={handleSubmit(onSubmit)}>

                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Name ?</span>
                            </label>
                            <input
                                type="text"
                                placeholder="Your Name"
                                className="input input-bordered w-full max-w-xs"
                                {...register("name", {
                                    required: {
                                        value: true,
                                        message: "Name is required"
                                    }
                                })
                                }
                            />
                            <label className="label">
                                {errors.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors.name.message}</span>}
                            </label>
                        </div>
                        {/* Duplicate */}
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">What is Email ?</span>
                            </label>
                            <input
                                type="email"
                                placeholder="Your Email"
                                className="input input-bordered w-full max-w-xs"
                                {...register("email", {
                                    required: {
                                        value: true,
                                        message: "Email is required"
                                    },
                                    pattern: {
                                        value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                        message: 'error message' // JS only: <p>error message</p> TS only support string
                                    }
                                })
                                }
                            />
                            <label className="label">
                                {errors.email?.type === 'required' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                                {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}

                            </label>
                        </div>
                        {/* Duplicate */}

                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input
                                type="passwor"
                                placeholder="Password"
                                className="input input-bordered w-full max-w-xs"
                                {...register("password", {
                                    required: {
                                        value: true,
                                        message: "password is required"
                                    },
                                    minLength: {
                                        value: 6,
                                        message: 'Must be 6 characters or longer' // JS only: <p>error message</p> TS only support string
                                    }
                                })
                                }
                            />
                            <label className="label">
                                {errors.password?.type === 'required' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                                {errors.password?.type === 'minLength' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}

                            </label>

                            <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Phone number ?</span>
                            </label>
                            <input
                                type="text"
                                placeholder="Your phone"
                                className="input input-bordered w-full max-w-xs"
                                {...register("phone", {
                                    required: {
                                        value: true,
                                        message: "phone is required"
                                    }
                                })
                                }
                            />
                            <label className="label">
                                {errors.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors.name.message}</span>}
                            </label>
                        </div>
                        </div>
                        <p>Hall Name : {hallName}</p>
                        {signInError}
                        <input className='btn w-full max-w-xs text-white' type="submit" value="Sign Up" />
                    </form>

                    <p><small>Already have an account<Link to="/login" className='text-primary'>Please LogIn</Link></small></p>

                    <div className="divider">OR</div>
                    <button
                        onClick={() => signInWithGoogle()}
                        className="btn btn-outline">
                        Continue with Google</button>
                </div>
            </div>
        </div>
    );
};

export default SignUp;