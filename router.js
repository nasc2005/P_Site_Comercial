import Home from './home.js'
import Sobre from './sobre.js'
import Contato from './contato.js'
import Cursos from './cursos.js';
import Graduacao from './graduacao.js';
import Acervo from './acervo.js';
import Alunos from './alunos.js';
import Editais from './editais.js';
import Secretaria from './secretaria.js';

let rotas;
export default rotas = {
    "#home": {
        component: Home,
        meta: {
            title: "Mini SPA - Home",
            description: "Página inicial do mini SPA",
        },
    },
    "#sobre": {
        component: Sobre,
        meta: {
            title: "Mini SPA - Sobre",
            description: "Página sobre o mini SPA",
        },
    },
    "#contato": {
        component: Contato,
        meta: {
            title: "Mini SPA - Contato",
            description: "Página de contato do mini SPA",
        },
    },
    "#cursos": {
        component: Cursos,
        meta: {
            title: "Mini SPA - Curso",
            description: "Página de Curso do mini SPA",
        },
    },
    "#graduacao": {
        component: Graduacao,
        meta: {
            title: "Mini SPA - Graduação",
            description: "Página de Graduação do mini SPA",
        },  
    },
    "#acervo": {
        component: Acervo,
        meta: {
            title: "Mini SPA - Acervo",
            description: "Página de Graduação do mini SPA",
        },  
    },
    "#alunos": {
        component: Alunos,
        meta: {
            title: "Mini SPA - Graduação",
            description: "Página de Graduação do mini SPA",
        },  
    },
    "#editais": {
        component: Editais,
        meta: {
            title: "Mini SPA - Editais",
            description: "Página de Graduação do mini SPA",
        },  
    },
    "#secretaria": {
        component: Secretaria,
        meta: {
            title: "Mini SPA - Secretaria",
            description: "Página de Graduação do mini SPA",
        },  
    },
};



