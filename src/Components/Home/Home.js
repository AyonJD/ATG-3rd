import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import avatar from '../../assets/avater.png'

const Home = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch('https://602e7c2c4410730017c50b9d.mockapi.io/users')
            .then(response => response.json())
            .then(data => setUsers(data))
    }, []);

    return (
        <div className="container">
            <div className="row">
                <div className='left_section col-12 col-md-6'>
                    <h1 className='text-danger'>USERS LIST</h1>

                    <Table bordered hover>
                        <tbody>
                            {
                                users.map((user, index) => {
                                    return (
                                        <tr key={index}>
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

                </div>
            </div>
        </div>
    );
};

export default Home;