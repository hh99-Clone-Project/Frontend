export const RESP = {
    USERSIGNUPPOST: {
      status: 200,
    },
    USERLOGINPOST: {
      status: 200,
      token: "token",
      userEmail: "bkw9603@naver.com",
      nickName: "Flow",
      profileImg: "https://avatars.githubusercontent.com/u/91737252?v=4",
    },
    USERISLOGINGET: {
      userName: "변기원",
      nickName: "Flow",
      profileImg: "https://avatars.githubusercontent.com/u/91737252?v=4",
    },
    POSTPOST: {
      status: 200,
    },
    POSTPOSTIDPUT: {
      status: 200,
    },
    POSTPOSTIDDELETE: {
      status: 200,
    },

    
    POSTSPOST: [
      {
        postId: 1,
        imageFile: "https://interbalance.org/wp-content/uploads/2021/08/flouffy-VBkIK3qj3QE-unsplash-1024x701.jpg",
        content: "멍뭉이입니다",
        dayBefore: "7일 전",
        commentCnt: "2개",
        nickname: "멍뭉",
        comments: [{
                    commentId : "댓글 id",
                    nickname: "닉네임",
                    contents: "댓글 내용",
                  }]
      },
      {
        postId: 2,
        imageFile:           "https://dimg.donga.com/wps/NEWS/IMAGE/2021/12/24/110942647.2.jpg",
        content: "멍뭉이입니다",
        dayBefore: "7일 전",
        commentCnt: "2개",
        nickname: "멍뭉",
        comments: [{
                    commentId : "댓글 id",
                    nickname: "닉네임",
                    contents: "댓글 내용",
                  }]

      },
      {
        postId: 3,
        imageFile:"https://dimg.donga.com/wps/NEWS/IMAGE/2021/12/24/110942647.2.jpg",
        content: "멍뭉이입니다",
        dayBefore: "7일 전",
        commentCnt: "2개",
        nickname: "멍뭉",
        comments: [{
                    commentId : "댓글 id",
                    nickname: "닉네임",
                    contents: "댓글 내용",
                  }]

      },
    ],
  };