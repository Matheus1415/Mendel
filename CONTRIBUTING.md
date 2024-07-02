# Contribuindo

Em primeiro lugar, obrigado por dedicar seu tempo para contribuir! :hearts:

Todos os tipos de contribuições são incentivados e valorizados.  Consulte o [Índice](#índice) para diferentes maneiras de ajudar e detalhes sobre como este projeto lida com elas.  Por favor, certifique-se de ler a seção relevante antes de fazer sua contribuição.  Isso tornará tudo muito mais fácil para nós, mantenedores, e facilitará a experiência para todos os envolvidos.  A comunidade aguarda suas contribuições. :tada:


## Índice 

- [Como Contribuir](#como-contribuir)
- [Reportando Bugs](#reportando-bugs)
- [Diretrizes de Contribuição](#diretrizes-de-Contribuição)
- [Styleguides](#styleguides)
- [Agradecimentos](#agradecimentos)


## Como Contribuir

Para contribuir com este projeto, siga estes passos:

1. Faça um fork do repositório e clone-o localmente.
2. Crie uma branch com um nome descritivo para a sua feature ou correção (`git checkout -b feature/nome-da-feature`).
3. Commit suas mudanças (`git commit -am 'Adiciona nova feature'`), utilize a documentação feita do [Styleguides](#styleguides).
4. Push para a branch (`git push origin feature/nome-da-feature`).
5. Abra um Pull Request descrevendo as mudanças propostas e os problemas resolvidos.


## Reportando Bugs

Se você encontrar um problema/bug com o projeto, por favor:
- Verifique se o problema já foi reportado, antes de criar um novo.
- Descreva claramente o problema encontrado e forneça passos para reproduzi-lo, se possível.
- Ou utilize o formulário que está disponível na aplicação.

## Diretrizes de Contribuição

- Use um estilo de código consistente com o projeto.
- Teste todas as mudanças feitas.
- Documente adequadamente novas funcionalidades ou mudanças significativas no código.


## Fluxo de Trabalho com Pull Requests

- Garanta que cada Pull Request tenha uma descrição clara do que foi feito e por quê.
- Mantenha discussões construtivas e respeitosas durante o processo de revisão.


## Styleguides

### Documentação do Código

O código deve ser documentado utilizando [JsDoc](https://jsdoc.app/) e deve possuir tags como: `@param`, `@returns`, `@example`, `@description`, caso seja necessário.

### Commit Messages

As mensagens de Commit seguem um padrão:

<table>
  <tr>
    <th>Tipo de Commit</th>
    <th>Descrição</th>
  </tr>
  <tr>
    <td><code>feat</code></td>
    <td>Uma nova funcionalidade ou feature para o usuário final.</td>
  </tr>
  <tr>
    <td><code>fix</code></td>
    <td>Correção de um bug específico percebido pelo usuário final.</td>
  </tr>
  <tr>
    <td><code>docs</code></td>
    <td>Alteram a documentação do projeto, como atualizações de README, comentários de código, ou páginas de ajuda.</td>
  </tr>
  <tr>
    <td><code>style</code></td>
    <td>Alterações puramente visuais, como ajustes de formatação, correção de erros ortográficos, ou adição de pontos-e-vírgulas ausentes.</td>
  </tr>
  <tr>
    <td><code>refactor</code></td>
    <td>Reestruturações no código existente sem alterar seu comportamento externo.</td>
  </tr>
  <tr>
    <td><code>*!</code></td>
    <td>Use '!' para indicar mudanças drásticas de qualquer tipo.</td>
  </tr>
</table>

```bash
<type>(<scope>): <subject>
  │       │         │
  │       │         └─ Alterações feitas
  │       └─ Escopo da Commit(Opcional)
  └─ Qual tipo de commit

exemplo:
  docs: made the basis of contribution documentation
```
> [!TIP]
> Caso queira conhecer mais sobre esse tipo de padrão de commit acesse o site: [Conventional Commits](https://www.conventionalcommits.org/pt-br/v1.0.0/)


## Agradecimentos

Agradecemos antecipadamente por suas contribuições para este projeto!
