const usersModels = require('../../models/auth/user')
const chatModels = require('../../models/chat/chat')
const { OK, DB_ERROR } = require('../../modules/stautsModule')

const chatController ={
    // 채팅방 글 가져오기
    readChat : async(req, res)=>{
        try {
            const dataList = await chatModels.find()
            if(dataList === 0){
                res.status(NO_DATA).json({
                message:"데이터가 없음"
            })
            return;
            }
            res.status(OK).json({
                message:"조회 완료",
                dataList : dataList,
            })
        } catch (error) {
            res.status(DB_ERROR).json({
                message:"데이터 조회 DB오류"
            })
        }
    },

    // 채팅방 글 쓰기
    createChat : async(req, res)=>{
        const {message, _id} = req.body;

        try {
            const userInfo = await usersModels.findById(_id)
            const userId = userInfo.userId

            const chat = new chatModels({
                message,
                userId,
                createDate : new Date()
            })
            
            await chat.save()
            res.status(OK).json({
                message : "채팅 저장 성공"
            })
        } catch (error) {
            res.status(DB_ERROR).json({
                message : "채팅 저장 DB 에러"
            })
        }
    }
}

module.exports = chatController