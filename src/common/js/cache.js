import storage from 'good-storage'

const SEARCH_KEY = '__search__'
const SEARCH_MAX_LEN = 15

const PLAY_KEY = '__play__'
const PLAY_MAX_LEN = 200

const FAVORITE_KEY = '__favorite__'
const FAVORITE_MAX_LEN = 200

function insertArray(arr,val,compare,maxLen){
    let index = arr.findIndex(compare);
    if(index == 0){
      return;
    }
    if(index > 0){
        arr.splice(index,1);
    }
    arr.unshift(val);
    if(maxLen && arr.length > PLAY_MAX_LEN){
        arr.pop();
    }
}

function deleteFromArray(arr,compare){
    let songs = arr.findIndex(compare);
    if(index >0){
        arr.splice(index,1);
    }
}

export function loadFavorite(){
    return storage.get(FAVORITE_KEY,[])
}
export function loadPlay(){
    return storage.set(PLAY_KEY,[]);
}

export function savePlay(song){
    let songs = storage.get(PLAY_KEY,[]);
    insertArray(songs,song, (item) =>{
        return item.id == song.id
    },PLAY_KEY);
    storage.set(PLAY_KEY,songs);
    return songs;
}

export function deleteFavorite(song){
    let songs = storage.get(FAVORITE_KEY,[]);
    deleteFromArray(songs,(item) =>{
        return item.id == song.id
    })
    storage.set(FAVORITE_KEY,songs);
    return songs;
}

export function saveFavorite(song){
    let songs = storage.get(FAVORITE_KEY,[]);
    insertArray(songs,song,(item) =>{
        return item.id == song.id
    },FAVORITE_MAX_LEN)
    storage.set(FAVORITE_KEY,songs);
    return songs;
}