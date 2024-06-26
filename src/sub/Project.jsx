import React, { useState } from 'react';

function Project({data}) {

    const renderPro = () => {
        const Projects = data.project;
        return Projects.map((item) => (
            <article key={item.id}>
                <a href={item.weburl} target='blank' className='sct3-img-container'>
                    <div className='project-pc-img'><img src={item.imgWb} alt="" /></div>
                    <div className='Click'><p>{item.subName} 구경하기!</p></div>
                </a>
                <div className='sct3-text-container'>
                    <div className='sct3-text-box'>
                        <h3>{item.name}</h3>
                        <div className='smallImg'><img src={item.imgWb} alt="" /></div>
                        <p>{item.info}</p>
                    </div>
                    <div className='sct3-btn-container'>
                        <p className='PersonnelBox'><span className='Personnel'>{item.Personnel}</span> {item.Personnels}</p>
                        <div className='btn-box'>
                            <a href={item.weburl} target='blank' className='web-btn-img'><p>WEB</p></a>
                            <a href={item.giturl} target='blank' className='git-btn-img'><svg fill="none" height="52px" viewBox="0 0 92 92" width="52px" xmlns="http://www.w3.org/2000/svg"><path clipRule="evenodd" d="m45.6097 21.0479c-14.2184 0-25.7347 11.4704-25.7347 25.6323 0 11.3423 7.3666 20.9224 17.5961 24.3187 1.2867.2243 1.7693-.5447 1.7693-1.2176 0-.6087-.0322-2.6273-.0322-4.774-6.4658 1.1855-8.1386-1.57-8.6533-3.0118-.2895-.7369-1.5441-3.0118-2.6378-3.6205-.9007-.4807-2.1875-1.6661-.0322-1.6982 2.0266-.032 3.4742 1.8584 3.9567 2.6273 2.3162 3.8769 6.0155 2.7875 7.4953 2.1147.2251-1.6661.9007-2.7875 1.6406-3.4283-5.726-.6408-11.7093-2.8516-11.7093-12.656 0-2.7875.9972-5.0944 2.6378-6.8887-.2574-.6408-1.1581-3.2681.2573-6.7926 0 0 2.1553-.6728 7.0771 2.6274 2.0587-.5768 4.2462-.8651 6.4336-.8651 2.1875 0 4.3749.2883 6.4337.8651 4.9218-3.3323 7.0771-2.6274 7.0771-2.6274 1.4154 3.5245.5146 6.1518.2573 6.7926 1.6406 1.7943 2.6378 4.0691 2.6378 6.8887 0 9.8364-6.0155 12.0152-11.7414 12.656.9328.801 1.737 2.3389 1.737 4.742 0 3.4283-.0321 6.1838-.0321 7.0488 0 .6729.4825 1.4739 1.7692 1.2176 10.1652-3.3963 17.5318-13.0084 17.5318-24.3187 0-14.1619-11.5163-25.6323-25.7347-25.6323z" fill="#fff" fillRule="evenodd"/></svg></a>
                        </div>
                    </div>
                </div>
            </article>
        ));
    };



    return (
        <>
            <section className='sct3' id='Project'>
                <h2>이런걸 만든 <span className='permanent'>me</span></h2>
                {renderPro()}
            </section>
        </>
    );
}

export default Project;