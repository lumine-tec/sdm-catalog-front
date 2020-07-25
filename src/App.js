import React, {useEffect} from 'react';
import { connect } from 'react-redux';
import './App.css';

import {verifyLogin} from './redux/user/actions';

function App(props) {
  useEffect(() => {
    props.verifyLogin();
    console.log(props.login);
  }, []);

  let titulo = "nada";

  if(props.login)
    titulo = "entrou";
  
  if(!props.login)
    titulo = "publico";

  return (
    <div className="App">
      {titulo}
    </div>
  );
}

function mapStateToProps(state){
  return {
    login: state.user.login
  };
}

function mapDispatchToProps(dispatch){
  return {
    verifyLogin: () => dispatch(verifyLogin())
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
