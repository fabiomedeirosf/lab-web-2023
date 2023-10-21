# API de Produtos Fatec
#### Api para cadastro e gerenciamento de pedidos

## Executar o projeto
Criar na raiz um arquivo .env-<environment> do seu projeto

```
npm run start-dev

```

### Variáveis de ambiente

Descrição das variáveis de ambiente a serem configuradas no projeto.

|Env name      |Tipo   |Valor Padrão|Descricao                          |
|--------------|-------|------------|-----------------------------------|
|HOST          |String |            |Host que a aplicação será exposta  |
|PORT          |int    |            |Porta de exposição da app          |
|JWT_ENABLE    |string |true        |Habilita validação JWT             |
|JWT_SECRET    |string |fatec-franca|Secret para validação do JWT       |
