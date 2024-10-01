import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { toast } from "react-toastify";
import InputMask from "react-input-mask";

const FormContainer = styled.form`
  display: flex;
  align-items: flex-end;
  gap: 10px;
  flex-wrap: wrap;
  background-color: #fff;
  padding: 20px;
  box-shadow: 0px 0px 5px #ccc;
  border-radius: 5px;
`;

const InputArea = styled.div`
  display: flex;
  flex-direction: column;
`;

const Input = styled(InputMask)`
  width: 120px;
  padding: 0 10px;
  border: 1px solid #bbb;
  border-radius: 5px;
  height: 40px;
`;

const Label = styled.label``;

const Button = styled.button`
  padding: 10px;
  cursor: pointer;
  border-radius: 5px;
  border: none;
  background-color: #2c73d2;
  color: white;
  height: 42px;
`;

const Form = ({ getUsers, onEdit, setOnEdit }) => {
  const ref = useRef();
  const [fone, setFone] = useState("");

  useEffect(() => {
    if (onEdit) {
      ref.current.nome.value = onEdit.nome;
      ref.current.email.value = onEdit.email;
      setFone(onEdit.fone);
      ref.current.data_nascimento.value = onEdit.data_nascimento;
    }
  }, [onEdit]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const user = ref.current;

    if (!user.nome.value || !user.email.value || !fone || !user.data_nascimento.value) {
      return toast.warn("Preencha todos os campos!");
    }

    const phoneDigits = fone.replace(/\D/g, "");
    if (phoneDigits.length < 10) {
      return toast.warn("O telefone deve ter pelo menos 10 dígitos.");
    }

    const requestData = {
      nome: user.nome.value,
      email: user.email.value,
      fone: phoneDigits,
      data_nascimento: user.data_nascimento.value,
    };

    try {
      if (onEdit) {
        await axios.put(`http://localhost:8800/${onEdit.id}`, requestData);
        toast.success("Usuário atualizado com sucesso.");
      } else {
        await axios.post("http://localhost:8800", requestData);
        toast.success("Usuário criado com sucesso.");
      }
      resetForm();
      getUsers();
    } catch (error) {
      toast.error("Erro ao salvar usuário.");
    }
  };

  const resetForm = () => {
    ref.current.nome.value = "";
    ref.current.email.value = "";
    setFone("");
    ref.current.data_nascimento.value = "";
    setOnEdit(null);
  };

  const handlePhoneChange = (e) => {
    const value = e.target.value;
    const phoneDigits = value.replace(/\D/g, "");

    if (phoneDigits.length <= 10) {
      setFone(value.replace(/(\d{2})(\d{4})(\d+)/, "($1) $2-$3"));
    } else if (phoneDigits.length === 11) {
      setFone(value.replace(/(\d{2})(\d{5})(\d+)/, "($1) $2-$3"));
    } else {
      setFone(value);
    }
  };

  return (
    <FormContainer ref={ref} onSubmit={handleSubmit}>
      <InputArea>
        <Label>Nome</Label>
        <Input name="nome" />
      </InputArea>
      <InputArea>
        <Label>E-mail</Label>
        <Input name="email" type="email" />
      </InputArea>
      <InputArea>
        <Label>Telefone</Label>
        <Input
          name="fone"
          mask={fone.length > 10 ? "(99) 99999-9999" : "(99) 9999-9999"}
          maskChar={null}
          value={fone}
          onChange={handlePhoneChange}
        />
      </InputArea>
      <InputArea>
        <Label>Data de Nascimento</Label>
        <Input name="data_nascimento" type="date" />
      </InputArea>
      <Button type="submit">SALVAR</Button>
    </FormContainer>
  );
};

export default Form;