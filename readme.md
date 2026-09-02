# In-Time

## Descrição

In-Time é um relógio digital online, gratuito e responsivo. A aplicação exibe a hora atual em tempo real, apresenta uma saudação de acordo com o período do dia e permite definir uma frase personalizada.

## Funcionalidades

- Exibição de horas, minutos e segundos.
- Atualização automática da hora a cada segundo.
- Saudação dinâmica: bom dia, boa tarde ou boa noite.
- Edição da frase personalizada pelo ícone de edição.
- Persistência da frase no `localStorage` do navegador.
- Interface minimalista e responsiva.

## Demonstração online

Acesse o [In-Time](https://cicerosnt.github.io/in-time/) diretamente no navegador.

## Tecnologias

- HTML
- CSS
- JavaScript

## Execução local

Clone o repositório e entre na pasta do projeto:

```bash
git clone https://github.com/cicerosnt/in-time.git
cd in-time
```

Depois, abra o arquivo `index.html` no navegador. No VS Code, também é possível usar a extensão Live Server para iniciar um servidor local.

O projeto não exige instalação de dependências ou um processo de build.

## Como personalizar a frase

1. Passe o mouse sobre a frase exibida ao lado da saudação.
2. Clique no ícone de edição.
3. Digite a nova frase.
4. Pressione `Enter` para salvar ou `Esc` para cancelar.

A frase fica salva apenas no navegador atual, por meio do `localStorage`. Ela não é enviada para um servidor e não é compartilhada entre dispositivos ou navegadores.

## Estrutura do projeto

```text
in-time/
├── index.html    # Estrutura da aplicação e metadados
├── style.css     # Estilos e responsividade
├── script.js     # Relógio e preferências do usuário
├── robots.txt    # Instruções para rastreadores
└── sitemap.xml   # Sitemap do site publicado
```

## Compatibilidade

Funciona em navegadores modernos com suporte a JavaScript, `localStorage` e CSS responsivo.

## Autor

Desenvolvido por [@cicerosnt](https://github.com/cicerosnt).
