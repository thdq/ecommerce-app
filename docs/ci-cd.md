# Continuous Integration/Continuous Delivery

## Gatilhos

- **Ao Abrir um Pull Request** a pipeline `pull-request.yml` será iniciada, ela executa todos os testes da aplicação;

- **Ao realizar um Push** para a branch **main** a pipeline `build-ecommerce-rn.yml` será executada, ao inicializar será executado todos os testes e o build do APK será disponibilizado em um arfetado, que poderá ser feito donwload e testado em um dispositivo Android;

- **Ao criar uma release** o artefato será consumido e disponiblizado para donwload.
