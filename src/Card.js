import React, { useState } from 'react';
import './styles/Card.css';
import arrow from './images/arrow.png';
import avatar from './images/avatar.png';
import heart from './images/heart.png';
import office_building from './images/office-building.png'
import external_link from './images/external-link.png'
import duplicate from './images/duplicate.png'
import share from './images/share.png'
import trash from './images/trash.png'
import Content from './Content';


function Card() {
    const [isShown, setIsShown] = useState(false);
    const [isArrowClick, setisArrowClick] = useState(false);
    const [isContentClick, setisContentClick] = useState("info");
    const [input, setInput] = useState('o/signup-flow')

    const handleToggle = () => {
        setisArrowClick(!isArrowClick);
        setisContentClick("info")
    };
    const handleClick = (e) => {
        alert(`${e.target.alt} icon clicked`)
    }
    const handleBottomClick = (val) => {
        setisContentClick(val)
    }
    const changeHandle = e => {
        setInput(e.target.value)
    }
    return (
        <>
            <div className={`card  ${!isArrowClick ? 'top' :''}`} >
                <div className='topCard' onMouseEnter={!isArrowClick ? (() => setIsShown(true)) : undefined}
                    onMouseLeave={!isArrowClick ? (() => setIsShown(false)) : undefined}>
                    <div className='wrapper'>
                        <div className='bg'>
                            <div className='bgicon'>
                                miro
                            </div>
                        </div>
                        <input className={`font1 text  ${!isArrowClick ? 'input' : 'input1'}`} type="text" value={input} onChange={changeHandle} disabled={isArrowClick === true ? false : true} />
                        {/* <div className='font1 text'>o/signup-flow</div> */}
                    </div>
                    <div className='icons'>
                        <div className='imgHide'>
                            <img src={avatar} alt="avatar" />
                        </div>
                        <div className='imgContainer imgHide' onClick={(e) => handleClick(e)}>
                            <img src={heart} alt="Heart" />
                        </div>
                        <div className='imgHide'>
                            <img src={office_building} alt="office_building" />
                        </div>
                        {isShown && (
                            <div className='imgContainer imgHide' onClick={(e) => handleClick(e)}>
                                <img src={external_link} alt="External link" />
                            </div>
                        )}
                        {isShown && (
                            <div className='imgContainer imgHide' onClick={(e) => handleClick(e)}>
                                <img src={duplicate} alt="Duplicate" />
                            </div>
                        )}
                        {isShown && (
                            <div className='imgContainer imgHide' onClick={(e) => handleClick(e)}>
                                <img src={share} alt="Share" />
                            </div>
                        )}
                        {isShown && (
                            <div className='imgContainer imgHide' onClick={(e) => handleClick(e)}>
                                <img src={trash} alt="Trash" />
                            </div>
                        )}
                        <div className='imgContainer arrowBox' onClick={() => handleToggle()}>
                            <img src={arrow} className={isArrowClick ? 'active' : ''} alt="arrow" />
                        </div>
                    </div>
                </div>
                {isArrowClick &&
                    <div className='bottomCard'>
                        <div className='bottomIcons'>
                            <div onClick={() => handleBottomClick('info')} className={isContentClick === "info" ? 'active' : ''} >
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                    <g id="info-new">
                                        <path id="Vector" d="M9.16669 14.1667H10.8334V9.16666H9.16669V14.1667ZM10 1.66666C5.40002 1.66666 1.66669 5.4 1.66669 10C1.66669 14.6 5.40002 18.3333 10 18.3333C14.6 18.3333 18.3334 14.6 18.3334 10C18.3334 5.4 14.6 1.66666 10 1.66666ZM10 16.6667C6.32502 16.6667 3.33335 13.675 3.33335 10C3.33335 6.325 6.32502 3.33333 10 3.33333C13.675 3.33333 16.6667 6.325 16.6667 10C16.6667 13.675 13.675 16.6667 10 16.6667ZM9.16669 7.5H10.8334V5.83333H9.16669V7.5Z" fill="#111827" />
                                    </g>
                                </svg>
                            </div>
                            <div onClick={() => handleBottomClick('chart')} className={isContentClick === "chart" ? 'active' : ''} >
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                    <g id="trending-up">
                                        <path id="Vector" fillRule="evenodd" clipRule="evenodd" d="M12 7C11.7348 7 11.4804 6.89464 11.2929 6.70711C11.1053 6.51957 11 6.26522 11 6C11 5.73478 11.1053 5.48043 11.2929 5.29289C11.4804 5.10536 11.7348 5 12 5H17C17.2652 5 17.5196 5.10536 17.7071 5.29289C17.8946 5.48043 18 5.73478 18 6V11C18 11.2652 17.8946 11.5196 17.7071 11.7071C17.5196 11.8946 17.2652 12 17 12C16.7348 12 16.4804 11.8946 16.2929 11.7071C16.1053 11.5196 16 11.2652 16 11V8.414L11.707 12.707C11.5195 12.8945 11.2651 12.9998 11 12.9998C10.7348 12.9998 10.4805 12.8945 10.293 12.707L7.99998 10.414L3.70698 14.707C3.51838 14.8892 3.26578 14.99 3.00358 14.9877C2.74138 14.9854 2.49057 14.8802 2.30516 14.6948C2.11975 14.5094 2.01458 14.2586 2.01231 13.9964C2.01003 13.7342 2.11082 13.4816 2.29298 13.293L7.29298 8.293C7.48051 8.10553 7.73482 8.00021 7.99998 8.00021C8.26514 8.00021 8.51945 8.10553 8.70698 8.293L11 10.586L14.586 7H12Z" fill="#111827" />
                                    </g>
                                </svg>

                            </div>
                            <div onClick={() => handleBottomClick('graph')} className={isContentClick === "graph" ? 'active' : ''} >
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                    <g id="activity_icon">
                                        <path id="Vector" d="M19.1666 10C19.1666 10.221 19.0788 10.433 18.9226 10.5893C18.7663 10.7455 18.5543 10.8333 18.3333 10.8333H14.1666C14.0295 10.8334 13.8944 10.7995 13.7735 10.7348C13.6525 10.6701 13.5494 10.5766 13.4733 10.4625L12.7516 9.37917L10.79 15.2625C10.7349 15.4285 10.6289 15.573 10.4871 15.6755C10.3453 15.7779 10.1749 15.8331 9.99998 15.8333H9.96831C9.78801 15.8264 9.61482 15.7612 9.47476 15.6475C9.33471 15.5337 9.23536 15.3776 9.19165 15.2025L7.38498 7.97833L6.62331 10.2633C6.56807 10.4292 6.46205 10.5735 6.32028 10.6758C6.1785 10.7781 6.00814 10.8332 5.83331 10.8333H1.66665C1.44563 10.8333 1.23367 10.7455 1.07739 10.5893C0.92111 10.433 0.833313 10.221 0.833313 10C0.833313 9.77899 0.92111 9.56702 1.07739 9.41074C1.23367 9.25446 1.44563 9.16667 1.66665 9.16667H5.23248L6.70998 4.73667C6.76723 4.56584 6.8783 4.41817 7.02654 4.31579C7.17479 4.2134 7.35222 4.16182 7.53225 4.16876C7.71228 4.17571 7.88521 4.24081 8.02512 4.35431C8.16503 4.46782 8.26439 4.62361 8.30831 4.79833L10.115 12.0217L11.71 7.23667C11.7593 7.08879 11.8492 6.95772 11.9693 6.85836C12.0894 6.759 12.235 6.69533 12.3895 6.67459C12.5441 6.65384 12.7013 6.67685 12.8434 6.741C12.9855 6.80516 13.1067 6.90788 13.1933 7.0375L14.6125 9.16667H18.3333C18.5543 9.16667 18.7663 9.25446 18.9226 9.41074C19.0788 9.56702 19.1666 9.77899 19.1666 10Z" fill="black" />
                                    </g>
                                </svg>

                            </div>
                            <div onClick={() => handleBottomClick('view')} className={isContentClick === "view" ? 'active' : ''} >
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                    <g id="eye">
                                        <path id="Vector" d="M10 12C10.5304 12 11.0391 11.7893 11.4142 11.4142C11.7893 11.0391 12 10.5304 12 10C12 9.46957 11.7893 8.96086 11.4142 8.58579C11.0391 8.21071 10.5304 8 10 8C9.46957 8 8.96086 8.21071 8.58579 8.58579C8.21071 8.96086 8 9.46957 8 10C8 10.5304 8.21071 11.0391 8.58579 11.4142C8.96086 11.7893 9.46957 12 10 12Z" fill="#111827" />
                                        <path id="Vector_2" fillRule="evenodd" clipRule="evenodd" d="M0.458008 10C1.73201 5.943 5.52201 3 10 3C14.478 3 18.268 5.943 19.542 10C18.268 14.057 14.478 17 10 17C5.52201 17 1.73201 14.057 0.458008 10ZM14 10C14 11.0609 13.5786 12.0783 12.8284 12.8284C12.0783 13.5786 11.0609 14 10 14C8.93914 14 7.92173 13.5786 7.17158 12.8284C6.42143 12.0783 6.00001 11.0609 6.00001 10C6.00001 8.93913 6.42143 7.92172 7.17158 7.17157C7.92173 6.42143 8.93914 6 10 6C11.0609 6 12.0783 6.42143 12.8284 7.17157C13.5786 7.92172 14 8.93913 14 10Z" fill="#111827" />
                                    </g>
                                </svg>

                            </div>

                        </div>
                        <div className='bottomContent'>
                            <Content isContentClick={isContentClick} />
                        </div>
                    </div>
                }
            </div>

        </>
    )
}

export default Card