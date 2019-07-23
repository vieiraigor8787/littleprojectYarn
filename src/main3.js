import axios from 'axios';

class Api {
    static async getUserInfo(name) {
        try { 
            const response = await axios.get(`https://api.github.com/users/${name}`)
            console.log(response)
        } catch (err) {
            console.warn('errado porra, faz direito')
        }
    }
}
Api.getUserInfo('vieiraigor8787')