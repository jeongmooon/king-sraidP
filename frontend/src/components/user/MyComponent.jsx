import React from 'react'
import styled from 'styled-components';
import palette from '../../libs/styles/palette';

const MypageWrapper = styled.div`
    background: ${palette.back};
    padding: 5rem 10rem;
    box-sizing: border-box;
    min-width: 480px;

    @media (max-width: 1024px){
        padding: 5rem 0;
        .back {
            margin-left: 3rem;
        }
    }
`

const ImageChange = styled.div`
  margin: 3rem auto;
  box-sizing: border-box;
  border: 1px solid grey;
  border-radius: 70%;
  width: 50rem;
  height: 50rem;
  overflow: hidden;
  cursor: pointer;
  background: white;
  .image {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  @media (max-width: 600px) {
    width: 40rem;
    height: 40rem;
  }
`;

const MyPageForm = styled.div`
    width: 60%;
    margin: 0 auto;
    padding: 6rem 0 4rem;

    @media (max-width : 1024px) {
        width: 70%;
    }

    @media (max-width : 768px) {
        width: 90%;
    }
`

const TilteWrapper = styled.div`
    display: flex;
`

const Title = styled.h1`
    font-size: 5rem;
    margin: 0 auto;
    padding: 0;
`

const Label = styled.label`
    font-size: 2rem;
    
    @media (max-width : 600px){
        font-size: 1.5rem;
    }
`

const FormText = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 3rem;
    align-items: center;
`

const StyledInput = styled.input`
    font-size: 2rem;
    width: 85%;
    outline: none;
    height: 5rem;

    @media (max-width : 600px) {
        font-size: 1.5rem;
    }
`

const StyledButton = styled.div`
  border-radius: 0.4rem;
  font-size: 1.2rem;
  font-weight: 400;
  border: 1px solid black;
  padding: 0.6rem 1.1rem;
  line-height: 1.2rem;
  vertical-align: middle;
  text-align: center;
  display: flex;
  align-items: center;
  text-decoration: none;
  background-color: #fff;
  color: ${palette.main};
  cursor: pointer;

  & + & {
    margin-left: 0.5rem;
  }
`;

function MyComponent({myPage, preview, imgRef, myInput, onChangeImage, onChangeInput, onClickPutBtn, onClickPassword}) {
    console.log(myInput)
    return (
        <MypageWrapper>
            <TilteWrapper>
                <Title>회원 정보 수정</Title>
            </TilteWrapper>
            {myPage ? (
                <>       
                    <ImageChange onClick={()=> imgRef.current.click()}>
                        <img
                            className='image'
                            src={preview || ""}
                            alt='' />
                        <input
                            onChange={onChangeImage}
                            ref={imgRef}
                            type='file'
                            name='img'
                            hidden={true} />
                    </ImageChange>
                    <MyPageForm>
                        <FormText>
                            <Label>아이디</Label>
                            <StyledInput
                                type='text'
                                value={myInput ? myInput.userId : ""} />
                        </FormText>
                        <FormText>
                            <Label>닉네임</Label>
                            <StyledInput
                                type='text'
                                value={myInput ? myInput.nickname : ""}
                                onChange={onChangeInput}
                                name='nickname' />
                        </FormText>
                    </MyPageForm>
                    <div style={{display: "flex", justifyContent: "center"}}>
                        <StyledButton onClick={onClickPutBtn}>수정</StyledButton>
                    </div>
                </>
            ) : (
                <>                    
                    <MyPageForm>
                        <FormText>
                            <Label>비밀번호</Label>
                            <StyledInput
                                type='password'
                                name="password"
                                value={myInput.password}
                                onChange={onChangeInput} />
                            <StyledButton onClick={onClickPassword}>수락</StyledButton>
                        </FormText>
                    </MyPageForm>
                </>
            )}            
        </MypageWrapper>
    )
}

export default MyComponent
