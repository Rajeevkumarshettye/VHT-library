const UserData = ({users}) => {
    return (
        <>
            {
                users.map((curUser) => {
                    const {id, name, email} = curUser;
                    const {street, city, zipcode} = curUser.address;

                    return (
                        <tr key={id}>
                            <td>Book_title</td>
                            <td>Full_name</td>
                            <td>Mobile_number</td>
                            <td>Issued_date</td>
                            <td>Returned_date</td>
                            <td>Full_name</td>
                            <td>Mobile_number</td>
                        </tr>
                    )
                })

            }
        </>
    )
}
export default UserData;