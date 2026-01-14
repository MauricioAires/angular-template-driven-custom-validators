# **Custom Validators em Angular com Template-Driven Forms**

Este projeto tem como objetivo demonstrar e compartilhar a implementação de **validadores customizados reativos** para formulários Template-Driven do Angular. O validador oferece uma solução simples e eficiente para validações dinâmicas, adaptando-se automaticamente a mudanças de estado externo, garantindo consistência na validação de formulários.

![Preview](.github/image.png 'Custom Validators Angular Template-Driven')

## **Recursos**

- **Validação Reativa**: O validador revalida automaticamente quando o prefixo é alterado, sem necessidade de interação do usuário.
- **Template-Driven Forms**: Compatível com `NgForm` e `ngModel`, facilitando a integração em formulários existentes.
- **Standalone Directive**: Implementado como diretiva standalone usando a abordagem moderna do Angular.
- **Dinâmico e Configurável**: O prefixo pode ser alterado em tempo de execução, permitindo validações condicionais.
- **Type-Safe**: Implementado com TypeScript strict, garantindo segurança de tipos.

## **Instalação**

1. Clone o repositório:

   ```bash
   git clone https://github.com/seu-usuario/angular-template-driven-custom-validators.git
   ```

2. Navegue até o diretório do projeto:

   ```bash
   cd angular-template-driven-custom-validators
   ```

3. Instale as dependências:

   ```bash
   npm install
   ```

4. Execute o aplicativo localmente:

   ```bash
   npm start
   ```

   O aplicativo estará disponível em [http://localhost:4200](http://localhost:4200).

## **Como Usar**

Importe o `StartsWithValidator` no seu componente e aplique a diretiva `[starts-with]` no campo de input:

```typescript
import { StartsWithValidator } from './shared/validators/starts-with.validator';

@Component({
  imports: [FormsModule, StartsWithValidator],
  // ...
})
export class ExampleComponent {
  protected prefix = 'Sr.';
}
```

```html
<form #form="ngForm">
  <input name="name" ngModel [starts-with]="prefix" placeholder="Seu nome completo" />
</form>
```

## **Contribuições**

Contribuições são bem-vindas! Se você tiver melhorias, correções ou sugestões, sinta-se à vontade para abrir um **pull request**.
