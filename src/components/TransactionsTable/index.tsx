//import { useContext } from "react";
import { Container } from "./styles";
//import {api} from "../../services/api";
//import { TransactionsContext } from "../../TransactionsContext";
import { useTransactions } from "../../hooks/useTransactionsContext";

//interface Transaction{
//    id: number;
//    title: string;
//    amount: number;
//    type: string;
//    category: string;
//    createdAt: string;
//}

export function TransactionsTable(){
    const { transactions }  = useTransactions();
    //const [transactions, setTransactions] = useState<Transaction[]>([]); //um array de transaction

    //useEffect(() => {
    //    api.get('/transactions')//
    //    .then(response => setTransactions(response.data.transactions)) //busca na rota criada dentro do array dessa maneira
   // }, []); // toda variavel ali dentro q mudar seu valor, executa dnv
    return (
        <Container>
            <table>
                <thead>
                    <tr>
                        <th>Título</th>
                        <th>Valor</th>
                        <th>Categoria</th>
                        <th>Data</th>
                    </tr>
                </thead>

                <tbody>
                    {transactions.map(transaction =>(//o primeiro elemento precisa ter uma key em map
                        <tr key={transaction.id}> 
                            <td>{transaction.title}</td>
                            <td className = {transaction.type}>
                                {new Intl.NumberFormat('pt-BR', { // formata pra moeda específica
                                    style: 'currency',
                                    currency: 'BRL'
                                }).format(transaction.amount)}
                            </td>
                            <td>{transaction.category}</td>
                            <td>
                                {new Intl.DateTimeFormat('pt-BR', { // formata pro dia específico
                                }).format(new Date(transaction.createdAt))}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </Container>
    );
}