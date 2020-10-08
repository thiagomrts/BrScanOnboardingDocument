## BrScanOnBoardingDocument

## ![Screenshot from 2020-10-07 16-36-56](https://user-images.githubusercontent.com/57572762/95391571-468a9980-08c5-11eb-94dc-868300113e40.png) ![Screenshot from 2020-10-07 14-10-37](https://user-images.githubusercontent.com/57572762/95391622-5bffc380-08c5-11eb-8ef3-9465f00220d9.png) ![Screenshot from 2020-10-07 16-04-34](https://user-images.githubusercontent.com/57572762/95391673-776ace80-08c5-11eb-8297-cc2a382c0b04.png) ![Screenshot from 2020-10-07 16-04-09](https://user-images.githubusercontent.com/57572762/95391708-88b3db00-08c5-11eb-9b11-1b16f11f34a0.png)


## :computer: Projeto

Aplicação para captura e registro de documentos específicos, BrScanOnboardingDocument.

## :rocket: Tecnologias

Esse projeto foi desenvolvido com as seguintes tecnologias:
 
 - Yarn
 - React Native
 - Type
 - React Hooks
 - React Navigation
 - Styled Components
 - React Marked Text (para máscara de CPF)
 - Yup (para validação do campo CPF)
 - React Image Picker (para a câmera)
 - React Icons
 - Para garantir o boqueio da rotação, foi adicionado o modo "portrait" no arquivo AndroidManifest.xml
  
OBSs:

 - Pequenas partes não foram feitas por falta de material, coisas pequenas como a imagem do documento na tela de câmera e etc.
 - Alguns ícones cujos materiais não existiam, foram substituidos por ícones.
 - A qualidade do layout no geral, é coerente ao tempo de desenvolvimento.

## :thinking:  Instruções de utilização:

 - Abra a pasta do projeto pelo terminal/cmd
 - Execute o comando yarn (pois a pasta node_modules não estará no repositório, é pesada)
 - Abra o emulador com o comando "adb emulator -avd 'nome do emulador'" ou conecte um dispositivo via usb e de permissão de DEBUG
 - Cheque a disponibilidade do emulador/dispositivo físico com o comando "adb devices"
 - Execute o comando "yarn android" para buildar o projeto no dispositivo
 - Caso o bundle não inicie, execute o comando "yarn start" e de reload no app pelo dispositivo

## :rocket: O projeto foi testado nos seguintes ambientes:

 - Android Galaxy Gran Prime
 - Android Motorola Moto G7
 - Android Nexus 5X (emulador)
 - IOS genérico (emulador)

#
Feito com :hearts: by thiagomrts :wave:
