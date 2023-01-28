# Introdução

Este documento comtempla ajudá-lo entender a estrutura, modelo de uso, e uma introdução básica das bibliotecas usadas e seu respectivo motivo.

## Estrutura de pasta

- `./android`: Pasta onde localiza-se módulos/binários nativos do Android (gerado com `npx expo prebuild`);
- `./android`: Pasta onde localiza-se módulos/binários nativos do iOS (gerado com `npx expo prebuild`);
- `./__mocks__`: Pasta para armazenamento de dados brutos e mock de libs como o axios;
- `./src/__tests__`: Pasta onde são escritos os testes, sendo dividido pelas sub-pastas de **unit**, **integration** e **e2e**;
- `./src/api`: Onde fica as chamada para requisição HTTP, nela cada requisição é separada por aquivo;
- `./src/components`: Onde estão os pedaços de interface utilizadas na aplicação;
- `./scr/config`: Local para armazenar configurações globais como variáveis de ambiente
- `./src/hooks`: Pasta para armazenamento de hooks personalizados;
- `./src/models`: São representação de um dado na aplicação, como produto, lista e carrinho, neste projeto foi usado um modelo híbrido entre classes e tipos para representações que não necessitam de manipulação;
- `./src/navigation`: Afim de seguir um padrão de RN, essa pasta se faz necessária para implementação de navegação da aplicação (analogia à rotas da web);
- `./src/screens`: Representação de uma tela da aplicação, onde-se comporta os componentes;
- `./src/service`: Pasta onde ficam configuração/inicialização de bibliotecas.
- `./src/store`: Pasta onde-se localiza os estados globais da aplicação;

## Guideline para desenvolvimento (opinativo)

- Todo componente, função ou classe deve ser exportado usando named-exports para evitar conflitos e manter o mesmo nome na importação/exportação;
- Todo componente deve conter arquivos com o mesmo nome da pasta condizendo com sua função, ex: Produt.tsx, Product.styles.tsx, Product.stories.ts;
- Um componente não pode ter visibilidade de **_atoms_** diretamente de si, os estados devem ser recuparados através de um hook ou HOC;
- Um componente não pode realizar uma requisição HTTP diretamente na sua implementação, um hook deve ser responsável por chamar uma requisição;
- Um hook que tem como objetivo retornar dados externos deve implementar uma função que acopla a requisição HTTP (presente na pasta `./api`);
- Testes unitários devem usar o sufixo `.spec.(t|s)x?` enquanto de integração usam `.test.(t|s)x?`;

## Bibliotecas utilizadas e seu motivo

- **Jotai**: Permite construir estados com a idéia de átomos (semelhante ao Recoil), podemos usar o hook `useAtom` tal como usamos o `useState` para manipular estados;
- **SWR**: Ferramenta para consumo de requisições HTTP, com a possibilidade de aplicar estratégia de validação de cache, revalidação após o fetch, e nos traxer uma melhor UX.
