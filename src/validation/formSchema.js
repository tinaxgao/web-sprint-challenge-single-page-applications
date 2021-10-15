import * as yup from "yup";

const formSchema = yup.object().shape({
  name: yup
    .string()
    .trim()
    .required("a name is required")
    .min(2, "name must be at least 2 characters"),
  size: yup.string().oneOf(["small", "medium", "large"], "size is required"),
  onions: yup.boolean(),
  tomatoes: yup.boolean(),
  mushrooms: yup.boolean(),
  bellpeppers: yup.boolean(),
  onions: yup.boolean(),
  glutenfree: yup.boolean(),
  special: yup.string().trim(),
});

export default formSchema;
