import { useForm, SubmitHandler } from "react-hook-form";
import { ThirdButton } from "./Button";

interface IFormInput {
  firstName: string;
  lastName: string,
  phoneNumber: string,
  inquiry: string,
}

export default function ContactForm() {
  const { register, formState: { errors }, handleSubmit } = useForm<IFormInput>();
  const onSubmit: SubmitHandler<IFormInput> = data => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-2 lg:gap-8 lg:px-10 justify-between px-10 mb-10 lg:mb-0">
    <div className="flex flex-col gap-2 lg:gap-6">
      <div className="flex flex-col justify-between gap-1 mb-2">
        <input {...register("firstName", { required: true })}
          className="px-4 py-2 rounded-lg text-black font-light bg-[#b8ccdc] border-2 placeholder-slate-500"
          placeholder="Nombre"
        />
        <p className="text-red-800 font-light text-xs ml-2 min-h-[1rem]">
          {errors.firstName && "El nombre es requerido."}
        </p>
      </div>

      <div className="flex flex-col justify-between gap-1 mb-2">
        <input {...register("lastName", { required: true })}
          className="px-4 py-2 rounded-lg text-black font-light bg-[#b8ccdc] border-2 placeholder-slate-500"
          placeholder="Apellido"
        />
        <p className="text-red-800 font-light text-xs ml-2 min-h-[1rem]">
          {errors.lastName && "El apellido es requerido."}
        </p>
      </div>

      <div className="flex flex-col justify-between gap-1 mb-2">
        <input {...register("phoneNumber", { required: true })}
          className="px-4 py-2 rounded-lg text-black font-light bg-[#b8ccdc] border-2 placeholder-slate-500"
          placeholder="Teléfono"
        />
        <p className="text-red-800 font-light text-xs ml-2 min-h-[1rem]">
          {errors.phoneNumber && "El teléfono es requerido."}
        </p>
      </div>
        
      <div className="flex flex-col justify-between gap-1 mb-2">
        <textarea {...register("inquiry", { required: true })}
          className="px-4 py-2 rounded-lg text-black font-light bg-[#b8ccdc] border-2 placeholder-slate-500 resize-none"
          placeholder="Solicitud"
          rows={3}
        />
        <p className="text-red-800 font-light text-xs ml-2 min-h-[1rem]">
          {errors.inquiry && "La solicitud es requerida."}
        </p>
      </div>
    </div>
    <ThirdButton onClick={() => console.log()}>Envíe su solicitud ahora</ThirdButton>
  </form>
  );
}