- VER SE O DOCKER ESTA LIGADO O DAEMON / HABILITANDO NO 
-docker version

- VER OS CONTAINER INATIVOS
docker ps -a

- VER OS CONTAINERS ATIVOS
- docker ps

- VER AS IMAGENS QUE FORAM FEITOS O DOWNLOAD
- docker image ls

- SITE PARA BAIXAR AS IMAGENS DISPONÍVEIS
-https://hub.docker.com/search/?type=image

- BAIXAR IMAGENS DOCKER PARA SISTEMA
- docker container run -imagem desejada-

- FORMA ITERATIVA DE ENTRAR DENTRO DO CONTAINER INATIVOS
- docker container run -it <container ativo> bash

- EXECUTANDO COMANDOS EM UM CONTAINER EM EXECUÇÃO
- docker container exec <container id> ls

- COMANDO PARA REMOVER CONTAINER 
- docker container rm < container id>

- COMANDOS DE BÁSICO PARA CONTAINERS E IMAGENS
- docker container start < container id>
- docker container stop < container id>
- docker image rmi < container id>

- docker container prune ( REMOVE TODOS CONTAINER INATIVOS)

- ENVIANDO VARIÁVEL PARA DENTRO DO CONTAINERS 
- docker container run --name linux2 -e vartest="variavel de teste" ubuntu env

- CRIANDO UM CONTAINER E COLOCANDO EM UM SERVIDOR DA WEB
- docker container run -d --name webserver -p 8080:80 nginx
