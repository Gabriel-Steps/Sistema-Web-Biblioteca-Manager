import livroEntidade from '../Assets/livroSecaoEntidade.png';
import usuarioEntidade from '../Assets/usuarioSecaoEntidade.png';
import emprestimoEntidade from '../Assets/emprestimoSecaoEntidade.png';

export const getTopico = (topico) => {
    var secao = { mensagem: "", imagem: "" };
    switch (topico) {
        case "Livro":
            secao.mensagem = "Os livros são o coração de qualquer biblioteca. No nosso sistema, cada livro possui um título, autor, gênero e status de disponibilidade. Você pode visualizar todas as obras disponíveis, conferir detalhes e acompanhar quais estão emprestados. Nossa biblioteca está sempre crescendo, então fique de olho nas novidades!";
            secao.imagem = livroEntidade;
            break;
        case "Usuário":
            secao.mensagem = "Os usuários são os leitores que tornam a biblioteca viva. Cada usuário tem um perfil único, onde armazenamos suas informações. Assim, conseguimos manter um controle eficiente e oferecer um serviço personalizado.";
            secao.imagem = usuarioEntidade;
            break;
        case "Empréstimo":
            secao.mensagem = "O sistema de empréstimos permite que os usuários retirem livros por um período determinado. Cada empréstimo contém informações como data de retirada, data prevista para devolução e status atualizado. Nosso objetivo é tornar a experiência de gerenciamento de biblioteca mais intuitiva e organizada, conectando livros e leitores de maneira eficiente. Explore o sistema e aproveite tudo o que ele tem a oferecer!";
            secao.imagem = emprestimoEntidade;
            break;
        default:
            secao.mensagem = "Tópico não encontrado";
    }
    return secao;
}