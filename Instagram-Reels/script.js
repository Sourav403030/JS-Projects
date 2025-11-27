const reels = [
  {
    profileImage: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bW9kZWxzfGVufDB8fDB8fHww",
    username: "travelwithsid",
    isFollowed: false,
    video: "./reels/reel1.mp4",
    description: "Sunset vibes at Bali 🌅✨",
    likeCount: 12400,
    isLiked: false,
    commentCount: 320,
    shareCount: 58
  },
  {
    profileImage: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    username: "fit_nikita",
    isFollowed: true,
    video: "./reels/reel2.mp4",
    description: "5 min morning stretch routine 💪",
    likeCount: 8900,
    isLiked: true,
    commentCount: 112,
    shareCount: 42
  },
  {
    profileImage: "https://images.unsplash.com/photo-1531891570158-e71b35a485bc?q=80&w=1364&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    username: "techguru",
    isFollowed: false,
    video: "./reels/reel3.mp4",
    description: "This AI tool blew my mind 🤯",
    likeCount: 15500,
    isLiked: false,
    commentCount: 540,
    shareCount: 120
  },
  {
    profileImage: "https://images.unsplash.com/photo-1604514628550-37477afdf4e3?q=80&w=927&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    username: "foodie_riya",
    isFollowed: true,
    video: "./reels/reel4.mp4",
    description: "Cheese garlic bread recipe 🧀🔥",
    likeCount: 7400,
    isLiked: false,
    commentCount: 89,
    shareCount: 23
  },
  {
    profileImage: "https://images.unsplash.com/photo-1604771968376-e6f1f321be5d?q=80&w=1369&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    username: "streetshots",
    isFollowed: false,
    video: "./reels/reel5.mp4",
    description: "Rainy day street photography ☔📸",
    likeCount: 5600,
    isLiked: true,
    commentCount: 210,
    shareCount: 35
  },
  {
    profileImage: "https://images.unsplash.com/photo-1618375531912-867984bdfd87?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    username: "gaming_arjun",
    isFollowed: true,
    video: "./reels/reel6.mp4",
    description: "Clutch moment 🎮🔥",
    likeCount: 17800,
    isLiked: false,
    commentCount: 480,
    shareCount: 90
  },
  {
    profileImage: "https://images.unsplash.com/photo-1616091093714-c64882e9ab55?q=80&w=1364&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    username: "dancewithme",
    isFollowed: false,
    video: "./reels/reel7.mp4",
    description: "New choreography 💃🔥",
    likeCount: 9400,
    isLiked: false,
    commentCount: 130,
    shareCount: 50
  },
  {
    profileImage: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    username: "cookingwithraj",
    isFollowed: true,
    video: "./reels/reel8.mp4",
    description: "Perfect masala chai ☕🔥",
    likeCount: 6200,
    isLiked: false,
    commentCount: 75,
    shareCount: 18
  },
  {
    profileImage: "https://images.unsplash.com/photo-1638993606271-04836e75d662?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    username: "stylebymanvi",
    isFollowed: false,
    video: "./reels/reel9.mp4",
    description: "Winter outfit ideas ❄️✨",
    likeCount: 13300,
    isLiked: true,
    commentCount: 290,
    shareCount: 64
  },
  {
    profileImage: "https://images.unsplash.com/photo-1569210538317-4d53f92a0e21?q=80&w=1335&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    username: "naturebeats",
    isFollowed: true,
    video: "./reels/reel10.mp4",
    description: "Waterfall sounds for peace 🌊💙",
    likeCount: 15800,
    isLiked: false,
    commentCount: 410,
    shareCount: 110
  }
];

let allReels = document.querySelector(".all-reels");

function addDynamicData(){
    let sum = '';

reels.forEach(function(elem){
    sum = sum + `<div class="reel">
                <video autoplay loop muted src="${elem.video}"></video>
                <div class="bottom">
                    <div class="bottom-top">
                        <img src="${elem.profileImage}" alt="">
                        <h3>${elem.username}</h3>
                        <button>${elem.isFollowed ? "Follow": "Unfollow"}</button>
                    </div>
                    <div class="bottom-bottom">
                        <h4>${elem.description}</h4>
                    </div>
                </div>
                <div class="right">
                    <div class="like">
                        <h4>${elem.isLiked ? '<i class=" heart ri-heart-fill"></i>': '<i class="heart ri-heart-line"></i>'}</h4>
                    <h4>${elem.likeCount}</h4>
                    </div>
                    <div class="comment">
                        <h4><i class="ri-chat-1-line"></i></h4>
                    <h4>${elem.commentCount}</h4>
                    </div>
                    <h4><i class="ri-more-2-fill"></i></h4>
                </div>
            </div>`

    

    allReels.innerHTML = sum;
})
}

addDynamicData();




