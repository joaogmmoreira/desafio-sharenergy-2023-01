export default function CustomerRow(props) {
  return (  
    <tr key={ props.fullName}>  
      <td>{ props.fullName }</td>
      <td>{ props.email }</td>
      <td>{ props.telephone }</td>
      <td>{ props.address }</td>
      <td>{ props.ssn }</td>
      <td>
        <button
        value={props.id}
        onClick={() => props.deleteCustomer(props.id)}
        >
          Delete
        </button>
      </td>
    </tr>     
  )
}
