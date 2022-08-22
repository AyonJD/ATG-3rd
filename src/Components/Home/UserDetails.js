import React from 'react';
import Spinner from '../Shared/Spinner';
import avatar from '../../assets/avater.png'

const userDetails = ({ singleUserData, isLoading, id }) => {
    return (
        <>
            <h1 className='hover-3_main_text detals_header font_family border_round fw-semibold mx-auto text-center mb-3 hover-3'>USER DETAILS</h1>
            {
                isLoading ? <Spinner /> :
                    (
                        <div className='d-flex user_details align-items-center justify-content-center pb-5 bg'>
                            <div className="card text-start shadow--raised bg">
                                <figure className='pt-5 text-center'><img className='rounded-circle p-2 image-shadow' src={avatar} alt="" /></figure>
                                <div className="card-body px-4 pt-0">
                                    <h5 className=" fw-semibold text-center mb-3">
                                        {id ? `@${singleUserData?.profile?.username}` : '@example'}
                                    </h5>
                                    <blockquote className=''>
                                        {
                                            id ? `${singleUserData?.Bio}` : 'Example Users bio'
                                        }
                                    </blockquote>
                                    <p>
                                        <strong>Name: </strong>
                                        {
                                            id ? `${singleUserData?.profile?.firstName} ${singleUserData?.profile?.lastName}` : 'Example Users name'
                                        }
                                    </p>

                                    <p>
                                        <strong>Job Title: </strong> {
                                            id ? `${singleUserData?.jobTitle}` : 'Example Job Title'
                                        }
                                    </p>
                                    <p><strong>Email: </strong>
                                        {
                                            id ? `${singleUserData?.profile?.email}` : 'Example Email'
                                        }
                                    </p>

                                </div>
                            </div>
                        </div>
                    )
            }
        </>
    );
};

export default userDetails;