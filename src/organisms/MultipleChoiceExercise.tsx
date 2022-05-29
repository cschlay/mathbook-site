import { Choice, ChoiceField } from "../atoms/ChoiceField";
import { AuthRequired } from "../molecules/AuthRequired";
import { Button } from "../atoms/Button";
import { Form } from "../atoms/Form";
import { useExercise } from "../hooks/useExercise";
import { useForm } from "react-hook-form";

interface Props {
  choices: Choice[];
  /** There are multiple correct answers. */
  multiple: boolean;
  slug: string;
}

export const MultipleChoiceExercise = ({ choices, multiple, slug }: Props) => {
  const exercise = useExercise(slug);
  const { handleSubmit, register } = useForm();
  const fieldType = multiple ? "checkbox" : "radio";

  if (!exercise) {
    return <AuthRequired />;
  }

  return (
    <Form onSubmit={handleSubmit(exercise.submit)}>
      {choices.map((choice) => (
        <ChoiceField
          key={choice.id}
          name="choices"
          register={register}
          type={fieldType}
          value={choice}
        />
      ))}

      <Button type="submit">Submit</Button>
    </Form>
  );
};
