import React, { useState } from 'react'
import { useParams } from "react-router-dom"
import { Loader } from 'rsuite';
import ErrorRecoverPassword from '../components/ErrorRecoverPassword';
import FormRecoverPassword from '../components/FormRecoverPassword';
import SuccessRecoverPassword from '../components/SuccessRecoverPassword';
import VerifiedAccesKey from '../hooks/verifiedAccessKey';

const RecoverPassword = () => {
    let params = useParams();
    const [success, setSuccess] = useState(false)
    const [loading, error] = VerifiedAccesKey(params.access_key);

    return (
        <div style={{ height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: '#0F131A' }}>
            { loading ? <Loader backdrop content="loading..." vertical /> :
                error ? <ErrorRecoverPassword message={error.response.data.error} /> : success ? <SuccessRecoverPassword /> : 
                <FormRecoverPassword access_key={params.access_key} setSuccess={setSuccess} />
            }
        </div>
    )
}

export default RecoverPassword