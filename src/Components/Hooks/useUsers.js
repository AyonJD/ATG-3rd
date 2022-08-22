import { useEffect, useState } from "react";

const useUsers = () => {
    const [users, setUsers] = useState([]);
    const [leftLoader, setLeftLoader] = useState(false);

    useEffect(() => {
        setLeftLoader(true);
        fetch('https://602e7c2c4410730017c50b9d.mockapi.io/users')
            .then(response => response.json())
            .then(data => {
                setUsers(data);
                setLeftLoader(false);
            })
    }, []);

    return [users, leftLoader];
};

export default useUsers;