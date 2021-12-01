import {Redirect, Route} from 'react-router-dom';

const PrivateRoute =({component: Component }, ...rest)=>{
    const isAuth=true;

    return(
        <Route {...rest}
          render={(props)=> isAuth ? <Component {...props}/>: <Redirect to="/noauth"/>}/>
    )
}

export default PrivateRoute;