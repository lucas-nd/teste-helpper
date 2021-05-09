# teste-helpper
Repositório utilizado para armazenar os códigos desenvolvidos durante o desafio da Helpper.

O frontend foi desenvolvido utilizando as seguintes tecnologias:
1. Javascript
2. ReactJS
3. React Router Dom
4. Styled-Components
5. Axios
6. Formik
7. Yup
8. Toastify

O backend foi desenvolvido utilizando as seguintes tecnologias:
1. Typescript
2. NestJS
3. Eslint
4. TypeORM

Para a persistência de dados foi utilizado o PostgreSQL.

Para o versionamento dos dados foi utilizado as seguintes tecnologias/técnicas:
1. Git
2. GitHub
3. GitFlow

**Instruções de execução:**
1. Crie um novo banco de dados
2. Navegue até o seguinte diretório: ./backend
3. Crie um arquivo .env com as informações referentes ao banco de dados descritas a seguir:

>
    TYPEORM_CONNECTION=value
    TYPEORM_HOST=value
    TYPEORM_PORT=value
    TYPEORM_USERNAME=value
    TYPEORM_PASSWORD=value
    TYPEORM_DATABASE=value
    TYPEORM_ENTITIES=src/modules/**/entities/*.ts
    TYPEORM_ENTITIES_DIR=src/modules/**/entities/
    TYPEORM_MIGRATIONS=src/shared/migrations/*.ts
    TYPEORM_MIGRATIONS_DIR=src/shared/migrations/

4. Execute o seguinte comando no terminal: `yarn`
5. Execute o seguinte comando no terminal:`yarn typeorm migration:run`
6. Execute o seguinte comando no terminal: `yarn dev`
7. Navegue até o seguinte diretório ./frontend
8. Crie um arquivo .env com as informações a seguir:

>
    SKIP_PREFLIGHT_CHECK=true
    
9. Execute o seguinte comando no terminal `npm install`
10. Execute o seguinte comando no terminal `npm start`


**Preview do Resultado:**

Home:
<img alt="1" src="/images-readme/home.jpg">

Tela de cadastro:
<img alt="1" src="/images-readme/cadastro.jpg">

Tela de visualização
<img alt="1" src="/images-readme/visualizar.jpg">
