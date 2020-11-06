import React, {Component} from "react";
import { Link, withRouter} from 'react-router-dom';

import classes from './Sign.module.scss';
import { auth } from '../../firebase/firebase';

class Sign extends Component {
    
    state = {
        email: '',
        password:''
    }

    inputHandler = (e) => {
        this.setState({ [e.target.name]: e.target.value })
        
    }

    submitHandler = (e) => {
        e.preventDefault();
        const { email, password } = this.state;
        auth.signInWithEmailAndPassword(email, password).then(re => {
            this.props.history.push('/');
        })
    }

    register = e => {
        e.preventDefault();
        const { email, password } = this.state;
        auth.createUserWithEmailAndPassword(email, password).then(re => {
            this.props.history.push('/')
        }).catch(er => {
            console.log(er)
        })
    }

    render() {
        return (
            <div className={classes.sign}>
                <Link to="/">
                <img className={classes.signLogo}
                    src="http://pngimg.com/uploads/amazon/amazon_PNG24.png" alt="" />
                </Link>
    
                <div className={classes.signContainer}>
                    <h1>Sing in</h1>
                    <form >
                        <h5>Email</h5>
                        <input
                            value={this.state.email}
                            onChange={(e)=>this.inputHandler(e)}
                            name="email" type="email" />
    
                        <h5>Password</h5>
                        <input
                            value={this.state.password}
                            onChange={(e)=>this.inputHandler(e)}
                            name="password" type="password" />
                        <button
                            onClick={(e)=>this.submitHandler(e)}
                            className={classes.signBtn}>Sign In</button>
                    </form>
                    <p>By continuing, you agree to Amazon's Conditions of Use and Privacy Notice.</p>
    
                    <button
                        onClick={(e)=>this.register(e)}
                        className={classes.createBtn}>
                        Create Your Amazon Accout</button>
                </div>
          </div>
      )
   }
}

export default withRouter(Sign);
