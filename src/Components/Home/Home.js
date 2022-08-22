import React, { useState } from 'react';
import { Table } from 'react-bootstrap';
import toast from 'react-hot-toast';
import avatar from '../../assets/avater.png'
import UserDetails from './UserDetails';
import leftSpinner from '../../assets/loader.gif';
import useUsers from '../Hooks/useUsers';

const Home = () => {
    const [singleUserData, setSingleUserData] = useState({});
    const [isLoading, setIsLoading] = useState(false);
    const [id, setId] = useState(null);
    const [users, leftLoader] = useUsers();



    const handleUserId = (id) => {
        setId(id);
        if (!id) {
            toast.error('Please select a user');
            return;
        } else {
            setIsLoading(true);
            fetch(`https://602e7c2c4410730017c50b9d.mockapi.io/users/${id}`)
                .then(response => response.json())
                .then(data => {
                    setSingleUserData(data);
                    setIsLoading(false);
                })
        }

    }


    return (
        <>
            {
                leftLoader ? <div className='d-flex loader_div justify-content-center align-items-center'><img src={leftSpinner} alt="" /></div> :
                    (
                        <div className="container py-5">
                            <div className="row">
                                <div className='left_section col-12 col-md-6 align-items-start'>
                                    <h1 className='hover-3_main_text text-center mb-3 font_family fw-semibold border_round hover-3'>USERS LIST</h1>
                                    <Table className='table_border' striped bordered >
                                        <tbody className='table-shadow table_border'>
                                            {
                                                users.map((user, index) => {
                                                    return (
                                                        <tr className='table_row hover_shadow' onClick={() => handleUserId(user?.id)} key={index}>
                                                            <td className='text-center td_serial'>
                                                                {index + 1}
                                                            </td>
                                                            <td className='d-flex align-items-center'>
                                                                <img className='rounded-circle table_avatar' src={avatar} alt="" />
                                                                <p className='mb-0'>{user?.profile?.firstName} {user?.profile?.firstName}</p>
                                                            </td>
                                                        </tr>
                                                    )
                                                })
                                            }
                                        </tbody>
                                    </Table>
                                </div>

                                <div className='right_section col-12 col-md-6'>
                                    <UserDetails singleUserData={singleUserData} isLoading={isLoading} id={id} />
                                </div>
                            </div >
                        </div >
                    )
            }

        </>
    );
};

export default Home;