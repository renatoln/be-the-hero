import React from 'react'
import { Link } from 'react-router-dom'
import { FiPower, FiTrash2 } from 'react-icons/fi'

import logoImg from '../../assets/logo.svg'

//import api from '../../services/api'

import './styles.css'

export default function Profile() {
   /*const [incidents, setIncidents] = useState([])

   const history = useHistory()
   const ongId = localStorage.getItem('ongId')
   const ongName = localStorage.getItem('ongName')

   useEffect(() => {
      api.get('profiles', {
         headers: {
            Authorization: ongId
         }
      }).then(response => setIncidents(response.data))
   }, [ongId])

   async function handleDeleteIncident(id) {
      try {
         await api.delete(`incidents/${id}`, {
            headers: {
               Authorization: ongId
            }
         })

         setIncidents(incidents.filter(incident => incident.id !== id))
      } catch (error) {
         alert(`Erro ao deletar, tente novamente.`)
      }
   }

   function handleLogout() {
      localStorage.clear()

      history.push('/')
   }*/

   return (
      <div className="profile-container">
         <header>
            <img src={logoImg} alt="Be The Hero" />
            <span>Bem-vinda, APAD</span>

            <Link className="button" to="/incidents/new">Cadastrar novo caso</Link>
            <button onClick="" type="button">
               <FiPower size={18} />
            </button>
         </header>

         <h1>Casos Cadastrados</h1>

         <ul>
            <li>
               <strong>CASO:</strong>
               <p>Caso Teste</p>

               <strong>DESCRIÇÃO:</strong>
               <p>Descricao Teste</p>

               <strong>VALOR:</strong>
               <p>120,00</p>

               <button onClick="" type="button">
                  <FiTrash2 size={20} color="#a8a8b3" />
               </button>
            </li>
            <li >
               <strong>CASO:</strong>
               <p>Caso Teste</p>

               <strong>DESCRIÇÃO:</strong>
               <p>Descricao Teste</p>

               <strong>VALOR:</strong>
               <p>120,00</p>

               <button onClick="" type="button">
                  <FiTrash2 size={20} color="#a8a8b3" />
               </button>
            </li>
            <li>
               <strong>CASO:</strong>
               <p>Caso Teste</p>

               <strong>DESCRIÇÃO:</strong>
               <p>Descricao Teste</p>

               <strong>VALOR:</strong>
               <p>120,00</p>

               <button onClick="" type="button">
                  <FiTrash2 size={20} color="#a8a8b3" />
               </button>
            </li>
         </ul>
      </div>
   )
}