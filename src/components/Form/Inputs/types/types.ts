/* eslint-disable @typescript-eslint/no-explicit-any */
import { Message, ValidationRule } from "react-hook-form";

type inputType =
  | "select"
  | "text"
  | "number"
  | "date"
  | "datetime"
  | "radius"
  | "upload"
  | "tablaAmortizacion"
  | "password";

/* eslint-disable @typescript-eslint/ban-types */
export type InputCustomType = {
  /** Label del ```input```, es decir la decripción que estara arriba del input. */
  label: string;
  /** Función de la libreria ```react-hook-form``` que registra el valor del input, ```funciona como un setState```,
   * y para ver lo que se registro se usa un watch, puedes ver más información aqui: {@link https://react-hook-form.com/docs/useform/register}
   *
   * @example
   *                     👇 input unique name
   * <input {...register('name')}/>
   *
   *
   *
   */
  register: Function;
  /** Conjunto de reglas parte de la libreria ```react-hook-form``` que sirven para validar que el input cumpla las condiciones deseadas,
   * aqui puedes ver más detalles de cuales son y su documentación oficial {@link https://react-hook-form.com/docs/useform/register}
   * en la sección llamada ```options```.
   */
  rules?: Partial<{
    required: Message | ValidationRule<boolean>;
    min: ValidationRule<number | string>;
    max: ValidationRule<number | string>;
    maxLength: ValidationRule<number>;
    minLength: ValidationRule<number>;
    setValueAs: (value: any) => any;
    shouldUnregister?: boolean | undefined;
    onChange?: ((event: any) => void) | undefined;
    onBlur?: ((event: any) => void) | undefined;
    disabled: boolean;
  }>;
  /** El nombre que se usara para registrar el valor del input. */
  name: string;
  placeholder: string;
  disabled?: boolean;
  type?: inputType;
  /** Forma manual de settear un valor en ```react-hook-form```, esta opción es obligatoria en caso de usar la propiedad llamada ```options```
   * para que de esta forma en a la hora de hacer click en el item este puede ser registrado en el formulario.
   *
   * @example
   *
   *  {
    register,
    type: "select",
    setValue, // 👈 para poder funcionar correctamete, esto no puede faltar
    options: [
      {
        label: "Cédula Dominicana",
        value: 1,
      },
    ],
  }
   *
   */
  setValue?: Function;
  defaultValue?: string | number | boolean | Date;
  /** Arreglo de opciones para el ```select```, si no se agrega esta propiedad el select desplegara un ```cuadro vacio```. */
  options?: Array<OptionType>;
  watch?: Function;
  isVisible?: boolean;
  modalContent?: React.ReactNode;
};

type OptionType = { label: string; value: string | number };
