import React from 'react'
import Form from '../../Components/NavForm/NavForm'

const Authorize: React.FC = () => {
    return (
        <>
            <Form nav={['email', 'password']} />
        </>
    )
}

export default Authorize