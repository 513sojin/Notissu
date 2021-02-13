import React from 'react';
import './GrayArticle.css';
import poly_8 from './gray_article/Polygon 8.png';
import poly_2 from './gray_article/Polygon 2.png';
import vector_1 from './gray_article/Vector 1.png';
import vector_2 from './gray_article/Vector 2.png';
import vector_3 from './gray_article/Vector 3 (1).png';
import vector_4 from './gray_article/Vector 4 (1).png';
import vector_5 from './gray_article/Vector 3 (2).png';
import vector_6 from './gray_article/Vector 4 (2).png';
import iPhone1 from './gray_article/LL_iPhone11-Mockup_Angle1 1.png';
import iPhone2 from './gray_article/LL_iPhone11-Mockup_Angle1 2.png';
import notissuImage from './gray_article/Intersect.png';

function GrayArticle(){
    return(
        <>
        <div className="gray_article">
            <div className="text">전공별 공지사항 + 숭실대 공지사항 + 기숙사 공지사항</div>
            <img className="poly_8" src={poly_8}/>
            <img className="iPhone1" src={iPhone1}/>
            <img className="iPhone2" src={iPhone2}/>
            <img className="notissuImage" src={notissuImage}/>
            <img className="poly_2" src={poly_2}/>
            <div className="ment_1">숭실대학교</div>
            <div className="ment_2">모든 공지사항을</div>
            <div className="ment_3">하나로</div>
            <img className="vector1" src={vector_1}/>
            <img className="vector2" src={vector_2}/>
            <img className="vector3" src={vector_3}/>
            <img className="vector4" src={vector_4}/>
            <img className="vector5" src={vector_5}/>
            <img className="vector6" src={vector_6}/>
        </div>
        </>
    );
}

export default GrayArticle