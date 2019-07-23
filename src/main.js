import api from './api';

class App {
    constructor() {
        this.repositorios = []

        this.formEl = document.getElementById('repo')
        this.listEl = document.getElementById('repo-list')
        this.inputEl = document.querySelector('input[name=repositorio]')

        this.registraEventos()
    }

    registraEventos() {
        this.formEl.onsubmit = event => this.addRepositorio(event)
        }
    
    setandoLoading(loading = true) {
        if (loading === true) {
            let loadinEl = document.createElement('span')
            loadinEl.appendChild(document.createTextNode('carregani...'))
            loadinEl.setAttribute('id', 'loading')

            this.formEl.appendChild(loadinEl)
        } else {
            document.getElementById('loading').remove()
        }
    }

    async addRepositorio(event) {
        event.preventDefault()//previne carregamento comum

        const inputo = this.inputEl.value
        if(inputo.length === 0)
            return;

        this.setandoLoading()

        try {
            const response = await api.get(`/repos/${inputo}`)
            // console.log(response)
            const {name, description, html_url, owner: {avatar_url}} = response.data
            
            this.repositorios.push({
                name,
                description,
                avatar_url,
                html_url
            });
            this.inputEl.value = '';
            // console.log(this.repositorios)
            this.render();
        } catch(err) {
            alert('o repositorio não existe. Digite certo!!')
        }

        this.setandoLoading(false)
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
            link.setAttribute('href', repo.html_url)
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