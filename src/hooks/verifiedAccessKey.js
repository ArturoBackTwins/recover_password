import { useEffect, useState } from "react";
import axiosAPI from "../config/api.config";
import WebServices from "../config/webservices";


const VerifiedAccesKey = (access_key = "") => {
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    const [success, setSuccess] = useState(false);
    
    const url = `${WebServices.recover_password.get_validate_access_key}?access_key=${access_key}`;
    
    useEffect(() => {
        axiosAPI.get(url).then((res) => {
            setSuccess(true);
        })
        .catch((err) => {
            setError(err);
        })
        .finally(() => {
            setLoading(false);
        });
    }, [access_key])
    

    return [loading, error, success];
};

export default VerifiedAccesKey