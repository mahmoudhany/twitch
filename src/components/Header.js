import React from 'react';
import { Link } from 'react-router-dom';
import GoogleAuth from './GoogleAuth';

const Header = () => {
  return (
    <header className='ui secondary pointing menu'>
      <Link className="item" to='/'>Streamy</Link>
      <div className="right menu">
        <Link className="item" to='/streams/edit'>All streams</Link>
        <GoogleAuth />
      </div>
    </header>
  );
};

export default Header;


// 105775424018-8j2bd08e5thb24umkf8pd5gmltlogmkb.apps.googleusercontent.com
