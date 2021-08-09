import { useContext } from "react";
import { Col, Container, Row, FormGroup, Input } from "reactstrap";
import { FormContext } from "./FormContext";

const Form = () => {
  const value = useContext<any>(FormContext);
  const {
    formState,
    formEdit,
    handleInputChange,
    handleSubmit,
    handleUpdate,
    formElements,
  } = value;

  return (
    <Container>
      <Row>
        {formElements.map((v: any, i: any) => {
          let commonProps = {
            id: v.name,
            name: v.name,
            type: v.type,
            onChange: handleInputChange,
            valid: formState[v.name].valid,
            invalid: !formState[v.name].valid,
          };

          return (
            <Col className="mb-3" {...v.responsive} key={i}>
              <FormGroup>
                {v.type === "select" ? (
                  <Input {...commonProps} style={{ appearance: "auto" }}>
                    <option value="">{v.label}</option>
                    {v.options.map((w: any, j: any) => (
                      <option selected={formState[v.name].value === w} key={j}>
                        {w}
                      </option>
                    ))}
                  </Input>
                ) : (
                  <Input
                    {...commonProps}
                    placeholder={v.label}
                    value={formState[v.name].value}
                  />
                )}
              </FormGroup>
            </Col>
          );
        })}
      </Row>

      <Row>
        <Col lg="12">
          <Input
            className="btn btn-primary"
            type="button"
            value={formEdit ? "UPDATE" : "SUBMIT"}
            onClick={formEdit ? handleUpdate : handleSubmit}
          />
        </Col>
      </Row>
    </Container>
  );
};

export default Form;
