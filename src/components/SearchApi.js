const Search = {
    async search(planet) {   
        const url = `https://api.le-systeme-solaire.net/rest/bodies/`
        const response = await fetch(url + planet)
            const jsonResponse = await response.json(); 
            if(jsonResponse){
                console.log(jsonResponse)
                return jsonResponse}          
    }}


export default Search;