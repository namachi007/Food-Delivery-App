import { useRouteError } from "react-router-dom";



const Error = () => {
    const errorMsg = useRouteError();
    console.log(errorMsg);
    return (
        <div>
            <h1>Sorry, The page your trying to render is invalid!!!</h1>
            <h2>{errorMsg.status} Error: {errorMsg.statusText}</h2>
        </div>
    );
};


export default Error