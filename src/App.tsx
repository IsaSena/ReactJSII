//import styled from 'styled-components'
import { useState } from "react";
import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header"
import { GlobalStyle } from "./styles/global";
import Modal from "react-modal";
import { NewTransactionModal } from "./components/NewTransactionModal";
import { TransactionsProvider } from "./hooks/useTransactionsContext";

//const Title = styled.h1 `
//  font-size: 64px;
//  color: #8257e6;
//`
Modal.setAppElement('#root'); //o modal fica dentro do root

export function App() {
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false);

    function handleOpenNewTransactionModal(){
        setIsNewTransactionModalOpen(true);
    }

    function handleCloseNewTransactionModal(){
        setIsNewTransactionModalOpen(false);
    }
  return ( //passa a propriedade no on e aplica o valor da função executado no click
    <TransactionsProvider> 
      <Header onOpenNewTransactionModal={handleOpenNewTransactionModal}/> 

      <Dashboard/>

      <NewTransactionModal
        isOpen={isNewTransactionModalOpen}
        onRequestClose={handleCloseNewTransactionModal}
      />

     <GlobalStyle/>
    </TransactionsProvider>
  );
}

