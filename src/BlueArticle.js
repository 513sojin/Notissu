import React from 'react';
import poly_6 from './blue_article/Polygon 6.png';
import logo from './blue_article/logo 1.png';
import poly_4 from './blue_article/Polygon 4.png';
import poly_1 from './blue_article/Polygon 1.png';
import poly_5 from './blue_article/Polygon 5.png';
import poly_7 from './blue_article/Polygon 7.png';
import phone from './blue_article/LL_iPhone11-Mockup_Angle2 1.png';
import poly_7_2 from './blue_article/Polygon 7 (2).png';
import speaker from './blue_article/speaker.png';
import ment2 from './blue_article/notice.png';
import google from './blue_article/image 6.png';
import appleImg from './blue_article/apple white 1.png';
import './BlueArticle.css';

var link="https://play.google.com/store/apps/details?id=com.yourssu.notissu"
var linkApple="https://apps.apple.com/kr/app/notissu/id1488050194"
function Google(){
    return (
        <>
        <a href={link}>
            <div className="google">
                <img className="google_img" src={google}/>
                <span className="google_ment">Google Play</span>
            </div>
        </a>
        </>
    );
}

function Apple(){
    return(
        <>
            <a href={linkApple} target="blank">
                <div className="apple">
                    <img className="apple_img" src={appleImg}/>
                    <span className="apple_ment">App Store</span>
                </div>
            </a>
        </>
    );
}
function BlueArticle(){
    return(
        <>
            <div className="blue_article">
                    <img className="logo" src={logo} alt='logo'/>
                    <div className="Notissu">NOTISSU</div>
                    <div className="size">
                        <img className="poly_6" src={poly_6} alt='poly'/>
                        <img className="poly_4" src={poly_4} alt='poly'/>
                        <img className="poly_1" src={poly_1} alt='poly'/>
                        <img className="poly_5" src={poly_5} alt='poly'/>
                        <img className="phone" src={phone} alt='phone'/>
                        <img className="poly_7" src={poly_7} alt='poly'/>
                        <img className="poly_7_2" src={poly_7_2} alt='poly'/>
                        <img className="speaker" src={speaker} alt='speaker'/>
                        <div className="ment">숭실의<br></br>모든</div>
                        <img className="ment2" src={ment2} alt='ment'/>
                        <Google/>
                        <Apple/>
                    </div>
            </div>
        </>
    );
}

export default BlueArticle