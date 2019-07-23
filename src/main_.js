import api from './api';

class App {
    constructor() {
        this.repositorios = []

        this.formEl = document.getElementById('repo')
        this.listEl = document.getElementById('repo-list')

        this.registraEventos()
    }

    registraEventos() {
        this.formEl.onsubmit = event => this.addRepositorio(event)
        }

    addRepositorio(event) {
        event.preventDefault()//previne carregamento comum
        this.repositorios.push({
            name:'',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti eum vel aliquam ex veritatis soluta consectetur repudiandae maxime saepe ab provident placeat necessitatibus ducimus nesciunt quod rerum, atque maiores. Veritatis.',
            avatar_url: 'https://avatars3.githubusercontent.com/u/40477878?v=4',
            html_url: 'https://github.com/vieiraigor8787/littleprojectYarn'
        })
        // console.log(this.repositorios)
        this.render()
    }

    render() {
        this.listEl.innerHTML = ''
    
        this.repositorios.forEach(repo => {
            let imagem = document.createElement('img')
            imagem.setAttribute('src', repo.avatar_url)
    
            let titulo = document.createElement('strong')
            titulo.appendChild(document.createTextNode(repo.name))
    
            let descricao = document.createElement('p')
            descricao.appendChild(document.createTextNode(repo.description))
    
            let link = document.createElement('a')
            link.setAttribute('target', '_blank')
            link.appendChild(document.createTextNode('Acessar'))
    
            let lista = document.createElement('li')
            lista.appendChild(imagem)
            lista.appendChild(titulo)
            lista.appendChild(descricao)
            lista.appendChild(link)
    
            this.listEl.appendChild(lista)
        })
    }

}


new App()