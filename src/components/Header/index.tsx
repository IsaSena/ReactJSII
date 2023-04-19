import logoImg from '../../assets/logo.svg';
import { Container, Content } from './styles';

interface HeaderProps{
    onOpenNewTransactionModal: () => void; //recebe nenhum parametro e retorna nada
}

export function Header({onOpenNewTransactionModal}: HeaderProps){ //pega somente essa propriedade e repassas pro botao
    return (
        <Container>
          <Content>
                <img src={logoImg} alt="dt money" />
                <button type="button" onClick={onOpenNewTransactionModal}>
                    Nova transação
                </button>
          </Content>
        </Container>
        
    )
}