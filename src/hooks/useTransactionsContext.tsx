//Dessa maneira todos os componentes podem ter acesso
import { ReactNode, createContext, useContext, useEffect, useState } from 'react'
import { api } from '../services/api';



interface Transaction{
    id: number;
    title: string;
    amount: number;
    type: string;
    category: string;
    createdAt: string;
}

type TransactionInput = Omit<Transaction, 'id' | 'createdAt'>;

interface TransactionsProviderProps{ //criado para no app ser entendido que é um componente que recebe conteúdo
    children: ReactNode; //aceita qualquer conteúdo válido para o react
}

interface TransactionsContextData{ //passa a tipagem dos dados que serão recebidos 
    transactions: Transaction[];
    createTransaction:(transaction: TransactionInput) => Promise<void>;
}

//vai armazenar uma lista de transações
const TransactionsContext = createContext<TransactionsContextData>( //força um formato ali pq o TS nao aceita [] pois diz n ter o formato que peço
    {} as TransactionsContextData
);

export function TransactionsProvider({children}: TransactionsProviderProps){ //responsavel por carregar as transações
    const [transactions, setTransactions] = useState<Transaction[]>([]); //um array de transaction

    useEffect(() => {
        api.get('/transactions')//
        .then(response => setTransactions(response.data.transactions)) //busca na rota criada dentro do array dessa maneira
    }, []); // toda variavel ali dentro q mudar seu valor, executa dnv

    async function createTransaction(transactionInput : TransactionInput){ //recebe a info e a tipagem dela
        const response = await api.post('/transactions', { //pega a resposta da inserção feita
            ...transactionInput, //todos os dados dele
            createdAt:new Date(), // + adiciona a data atual, senão falharia, pq no table tem essa info
        })
        const {transaction} = response.data; //acessa o transaction, onde fica os dados do axios
        
        setTransactions([ //copia dentro do vetor as antigas infos + as novas
            ...transactions,
            transaction
        ]);
    }

    return(//chave dupla pq retorna a listagem js e o objeto
        <TransactionsContext.Provider value={{transactions, createTransaction}}> 
            {children}
        </TransactionsContext.Provider>
    );
}

export function useTransactions(){
    const context = useContext(TransactionsContext);

    return context;
}