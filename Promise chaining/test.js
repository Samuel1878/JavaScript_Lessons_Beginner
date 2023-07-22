//promise 
const login = () => {
    const loginPromise = new Promise((resolve, reject)=>{
        setTimeout(()=> {
            resolve("LoginDataHaveBeenNoticed")
        }, 3000)
    });
    return loginPromise;
};
const fetchData = () => {
    const fetchDataFromServer = new Promise((resolve, reject)=>{
        setTimeout(()=> {
        resolve("fected data have been arrived");
    }, 3000)
    });
    return fetchDataFromServer;
};
const getUserFriends = () => {
    const getingData = new Promise((resolve, reject) => {
        setTimeout(()=> {
        resolve("UserDataHaveBeenArrived");
    }, 3000); //reject("error")
    });
    return getingData;
};
const showHomeFeed = (data) => {
    console.log("ShowingUserInterFace: ", data);
};

const buildUI = async () =>{
   const loginData = await login();
   console.log(loginData);
   const fetchDataFromServer = await fetchData();
   console.log(fetchDataFromServer);
   const getUserFriendsData = await getUserFriends();
   console.log(getUserFriendsData);
   showHomeFeed(getUserFriendsData);

};
buildUI().catch((error)=>{console.log(error)});
console.log("After Async Await Code One");
setTimeout(()=>{
    console.log("After Async Await Code Two")
},2000);