<h1 align=center >BrScanOnboardingDocument</h1>

## ![Screenshot from 2020-10-07 14-03-44](https://user-images.githubusercontent.com/57572762/95373952-b9871680-08ab-11eb-9144-c380eefd189d.png) ![Screenshot from 2020-10-07 14-04-27](https://user-images.githubusercontent.com/57572762/95374028-d4f22180-08ab-11eb-8954-d7395ae8ff95.png) ![Screenshot from 2020-10-07 14-10-37](https://user-images.githubusercontent.com/57572762/95374144-f7843a80-08ab-11eb-95a0-d38526e1c6f2.png)


## :computer: Projeto

Aplicação para captura e registro de documentos específicos, BrScanOnboardingDocument.

## :rocket: Tecnologias

Esse projeto foi desenvolvido com as seguintes tecnologias:

 - Yarn
 - React Native
 - Typescript
 - React Hooks
 - React Navigation
 - Styled Components
 - React Marked Text (para máscara de CPF)
 - Yup (para validação do campo CPF)
 - React Image Picker (para a câmera)
 - React Icons
 
 OBSs: 
 
 1 - Algumas pequenas partes não foram feitas por falta de material, coisas pequenas como a imagem do documento na tela de câmera e etc. 
 2 - Algums ícones cujos materiais não existiam, foram substituidos por ícones.
 3 - A qualidade do layout no geral, é coerente ao tempo de desenvolvimento.

## :thinking: Instruções de utilização:

- Abra a pasta do projeto pelo terminal/cmd
- Execute o comando yarn (pois a pasta node_modules não estará no repositório, é pesada)
- Abra o emulador com o comando "adb emulator -avd 'nome do emulador'" ou conecte um dispositivo na entrada usb e de permissão de DEBUG
- Cheque a disponibilidade do emulador/dispositivo físico com o comando "adb devices"
- Execute o comando "yarn android" para buildar o projeto no dispositivo
- Caso o bundle não inicie, execute o comando "yarn start" e de reload no app pelo dispositivo 

#
Feito com :hearts: by thiagomrts :wave:
