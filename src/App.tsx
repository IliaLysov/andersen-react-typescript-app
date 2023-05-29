import React from 'react';
import { Header } from './Components';
import { AuthPage, TodoPage, AboutPage } from './Pages';
import { connect } from 'react-redux';
import { Routes, Route, Navigate } from 'react-router-dom';

interface AppProps {
  name: string
}

function App({name}: AppProps) {

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<AuthPage/>}/>
        <Route path='/todo' element={name ? <TodoPage/> :  <Navigate to={'/'} replace/>}/>
        <Route path='/about' element={<AboutPage/>}/>
      </Routes>
    </div>
  );
}

export default connect((state: any) => ({name: state.common.name}))(App);
