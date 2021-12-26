const adminModels = require('../../../models/auth/admin');
const passwordModule = require('../../../modules/passwrodModule');
const {OK, DB_ERROR,OVER_ACCOUNT} = require('../../../modules/stautsModule')

const adminController ={
    createAdmin : async(req, res)=>{
        const {adminId, email, password} = req.body;

        // 아이디 찾기
        let searchId;
        try {
            searchId = await adminModels.findOne({adminId})
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
            console.log(salt)

            // 비밀번호 해쉬화
            const passwordN = passwordModule.createHashedPassword(password, salt)

            // 데이터 저장
            const data = new adminModels({
                adminId,
                email,
                salt,
                password : passwordN,
                createDate : new Date(),
            })

            data.save();
            res.status(OK).json({
                message:"회원 가입 완료"
            })
        }
    }
}

module.exports = adminController