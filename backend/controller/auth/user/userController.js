const userModels = require('../../../models/auth/user');
const jwtModule = require('../../../modules/jwtMoudule');
const { createHashedPassword } = require('../../../modules/passwrodModule');
const passwordModule = require('../../../modules/passwrodModule');
const {OK, DB_ERROR,OVER_ACCOUNT,NO_ACCOUNT, LOCK_ACCOUNT, OVER_PASSWORD, NO_DATA} = require('../../../modules/stautsModule')


const userController ={
    // 회원가입
    createUser : async(req, res)=>{
        const {userId, email, password} = req.body;
        
        // 아이디 찾기
        let searchId;
        try {
            searchId = await userModels.findOne({userId})
        } catch (error) {
            res.status(DB_ERROR).json({
                message:"DB오류"
            })
        }

        if(searchId){
            // 아이디가 있다면 
            res.status(OVER_ACCOUNT).json({
                message:"새로운 아이디를 등록하세요"
            })
        } else {
            // 아이디가 없다면

            // salt 생성
            const salt = await passwordModule.createSalt()

            // 비밀번호 해쉬화
            const passwordN = passwordModule.createHashedPassword(password, salt)

            // 데이터 저장
            const data = new userModels({
                userId,
                email,
                salt,
                nickname : userId,
                password : passwordN,
                createDate : new Date(),
            })

            data.save();
            res.status(OK).json({
                message:"회원 가입 완료"
            })
        }
    },

    // 로그인
    loginUser : async(req, res)=>{
        const {userId, password} =req.body

        // 아이디 있나 체크
        let loginId;
        try {
            loginId = await userModels.findOne({userId})
        } catch (error) {
            res.status(DB_ERROR).json({
                message:"DB에러로 ID확인 실패"
            })
        }

        if(loginId){
            //아이디가 있다면 잠금확인
            if(loginId.lockAccount === false){
                const loginPassword = loginId.password;
                const objId = loginId._id;
                const salt = loginId.salt;

                // 비밀번호 다시 해시화
                const passwordP = passwordModule.createHashedPassword(password, salt);

                // 비밀번호 비교
                if(loginPassword === passwordP){
                    // 비밀번호가 같다면 토큰생성
                    const accessToken = jwtModule.create({
                        objId
                    })
                    res.status(OK).json({
                        message:"로그인 성공",
                        accessToken : accessToken,
                    })
                }else{
                    // 비밀번호가 틀리다면
                    if(loginId.signinCount > 9){
                        // 잠금카운트가 9이상이라면
                        try {
                            await userModels.updateOne(
                                {userId},
                                {$set:{lockAccount : true}}
                            )
                            res.status(LOCK_ACCOUNT).json({
                                message:"비밀번호가 10회이상틀려 잠김"
                            })
                        } catch (error) {
                            res.status(DB_ERROR).json({
                                message:"비밀번호 잠금체크 DB오류"
                            })
                        }
                    } else{
                        // 잠금이 10회 이하라면
                        try {
                            await userModels.updateOne(
                                {userId},
                                {$set : {signinCount:loginId.signinCount + 1}}
                            )
                            res.status(OVER_PASSWORD).json({
                                message:"비밀번호 틀렸음"
                            })
                        } catch (error) {
                            res.status(DB_ERROR).json({
                                message:"비밀번호카운트증가 DB에러"
                            })
                        }
                    }
                }
            }else{
                // 잠금상태다
                res.status(LOCK_ACCOUNT).json({
                    message:"계정이 잠겨있다"
                })
            }
        } else{
            //아이디가 없다
            res.status(NO_ACCOUNT).json({
                message:"아이디가 없습니다"
            })
        }
    },

    // 유저찾기
    findUser : async(req, res)=>{
        const { id } = req.params;
        const {password} =req.body;
        
        try {
            const userInfo = await userModels.findById(id);

            if(userInfo === null){
                res.status(NO_DATA).json({
                    message:"데이터 없음"
                })
                return
            }
            
            const salt = userInfo.salt;
            const passwordN = createHashedPassword(password, salt)

            if(passwordN === userInfo.password){
                res.status(OK).json({
                    message:"성공"
                })
            }
            else{
                res.status(NO_DATA).json({
                    message:"실패"
                })
            }
        } catch (error) {
            res.status(DB_ERROR).json({
                message:"DB에러"
            })
        }
    },

    updateUser : async (req, res) => {
        const { id } = req.params;
        const { nickname } = req.body;

        console.log(req.file)

        let imgURL;
        if(req.file) {
            imgURL = req.file.location;
        }

        try {
            await userModels.findByIdAndUpdate(id, {
                nickname,
                imgURL
            })

            res.status(OK).json({
                messgae: "유저정보 수정 성공",
                imgURL
            })
        } catch (error) {
            res.status(DB_ERROR).json({
                message : "DB 서버 에러"
            })
        }
    }
}

module.exports = userController