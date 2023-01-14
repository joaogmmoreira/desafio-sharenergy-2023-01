import '../Styles/UserCard.css';

export default function UserCard(props) {
  return (
    <div className="userCard">
      <h4>{ `${props.firstName} ${props.lastName}` }</h4>
      <img
        src={ props.picture }
        alt={ props.name }
        />
        <p>{ props.login }</p>
      <p>{ props.email }</p>
      <p>{ `${props.date} years` }</p>
    </div>

  )
}