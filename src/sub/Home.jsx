import React, { useEffect, useState } from 'react';

function Home(props) {
    const [content, setContent] = useState("");
    // 커서 표시 여부 상태
    const [cursorVisible, setCursorVisible] = useState(true); 

    const text = "Hi ! I'm JinWoo";
    // console.log(content)
    // 타이핑 효과
    function aaa(i){
       
    }

    useEffect(() => {
        let i = -1;
        const typingInterval = setInterval(() => {
            if (i < text.length) {
                ++i;
                setContent(prevContent => prevContent + text.charAt(i));
            } else {
                clearInterval(typingInterval);
            }
        }, 100);
        // 커서 깜빡임을 제어하는 setInterval
        const cursorInterval = setInterval(() => { 
            setCursorVisible(prev => !prev);
        }, 500);

        return () => {
            clearInterval(typingInterval);
            clearInterval(cursorInterval);
        };
    }, []);

    return (
        <>
            <section className='sct1' id='Home'>
                <div className='sct1-content1'>
                    <div className='sct1-text-conteinr'>
                        <h2>
                            <b className='permanent'>{content}</b>
                            {cursorVisible && <span className="cursor">|</span>} {/* 커서 표시 */}
                        </h2>
                        <p>새로운 도전을 좋아하는 나</p>
                        <p>망설임 없이 직진하는 나</p>
                    </div>
                    <div className='sct1-img-conteiner'></div>
                </div>
                
                <div className='sct1-content2'>
                    <div className='sct1-img-conteiner'></div>
                    <div className='sct1-text-box'>
                        <p>배우며 성장하는 재미를 느끼고</p>
                        <p>힘든일은 함께 해쳐나가는 나</p>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Home;
