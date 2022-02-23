import { API } from '../config/api'
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Dropdown } from 'react-bootstrap';

//import component
import ActionsTable from './ActionsTable';


export default function DataTransactions() {

  const params = useParams()
  const id = params.id

  const [dataTransactions, setDataTransactions] = useState();

  const getTransactions = async () => {

    try {
      
      const response = await API.get("/data-transactions")

      setDataTransactions(response.data.data.bill)

    } catch (error) {
      console.log(error)
    }
  }

  console.log(dataTransactions)

  useEffect(()=>  {
    let abortController = new AbortController();
    getTransactions();
    
    return () => {  
      abortController.abort();  
      } 
  }, []);


  return(
    <div className="table-transactions">
      <h3>
        Incoming Transactions
      </h3>
      <table>
        <thead>
          <tr>
            <th>No.</th>
            <th>User</th>
            <th>Bukti Transfer</th>
            <th>Film</th>
            <th>Number Account</th>
            <th>Status Payment</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {dataTransactions?.map((item, index)=> {
            return(
              <tr key={item.id}>
                <td>{index + 1}.</td>
                <td>{item.buyer.fullName}</td>
                <td>{item.transferProof}</td>
                <td>{item.film.title}</td>
                <td>{item.accountNumber}</td>
                <td className=''>{item.status}</td>
                <td>
                  <ActionsTable />
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}