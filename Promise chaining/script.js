//Async Await
//Promise
const login = () => {
    const loginPromise = new Promise((resolve,reject)=> {
        setTimeout(() => {
            resolve("login is finished");
    },5000);
    })
    return loginPromise;
};
const fetchData = () =>{
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            resolve("Data has arrived");
        },2000);
    });
};
const getUserPhotos = () =>{
    return new Promise((resolve,reject) =>{
        setTimeout(()=> {
            resolve("Photos have been fetched");
        },2000);
    });
};
const getUserFriends = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Friends have been fetched")
        },4000);
    });
};

const showHomeFeed = (data) => {
    console.log("Making home feed using data:", data)
}
//promise Chaining
const buildUI = async () => {
    try {
    const loginData = await login();
    console.log(loginData);
    const dataFromFetchData = await fetchData();
    console.log(dataFromFetchData);
    const userPhotos = await getUserPhotos();
    console.log(userPhotos);
    const userFriends = await getUserFriends();
    console.log(userFriends);
    showHomeFeed(userFriends); }
    catch (error){
        console.log(error)
    }

   /* .then((loginData) => {
        console.log(loginData);
        return fetchData();
    })
    .then((dataFromFetchData) => {
        console.log(dataFromFetchData);
        return getUserPhotos();
    })
    .then((userPhotos) => {
        console.log(userPhotos);
        return getUserFriends();
    })
    .then((userFriends) => {
        console.log(userFriends);
        showHomeFeed(userFriends);
    })
    .catch((error) =>{
        console.log(error);
    });*/
};
buildUI()