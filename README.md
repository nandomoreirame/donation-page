# Donation page

## Teste para Frontend - Página de Doação

### Sobre este teste

A Trackmob é uma empresa focada em desenvolver produtos que auxiliam ONGs na captação de recursos, possibilitando uma experiência de doação incrível para seus doadores.

Com este objetivo, um de nossos produtos consiste numa página de doação personalizada, para que pessoas interessadas em ajudar a ONG se inscrevam e comecem a doar. Este teste consiste em implementar uma versão simples de um de nossos modelos de página de doação.

### O teste

Você deverá implementar a página disponível ​[nesse link​](https://drive.google.com/file/d/0B6UrrFcFJAjXRHdNZUJTYnJsd2s/view?usp=sharing).

Crie um repositório no github para o teste e nos envie o link assim que terminar.
Você deve executar os seguintes pontos:

- [ ] Finalizar a página seguindo as guias e o exemplo no arquivo PSD
      (use o GIMP caso não possua o Photoshop)
- [ ] Implementar a validação de e-mail, exibindo o erro como no exemplo.
- [ ] O selectbox de frequência deve ter as seguintes opções: "Única", "Mensal",
      "Semestral", "Anual"
- [ ] O valor inserido e a frequência devem mudar o valor ao lado do botão de
      confirmação (R\$ 35 mensais no exemplo)
- [ ] Todos os campos são necessários, mostre com um erro os campos
      esquecidos ao submeter o formulário
- [ ] Se todo os campos estiverem preenchidos e validados, você deve enviar os
      dados para a API REST

### API REST

Você irá executar um POST na sequinte URL:
`https://frontend-test-trackmob.firebaseio.com/253c0d77-7095-48a0-8114-6ea307ae743 b/​<github_username>​/donors.json`

Troque ​<github_username>​ pelo seu login no github
Envie os dados no seguinte formato JSON:

```json
{
  "recurrence"​:​ ​"Anual"​,
  "value"​:​ ​"R$30,00"​,
  "complete_name"​:​ ​"John Doe da Silva"​,
  "first_name"​:​ ​"John"​,
  "last_name"​:​ ​"Doe da Silva"​,
  "email"​:​ ​"joaosilva@mail.com.br"​,
  "document"​:​ ​"345.234.543-12"​,
  "card_number"​:​ ​"4212432543294567"​,
  "cvv"​:​ ​"456"​,
  "validity"​:​ ​"02/2022"​,
  "accept_contact"​:​ ​true​,
}
```

### Tarefas Bônus

- [ ] Implemente algo que melhore a experiência do usuário e não foi pedido no teste
      (descreva pra nós qual foi a melhoria).
- [ ] Implemente máscaras e validação para todos os campos
- [ ] Implemente validação no evento de blur
- [ ] Faça o layout responsivo
- [ ] Torne o layout acessível
- [ ] Publique sua aplicação e nos mande o link de acesso
- [ ] Adicione uma boa cobertura de testes no seu código
      Critérios de avaliação
- [ ] Código limpo, bem estruturado e bem comentado
- [ ] Fidelidade ao layout
- [ ] Bom uso de git
- [ ] Qualidade e quantidade de bônus implementados
- [ ] Experiência do usuário
