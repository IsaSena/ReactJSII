import { useContext } from 'react';
import { Container } from "./styles";
import incomeImg from "../../assets/income.svg";
import outcomeImg from "../../assets/outcome.svg";
import totalImg from "../../assets/total.svg";
//import { TransactionsContext } from "../../TransactionsContext";
import { useTransactions } from '../../hooks/useTransactionsContext';

export function Summary(){
    const { transactions } = useTransactions(); //utiliza os hooks do react para consumir os dados do contexto
    
    // const totalDeposits = transactions.reduce((acc, transaction) => { //passa por todas as transações, tem um acumulador e o valor inicial como 0
    //     if (transaction.type === 'deposit') { 
    //         return acc + transaction.amount; 
    //     }

    //     return acc;
    // }, 0); // mas teria que fazer um pra cada

    const summary = transactions.reduce ((acc, transaction) =>{ //aqui soma os valores por tipo da transação
        if (transaction.type === 'deposit') {
            acc.deposits += transaction.amount;
            acc.total += transaction.amount;
        }else{
            acc.withdraw += transaction.amount;
            acc.total += transaction.amount;
        }
        return acc;
    }, { //valores padrões como objeto
        deposits: 0,
        withdraw: 0,
        total: 0,
    })

    return (
        <Container>
            <div>
                <header>
                    <p>Entradas</p>
                    <img src={incomeImg} alt="Entradas"/>
                    </header>
                        <strong>
                                {new Intl.NumberFormat('pt-BR', { // formata pra moeda específica
                                    style: 'currency',
                                    currency: 'BRL'
                                }).format(summary.deposits)}
                        </strong>
            </div>

            <div>
                <header>
                    <p>Saídas</p>
                    <img src={outcomeImg} alt="Saída"/>
                    </header>
                        <strong>
                        -
                                {new Intl.NumberFormat('pt-BR', { // formata pra moeda específica
                                    style: 'currency',
                                    currency: 'BRL'
                                }).format(summary.withdraw)}
                        </strong>
            </div>

            <div className="highlight-background">
                <header>
                    <p>Total</p>
                    <img src={totalImg} alt="Total"/>
                    </header>
                        <strong>
                                {new Intl.NumberFormat('pt-BR', { // formata pra moeda específica
                                    style: 'currency',
                                    currency: 'BRL'
                                }).format(summary.total)}
                        </strong>
            </div>
        </Container>
    )
}