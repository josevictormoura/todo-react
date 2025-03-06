import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import ModalCard from './ModalCard';

function Formulario({ handleSubmit, onChange, valueInputDesc, categoriaSelecionada, handleChangeCategoria, showModal, close, errorForm }) {
  return (
    <ModalCard show={showModal} close={close}>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label htmlFor="descricao">Descrição</Form.Label>
          <Form.Control
            className={errorForm.descError ? 'border-danger' : ''}
            onChange={onChange}
            value={valueInputDesc}
            id="descricao"
            placeholder="Descrição"
            aria-invalid={errorForm.descError}
            aria-describedby={errorForm.descError ? "descricao-erro" : undefined}
          />
          {errorForm.descError && (
            <Form.Text id="descricao-erro" className="text-danger">
              A descrição é obrigatória.
            </Form.Text>
          )}
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label htmlFor="categoria">Categoria</Form.Label>
          <Form.Select
            className={errorForm.categoryError ? 'border-danger' : ''}
            id='categoria'
            value={categoriaSelecionada}
            onChange={handleChangeCategoria}
            aria-invalid={errorForm.categoryError}
            aria-describedby={errorForm.categoryError ? "categoria-erro" : undefined}
          >
            <option>Selecione uma categoria</option>
            <option value='Estudo'>Estudo</option>
            <option value='Trabalho'>Trabalho</option>
            <option value='Pessoal'>Pessoal</option>
          </Form.Select>
          {errorForm.categoryError && (
            <Form.Text id="categoria-erro" className="text-danger">
              A categoria é obrigatória.
            </Form.Text>
          )}
        </Form.Group>
        <Button type="submit" size='sm' variant="primary">
          Criar Tarefa
        </Button>
        <Button size='sm' variant="secondary" onClick={close} className="ms-2">
          Cancelar
        </Button>
      </Form>
    </ModalCard>
  );
}

export default Formulario;