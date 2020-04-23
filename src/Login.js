import React, { Component } from 'react';

class Login extends Component {
    state ={
        account:{
            username: '',
            password: ''
        }
        
    }

    _handleUser = (event) => {
        console.log(event.target.value)
        this.setState({account: {...this.state.account, username: event.target.value}})
    }
    
    _handlePass = (event) => {
        this.setState({account: {...this.state.account, password: event.target.value}})
    }

    _handleSubmit = (event) =>{
        const {account} = this.state;
        const {username, password} = account;

        event.preventDefault();
        if(username !== '' && password !== ''){
            console.log(account);
            localStorage.setItem('account', JSON.stringify(account));
            return this.props.history.push(`/toDoListReact/${username}`);
        }
            
        /*else if(username !== '' || password !== ''){
            if(username !== '')
                alert("Your username is unvalid");
            else
                alert("Your password is unvalid");
        }*/
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
                        <div className="card card-signin my-5">
                            <div className="card-body bg-primary">
                                <h2 className="card-title text-center text-uppercase font-weight-bold text-white">Login</h2>
                                <form className="form-signin" onSubmit={this._handleSubmit}>
                                    <div className="form-group">
                                        <label className="text-white">Username</label>                   
                                        <div className="input-group">
                                            <div className="input-group-prepend">
                                                <span className="input-group-text"><i className="fas fa-user"></i></span>
                                            </div>
                                            <input type="text" name="user" value={this.state.account.username} className="form-control form-control-lg" placeholder="Enter username" onChange={this._handleUser} required />
                                        </div>
                                    </div>

                                    <div className="form-group">
                                        <label className="text-white">Password</label>
                                        <div className="input-group">
                                            <div className="input-group-prepend">
                                                <span className="input-group-text"><i className="fas fa-lock"></i></span>
                                            </div>
                                            <input type="password" value={this.state.account.password} className="form-control form-control-lg" placeholder="Enter password" onChange={this._handlePass} required />
                                        </div>
                                    </div>

                                    <div className="form-check mb-5">
                                        <input className="form-check-input" type="checkbox" />
                                        <label className="form-check-label text-white">Remember me</label>
                                    </div>

                                    <button className="btn btn-lg btn-success btn-block text-uppercase" type="submit">Sign in</button>
                                    
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Login;