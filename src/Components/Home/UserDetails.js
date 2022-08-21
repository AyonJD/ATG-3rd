import React from 'react';
import Spinner from '../Shared/Spinner';
import avatar from '../../assets/avater.png'

const userDetails = ({ singleUserData, isLoading }) => {
    return (
        <>
            <h1 className='text-danger text-center'>USER DETAILS</h1>
            {
                isLoading ? <Spinner /> :
                    (
                        <div className='d-flex user_details align-items-center justify-content-center py-5 bg'>
                            <div className="card text-center shadow--raised bg">
                                <figure className='pt-5'><img className='rounded-circle p-2 image-shadow' src={avatar} alt="" /></figure>
                                <div className="card-body">
                                    <h2 className="text-xl fw-semibold text-center">{singleUserData?.profile?.firstName} {singleUserData?.profile?.firstName}</h2>
                                    <p><strong>Phone</strong>: </p>

                                </div>
                            </div>
                        </div>
                    )
            }
        </>
    );
};

export default userDetails;