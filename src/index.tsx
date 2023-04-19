import React from 'react';
import ReactDOM from 'react-dom/client';
import {App} from './App';
import { Model, createServer } from 'miragejs'

  createServer({
    models:{ //mirage tem bd interno
      transaction: Model,
    },

    seeds(server){
      server.db.loadData({
        transactions:[ //sempre o model no plural
          {
            id: 1,
            title: 'Freelance',
            type: 'deposit',
            category: 'Dev',
            amount: 3000,
            createdAt: new Date('2023-04-18 11:00:00'),
          },
          {
            id: 2,
            title: 'Compras',
            type: 'withdraw',
            category: 'Supermercado',
            amount: 450,
            createdAt: new Date('2023-04-10 16:20:31'),
          }
        ],
      })
    },

    routes(){
      this.namespace = 'api'; //fala pro mirage que todas as chamadas api estão no endereço dado

      this.get('/transactions', () => {
        return this.schema.all('transaction') //retorna todas as transaçõs do bd
      });//qnd houver get pra rota
      this.post('/transactions', (schema, request) => { //schema é o bd
        const data = JSON.parse(request.requestBody) //pradrao vir em texto, ai o json parse converte pra objeto no JS

        return schema.create('transaction', data)
      })
    }
  })


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
