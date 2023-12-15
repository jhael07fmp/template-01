import InputCustom from "../../components/Form/Inputs/InputCustom";
import { useForm } from "react-hook-form";

const Home = () => {
  const { register, setValue } = useForm();

  return (
    <div className="text-2xl p-10 grid gap-6 mx-auto w-fit grid-cols-2">
      <InputCustom
        label="Date"
        placeholder="Type your name"
        name="date"
        setValue={setValue}
        register={register}
        type="date"
      />
      <InputCustom
        label="DateTime"
        placeholder="Type your name"
        name="datetime"
        setValue={setValue}
        register={register}
        type="datetime"
      />
      <InputCustom
        label="Select"
        placeholder="Type your name"
        name="select"
        register={register}
        type="select"
        setValue={setValue}
        options={[{ label: "option 1", value: 1 }]}
      />
      <InputCustom
        label="Radius"
        placeholder="Type your name"
        name="select"
        register={register}
        type="radius"
      />
      <InputCustom label="text" placeholder="Type your name" name="text" register={register} />
      <InputCustom
        label="Number"
        placeholder="Type your name"
        type="number"
        name="number"
        register={register}
      />
      <InputCustom
        label="Password"
        placeholder="Type your name"
        name="password"
        type="password"
        register={register}
      />
      <InputCustom
        label="Password"
        placeholder="Type your name"
        name="password"
        type="upload"
        register={register}
      />
    </div>
  );
};

export default Home;
