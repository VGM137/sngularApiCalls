

export class getData {
  constructor(){
  }

  async getHPData(endpoint){
    let url = `https://hp-api.onrender.com/api/characters`
    try{
      let response = await fetch(url, {method: 'GET'})
      let data = await response.json()
      console.log(response)
      return data
    }catch(err){
      console.log(err)
    }
  }
}
