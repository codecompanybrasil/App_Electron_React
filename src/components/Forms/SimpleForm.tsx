import { Formik, Form, Field, ErrorMessage } from "formik";

function SimpleForm() {
    const ipcRenderer = window.ipcRenderer;

    const initialValues = {
        description: "",
    };

    const onSubmit = (values: string) => {
        console.log("values", values);
        ipcRenderer.send("submit:SimpleForm", values);
    };

    return (
        <div>
            <Formik initialValues={initialValues} onSubmit={() => onSubmit("teste")}>
                <Form>
                    <div>
                        <Field
                            type="text"
                            name="description"
                            id="description"
                        />
                        <ErrorMessage name="description" />
                    </div>
                    <button type="submit">Salvar</button>
                </Form>
            </Formik>
        </div>
    );
}

export default SimpleForm;
