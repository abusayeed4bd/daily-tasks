import React from 'react';
import { Link } from 'react-router-dom'

const Register = () => {
    return (
        <div className=''>

            <div class="card w-50 mx-auto shadow-xl flex-shrink-0 w-full max-w-sm  bg-base-100 my-5">
                <h1 className="text-3xl text-primary font-bold text-center mt-6">
                    Register
                </h1>
                <div class="card-body">
                    <div class="form-control">
                        <label class="label">
                            <span class="label-text">Name</span>
                        </label>
                        <input type="text" placeholder="name" class="input input-bordered" />
                    </div>
                    <div class="form-control">
                        <label class="label">
                            <span class="label-text">Email</span>
                        </label>
                        <input type="email" placeholder="email" class="input input-bordered" />
                    </div>
                    <div class="form-control">
                        <label class="label">
                            <span class="label-text">Password</span>
                        </label>
                        <input type="text" placeholder="password" class="input input-bordered" />
                        <label class="label">
                            Already have an account? <Link to="/login">Login</Link>
                        </label>
                    </div>
                    <div class="form-control mt-6">
                        <button class="btn btn-primary">Create Account</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;