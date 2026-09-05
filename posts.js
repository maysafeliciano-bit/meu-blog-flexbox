const posts = [
    {
        titulo: "Aprendendo HTML",
        imagem: "imagem-blog.png",
        texto: "HTML é a linguagem utilizada para estruturar as páginas da web."
    },
    {
        titulo: "Conhecendo o CSS",
        imagem: "imagem-blog.png",
        texto: "Com o CSS podemos deixar nossos sites mais bonitos e organizados."
    },
    {
        titulo: "Aprendendo Flexbox",
        imagem: "imagem-blog.png",
        texto: "O Flexbox facilita a organização dos elementos em uma página."
    },
    {
        titulo: "JavaScript",
        imagem: "imagem-blog.png",
        texto: "JavaScript permite adicionar interatividade às páginas."
    },
    {
        titulo: "Sites Responsivos",
        imagem: "imagem-blog.png",
        texto: "Um site responsivo se adapta a diferentes tamanhos de tela."
    },
    {
        titulo: "Desenvolvimento Web",
        imagem: "imagem-blog.png",
        texto: "HTML, CSS e JavaScript trabalham juntos para criar páginas web."
    }
];

const containerPosts = document.getElementById("posts");

posts.forEach((post) => {
    const article = document.createElement("article");

    article.innerHTML = `
        <img src="${post.imagem}" alt="${post.titulo}">
        <h2>${post.titulo}</h2>
        <p>${post.texto}</p>
    `;

    containerPosts.appendChild(article);
});

