const IP = "192.168.3.201";
const PORT = 3001;
const URL = "http://"+IP+":"+PORT+"/";
export const getAllContacts=(fnRefreshList)=>{
    fetch(
        URL+"contacts"
    ).then(
        (response)=>{ return response.json()}
    ).then(
        (contacts)=>{
            fnRefreshList(contacts);
        }
    )
}