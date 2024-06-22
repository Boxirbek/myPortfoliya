import React, { useState } from 'react';
import './Header.css'; // CSS faylni import qilamiz

const Header = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const toggleModal = () => {
        setIsModalOpen(!isModalOpen);
    }

    const profileInfo = {
        firstName: 'Ism: Boxirbek',
        lastName: 'Familya: Obidov',
        middleName: "Sharif: Toxirjon o'g'ili",
        phoneNumber: 'Telefon raqami: +998903040516'
    };

    return (
        <>
            <header>
                <h1>My Portfolio</h1>
                <nav>
                    <a href="#about">About</a>
                    <a href="#projects">Projects</a>
                    <a href="#Footer">Contact</a>
                    <button className='profile-button' onClick={toggleModal}>Profile</button>
                </nav>
            </header>
            <div className='Header_bcgImg'>
                <h2>Welcome to my portfolio</h2>
                <div className='intro'>
                    <div className='headLeft'>
                       <p>Obidov Boxirbek</p>
                       <p>Front End Developer</p>
                    </div>
                    <div className='headRight'>
                     <img src="" alt="" />
                    </div>
                </div>
            </div>
            {isModalOpen && (
                <div className='modal'>
                    <div className='modal-content'>
                        <span className='close-button' onClick={toggleModal}>&times;</span>
                        <h2>Profile Information</h2>
                        <div>
                            <h3>{profileInfo.firstName}</h3>
                            <h3>{profileInfo.lastName}</h3>
                            <h3>{profileInfo.middleName}</h3>
                            <h3>{profileInfo.phoneNumber}</h3>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}

export default Header;
