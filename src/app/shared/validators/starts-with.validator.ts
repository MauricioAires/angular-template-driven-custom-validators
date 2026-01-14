import { Directive, input, OnChanges, SimpleChanges } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';

@Directive({
  // Precisa adicionar as chaves (bracket) porque é um seletor de diretiva
  selector: '[starts-with]',
  standalone: true,
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: StartsWithValidator,
      /**
       * @NOTE MauricioAires
       *
       * multi: true indica que vai ter mais de uma instância da diretiva
       */
      multi: true,
    },
  ],
})
export class StartsWithValidator implements Validator, OnChanges {
  // Properties
  private fn?: () => void;
  public prefix = input.required<string>({
    alias: 'starts-with',
  });

  /***
   * @NOTE MauricioAires
   *
   * - Função que é executada sempre que um input altera o valor.
   */
  public ngOnChanges(changes: SimpleChanges): void {
    this.fn?.();
  }

  public validate(control: AbstractControl): ValidationErrors | null {
    const controValue = control.value as string | null;

    if (!controValue) {
      return null;
    }

    if (controValue.startsWith(this.prefix())) {
      return null;
    }

    return {
      startsWith: {
        expected: `Value must start with '${this.prefix()}'`,
        currentValue: controValue,
      },
    };
  }

  /**
   * @NOTE MauricioAires
   *
   * O método `registerOnValidatorChange` é opcional e é utilizado em validadores
   * customizados que dependem de algum estado externo ao próprio FormControl.
   *
   * Quando esse estado externo muda (ex: valor de outro campo),
   * devemos chamar a função `fn` registrada para informar ao Angular
   * que a validação precisa ser reexecutada.
   *
   * Isso é comum em validações dinâmicas, como:
   * - comparação entre dois campos
   * - regras condicionais baseadas em inputs externos
   *
   * Em validadores puramente estáticos, esse método não é necessário.
   */
  public registerOnValidatorChange?(fn: () => void): void {
    this.fn = fn;
  }
}
