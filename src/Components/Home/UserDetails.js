import React from 'react';
import Spinner from '../Shared/Spinner';

const userDetails = ({ singleUserData, isLoading }) => {
    return (
        <>
            <h1 className='text-danger text-center'>USER DETAILS</h1>
            {
                isLoading ? <Spinner /> :
                    (
                        <div>

                            <h4>{singleUserData?.jobTitle}</h4>
                        </div>
                    )
            }
        </>
    );
};

export default userDetails;