const mainModels = require('../../models/board/main')
const userModels = require('../../models/auth/user')
const { OK, DB_ERROR, NO_DATA, NO_ACCOUNT } = require('../../modules/stautsModule')

const mainController ={
    // 글쓰기
    createMainPost : async (req,res)=>{
        const { title, _id, contents, category, imgURL}= req.body

        // 유저 정보 찾기
        try {
            const userInfo = await userModels.findById({_id})
            if(userInfo){
                // 찾은 유저정보로 아이디 찾기
                const userId = userInfo.userId
    
                // 데이터 저장하기
                const post = new mainModels({
                    title,
                    contents,
                    userId,
                    imgURL,
                    category,
                    createDate : new Date()
                })

                try {
                    await post.save()
                    res.status(OK).json({
                        message:"저장 성공"
                    })
                } catch (error) {
                    res.status(DB_ERROR).json({
                        message:"post저장 DB에러"
                    })
                }
            } else{
                // obj아이디 없다면
                res.status(NO_ACCOUNT).json({
                    message:"아이디가 없음"
                })
            }
        } catch (error) {
            console.log(error)
            return
        }

    },

    // 리스트 불러오기
    readMainPost : async(req, res)=>{
        try {
            const dataList = await mainModels.find()
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

    // 게시글 삭제
    deleteMainPost : async(req,res)=>{
        const { id } = req.params;
        try {
            await mainModels.findByIdAndDelete(id)
            res.status(OK).json({
                message:"삭제 완료"
            })
        } catch (error) {
            res.status(DB_ERROR).json({
                message:"삭제 DB에러"
            })
        }
    },

    // 게시물 수정하기
    updateMainPost : async(req,res)=>{
        const {id} = req.params
        const {title, contents, _id} = req.body

        try {
            const postInfo = mainModels.findById(id)
            const userInfo = userModels.findById(_id);

            if(postInfo.userId === userInfo.userId){
                // 게시글 쓴 사람 맞다면
                
                const data ={
                    title,
                    contents,
                    imgURL
                }

                await mainModels.findByIdAndUpdate(id, data,{new:true})
                res.status(OK).json({
                    message:"수정완료",
                    data : data
                })
            }else{
                // 쓴사람이 아니라면
                res.status(NO_ACCOUNT).json({
                    message:"옳지 않는 유저 입니다"
                })
            }
        } catch (error) {
            res.status(DB_ERROR).json({
                message:"DB오류"
            })
        }
    },

    // 디테일 페이지 불러오기
    searchMainPost : async(req, res)=>{
        const {id} = req.params;
        try {
            const data = await mainModels.findById(id)
            if(data === null){
                res.status(NO_DATA).json({
                    message:"데이터 없음"
                })
                return
            }
            res.status(OK).json({
                message:"검색 완료",
                data: data
            })
        } catch (error) {
            res.status(DB_ERROR).json({
                message:"디테일페이지 DB오류"
            })
        }
    }
}
module.exports = mainController