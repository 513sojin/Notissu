import React from 'react';
import './Footer.css';
import urssuLogo from  './footer/urssu_logo.png'
import kakao from './footer/kakao.png';
import instagram from './footer/instagram.png';
import facebook from './footer/facebook.png';
import './BlueArticle.css';

function Footer(){
    return (
        <>
        <div className="footer">
            <img className="urssuLogo" src={urssuLogo}/>
            <div className="yourssu">YOURSSU</div>
            <div className="intro">
                <div>주소 :
                    <span className="normal"> 서울 동작구 상도로 369 숭실대학교 학생회관 244호</span>
                </div>
                <div>Email :
                    <span className="normal"> yourssu.com@gmail.com</span>
                </div>
                <div>KaKaoTalk :
                    <span className="normal"> 숭실대학교 유어슈</span>
                </div>
            </div>

            <a href="https://www.facebook.com/yourssu/" target="blank">
                <img className="facebook" src={facebook}/>
            </a>
            <a href="https://www.instagram.com/ground_yourssu/?hl=ko"
              target="blank">
                <img className="instagram" src={instagram}/>
            </a>
            <a href="http://pf.kakao.com/_AxfrxeT" target="blank">
                <img className="kakao" src={kakao}/>
            </a>
        </div>
        </>
    );
}

export default Footer