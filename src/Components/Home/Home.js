import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import toast from 'react-hot-toast';
import avatar from '../../assets/avater.png'
import UserDetails from './UserDetails';

const Home = () => {
    const [users, setUsers] = useState([]);
    const [singleUserData, setSingleUserData] = useState({});
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        fetch('https://602e7c2c4410730017c50b9d.mockapi.io/users')
            .then(response => response.json())
            .then(data => {
                setUsers(data);
            })
    }, []);

    const handleUserId = (id) => {
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
        <div className="container">
            <div className="row">
                <div className='left_section col-12 col-md-6 border-end border-2 border-opacity-10 border-dark'>
                    <h1 className='text-danger text-center'>USERS LIST</h1>

                    <Table bordered hover>
                        <tbody>
                            {
                                users.map((user, index) => {
                                    return (
                                        <tr className='table_row' onClick={() => handleUserId(user?.id)} key={index}>
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
                    <UserDetails singleUserData={singleUserData} isLoading={isLoading} />
                </div>
            </div>
        </div>
    );
};

export default Home;